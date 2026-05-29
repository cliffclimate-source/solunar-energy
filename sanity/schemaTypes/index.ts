import { defineType, defineField, defineArrayMember, type SchemaTypeDefinition } from 'sanity';

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'companyName', title: 'Brand name', type: 'string' }),
    defineField({ name: 'legalName', title: 'Legal name', type: 'string' }),
    defineField({ name: 'companyNo', title: 'Company No.', type: 'string' }),
    defineField({ name: 'email', title: 'Public email', type: 'string' }),
    defineField({ name: 'enquiryEmail', title: 'Enquiry inbox (forms)', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'addressStreet', title: 'Address — street', type: 'string' }),
    defineField({ name: 'addressCity', title: 'Address — city', type: 'string' }),
    defineField({ name: 'addressPostcode', title: 'Address — postcode', type: 'string' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
});

const blockContent = defineType({
  name: 'blockContent',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({ type: 'block' }),
    defineArrayMember({ type: 'image', options: { hotspot: true } }),
  ],
});

const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'seoTitle', title: 'SEO title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3 }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'lead', title: 'Lead (answer-first)', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Body', type: 'blockContent' }),
  ],
});

const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
        }),
      ],
    }),
    defineField({ name: 'applications', title: 'Applications', type: 'array', of: [{ type: 'string' }] }),
  ],
});

const article = defineType({
  name: 'article',
  title: 'Knowledge Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 }),
    defineField({ name: 'body', title: 'Body', type: 'blockContent' }),
  ],
});

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  product,
  article,
  blockContent,
];
