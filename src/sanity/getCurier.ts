import { createClient } from "next-sanity";
import { groq } from "next-sanity";

const client = createClient({
  projectId: "4f5liuxr",
  dataset: "production",
  apiVersion: "2024-03-14",
});

export async function getCurierPrice() {
  try {
    const query = groq`
      *[_type == "curier"][0] {
        price
      }
    `;
    const data = await client.fetch(query);
    return data?.price || 0; // 🔥 Să returneze doar numărul
  } catch (error) {
    console.error("Eroare la fetch curier:", error);
    return 0;
  }
}
