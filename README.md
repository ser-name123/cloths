# KRAFTWEAR DUBAI - Premier Custom Apparel, Workwear & Corporate Gifting Platform

A modern, high-converting B2B web application combining the strengths of the top UAE custom apparel, industrial uniform, and corporate gifting platforms:
- **Times Clothing** (In-house direct Ajman manufacturing, custom knits, hoodies, t-shirts, Tajima embroidery)
- **Klothon** (Enterprise workwear, NFPA 2112 certified flame-resistant coveralls, high-vis safety gear, healthcare scrubs)
- **Corporate Gifts Dubai & Baharnani** (VIP executive swag boxes, tech merchandise, vacuum tumblers, event giveaways)
- **The Merchlist** (Modern e-commerce UI, No-MOQ options + bulk wholesale tier discounts, interactive 3D studio, multi-currency switcher)
- **EFZEE Fashion** (Bespoke tailoring, showroom consultation model, premium finishing)

---

## 🚀 Tech Stack
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + Custom Luxury Glassmorphism
- **Icons:** Lucide React
- **Backend / DB:** Supabase (`@supabase/supabase-js`)
- **Deployment:** Vercel Ready with zero build errors

---

## 🛠️ Features Included on the Homepage
1. **Utility & Currency Bar:** Instant currency switcher (AED, SAR, USD, EUR), live factory status, and direct WhatsApp hotline.
2. **Hero Section:** Dynamic switcher between Custom Knits, Heavy Workwear, and VIP Gifting with an embedded live specimen previewer.
3. **Instant Quote Calculator (QuoteBuilder):** Interactive slider (10 to 2,000+ pcs) with dynamic wholesale volume discounts (up to 40% off), embellishment technique selector, and instant cost breakdown.
4. **Wholesale & On-Demand Catalog:** Filterable categories with color swatches, badges (`Streetwear Bestseller`, `NFPA 2112 Certified`, `No Minimum Order`), and sample request triggers.
5. **Interactive 3D Studio (LiveCustomizer):** Pick garments, test Pantone color palettes, position brand monograms, and toggle techniques (Embroidery, 3D Puff, Screen Print, Laser Engrave).
6. **In-House Factory Tour & Machine Lineup:** Showcases CAD cutting, 15-needle Tajima embroidery machines, M&R automatic oval screen stations, and ISO compliance.
7. **Enterprise Sector Solutions:** Tailored packages for Oil & Gas, Healthcare, Hospitality, Tech Startups, and Schools.
8. **Curated Corporate Gifting Hampers:** Executive onboarding swag boxes, eco-friendly ESG kits, and trade show activation merchandise.
9. **Verified Procurement Reviews & Client Marquee:** 450+ GCC enterprise client badges and verified procurement manager testimonials.
10. **Lead Capture RFQ Modal (Supabase Ready):** Direct database insertion with confetti celebration and instant WhatsApp fallback.

---

## ⚡ Getting Started Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

---

## 🌐 Deploy to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Kraftwear Dubai homepage"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **Import Project**.
3. Under Environment Variables, add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase Anon Public Key
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = your WhatsApp Business number (e.g. `+971501234567`)
4. Click **Deploy**.

---

## 🗄️ Supabase Database Setup

1. Open your project on [Supabase.com](https://supabase.com).
2. Go to the **SQL Editor**.
3. Open `supabase-schema.sql` from this repository, copy its contents, and click **Run**.
4. The `rfq_leads` table will be created with Row Level Security (RLS) configured for anonymous quote inquiries.
