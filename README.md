# Ubaid Goods Transport Website

Premium Next.js and Tailwind CSS website for Ubaid Goods Transport.

## Pages

- Home
- About Us
- Services
- Fleet / Trucks
- Quote Booking Form
- House Shifting
- Loading Services
- Contact
- Blog

## Folder Structure

```txt
app/
  about/
  blog/
  contact/
  fleet/
  house-shifting/
  loading-services/
  quote/
  services/
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
components/
  header.tsx
  footer.tsx
  hero.tsx
  logo.tsx
  quote-form.tsx
  whatsapp-button.tsx
data/
  site.ts
  blog.ts
```

## Local Development

```bash
npm.cmd install
npm.cmd run dev
```

Open:

```txt
http://127.0.0.1:3000
```

## Admin CMS

Admin login:

```txt
http://127.0.0.1:3000/admin
```

Default demo credentials:

```txt
Email: admin@ubaidgoodstransport.com
Password: admin12345
```

CMS sections:

- Homepage text and hero image
- Services
- Blog posts with rich text HTML editor
- Image uploads for logo, trucks, and website images
- Fleet / trucks
- Testimonials
- FAQs
- Cities and transport routes
- SEO metadata
- Company settings, contact number, and WhatsApp

For production, set these environment variables in Vercel:

```txt
AUTH_SECRET=generate-a-long-random-secret
ADMIN_EMAIL=your-admin-email
ADMIN_PASSWORD=your-strong-password
```

You can also use `ADMIN_PASSWORD_HASH` with a bcrypt hash instead of plain `ADMIN_PASSWORD`.

## Ads Tracking

Optional Google Ads and Meta Pixel variables:

```txt
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=conversion-label
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
```

Lead events fire on quote form submit, sticky call clicks, sticky WhatsApp clicks, floating WhatsApp clicks, and landing-page call/WhatsApp buttons.

## Quote Form Storage

Set MongoDB variables before deploying the quote form:

```txt
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net
MONGODB_DB=ubaid_goods_transport
```

Quote submissions are saved in the `quote_submissions` collection with truck type, service needed, pickup date, details, contact fields, source, status, and timestamps.

## Production Build

```bash
npm.cmd run build
npm.cmd run start
```

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Select the Next.js framework preset.
4. Use `npm run build` as the build command.
5. Deploy.

## SEO

The site includes page metadata, keyword-focused headings, schema markup, `sitemap.xml`, `robots.txt`, Open Graph image generation, and SEO-friendly URLs for services, house shifting, loading services, and blog content.
