// Seeds the Sanity "Site Settings" singleton with Solunar's current details, so
// the CMS starts pre-filled. Optional — the site falls back to static config
// until a Site Settings document exists.
//
// Usage (run once, after creating a Sanity project):
//   NEXT_PUBLIC_SANITY_PROJECT_ID=your_id \
//   NEXT_PUBLIC_SANITY_DATASET=production \
//   SANITY_WRITE_TOKEN=sk_xxx \
//   npm run seed:sanity
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || projectId === 'placeholder') {
  console.error('✗ Set NEXT_PUBLIC_SANITY_PROJECT_ID to your Sanity project id.');
  process.exit(1);
}
if (!token) {
  console.error('✗ Set SANITY_WRITE_TOKEN (Sanity → API → Tokens, with Editor permission).');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false });

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  companyName: 'Solunar Energy',
  legalName: 'Solunar Energy Sdn Bhd',
  companyNo: '1575507-K',
  email: 'sales@solunar.my',
  enquiryEmail: 'jimmy@solunar.my',
  phone: '+60 16-668 9348',
  addressStreet: 'Unit 304A, C3-09 Damansara, No. 99 Jalan Damansara',
  addressCity: 'Kuala Lumpur',
  addressPostcode: '60000',
  linkedin: '',
};

client
  .createOrReplace(siteSettings)
  .then(() => console.log('✓ Seeded "Site Settings". Edit it anytime in Studio at /studio.'))
  .catch((err) => {
    console.error('✗ Seed failed:', err.message);
    process.exit(1);
  });
