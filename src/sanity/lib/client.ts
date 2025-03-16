// src/sanity/client.ts
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "your_project_id", // ID-ul proiectului tău din Sanity
  dataset: "production", // Numele dataset-ului pe care îl folosești (de obicei, `production`)
  useCdn: true, // Folosește CDN pentru a accelera citirea datelor
});

export default client;
