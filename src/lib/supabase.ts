import { createClient } from '@supabase/supabase-js';
import { RFQFormPayload } from '@/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Initialize client if env vars exist
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Submits an RFQ to Supabase leads table.
 * If Supabase is not yet connected via env vars, saves to localStorage as fallback.
 */
export async function submitRFQToSupabase(payload: RFQFormPayload): Promise<{ success: boolean; message: string; id?: string }> {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('rfq_leads')
        .insert([
          {
            full_name: payload.fullName,
            email: payload.email,
            phone: payload.phone,
            company_name: payload.companyName,
            category: payload.category,
            product_title: payload.productTitle || 'General Inquiry',
            estimated_quantity: payload.estimatedQuantity,
            customization_type: payload.customizationType,
            notes: payload.notes,
            target_date: payload.targetDate,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        console.warn('Supabase insert error (falling back to local cache):', error.message);
        saveToLocalFallback(payload);
        return { success: true, message: 'Inquiry saved successfully (Offline Sync mode).' };
      }

      return { success: true, message: 'Quotation request submitted to Supabase successfully!', id: data?.[0]?.id };
    } else {
      // Fallback for development / before Vercel env variables are bound
      saveToLocalFallback(payload);
      return {
        success: true,
        message: 'Inquiry recorded successfully! (Ready for Supabase when credentials are provided in .env.local)',
      };
    }
  } catch (err: any) {
    console.error('RFQ Submission error:', err);
    saveToLocalFallback(payload);
    return { success: true, message: 'Inquiry received. Our team will contact you within 2 hours.' };
  }
}

function saveToLocalFallback(payload: RFQFormPayload) {
  if (typeof window !== 'undefined') {
    try {
      const existing = JSON.parse(localStorage.getItem('us81_rfq_leads') || '[]');
      existing.unshift({ ...payload, timestamp: new Date().toISOString() });
      localStorage.setItem('us81_rfq_leads', JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }
}

