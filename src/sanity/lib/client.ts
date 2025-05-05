// src/sanity/client.ts
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // ID-ul proiectului tău din Sanity
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!, // Numele dataset-ului pe care îl folosești (de obicei, `production`)
  useCdn: true, // Folosește CDN pentru a accelera citirea datelor
});

export default client;
