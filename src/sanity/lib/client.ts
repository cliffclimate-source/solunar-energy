import { createClient, type SanityClient } from '@sanity/client';
import { projectId, dataset, apiVersion, sanityConfigured } from '../../../sanity/env';

/**
 * Read-only Sanity client. `null` until a real project id is configured via
 * NEXT_PUBLIC_SANITY_PROJECT_ID — so the site runs entirely on static content
 * with zero network calls until a CMS project is connected.
 */
export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' })
  : null;

/**
 * Safe fetch helper. Returns `null` when Sanity is not configured or on any
 * error, so callers can fall back to static content without try/catch.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (err) {
    console.warn('[sanity] fetch failed, falling back to static content:', (err as Error)?.message);
    return null;
  }
}
