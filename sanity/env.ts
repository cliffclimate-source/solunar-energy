export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Replace via .env.local once you create a Sanity project (sanity.io).
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';

/** True once a real Sanity project id is configured. */
export const sanityConfigured = projectId !== 'placeholder' && projectId.length > 0;
