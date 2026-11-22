-- ===============================================================
-- KRAFTWEAR DUBAI - Supabase Database Schema for RFQ Leads
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard)
-- ===============================================================

CREATE TABLE IF NOT EXISTS public.rfq_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company_name TEXT NOT NULL,
    category TEXT,
    product_title TEXT,
    estimated_quantity INTEGER DEFAULT 50,
    customization_type TEXT,
    notes TEXT,
    target_date TEXT,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'in_production', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.rfq_leads ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous submissions (for the RFQ modal on the homepage)
CREATE POLICY "Allow anonymous lead submission" 
ON public.rfq_leads 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated admins to view and manage leads
CREATE POLICY "Allow authenticated read and update" 
ON public.rfq_leads 
FOR ALL 
TO authenticated 
USING (true);

-- Create indexes for quick query filtering
CREATE INDEX IF NOT EXISTS idx_rfq_leads_created_at ON public.rfq_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rfq_leads_status ON public.rfq_leads (status);
