import { createClient } from "next-sanity";
import { groq } from "next-sanity";

const client = createClient({
  projectId: "4f5liuxr",
  dataset: "production",
  apiVersion: "2024-03-14",
});

// Funcția getProducts care returnează produsele
export async function getProducts() {
  try {
    // Definim query-ul GROQ
    const query = groq`
      *[_type == "product"]{
        _id,
        name,
        image1 {
          asset->{
            _id,
            url
          }
        },
        price,
        description
      }
    `;

    const products = await client.fetch(query);

    if (!products || products.length === 0) {
      throw new Error("Nu s-au găsit produse.");
    }

    return products;
  } catch (error) {
    console.error("Eroare la obținerea produselor:", error);
    return [];
  }
}
