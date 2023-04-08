import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: import.meta.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.SANITY_DATASET,
    apiVersion: import.meta.env.SANITY_API_VERSION,
    useCdn: import.meta.env.SANITY_USE_CDN,
});
