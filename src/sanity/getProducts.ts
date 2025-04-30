// /sanity/getProducts.ts
import { createClient } from "next-sanity";
import { groq } from "next-sanity";

const client = createClient({
  projectId: "4f5liuxr",
  dataset: "production",
  apiVersion: "2024-03-14",
});

// Function to fetch all products
export async function getProducts() {
  try {
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
        image2 {
          asset->{
            _id,
            url
          }
        },
        image3 {
          asset->{
            _id,
            url
          }
        },
        image4 {
          asset->{
            _id,
            url
          }
        },
        image5 {
          asset->{
            _id,
            url
          }
        },
        price,
        description,
        detail1,
        details2,
        details3,
        details4
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

export async function getProductById(id: string) {
  try {
    const query = groq`
      *[_type == "product" && _id == $id][0]{
        _id,
        name,
        image1 {
          asset->{
            _id,
            url
          }
        },
        image2 {
          asset->{
            _id,
            url
          }
        },
        image3 {
          asset->{
            _id,
            url
          }
        },
        image4 {
          asset->{
            _id,
            url
          }
        },
        image5 {
          asset->{
            _id,
            url
          }
        },
        price,
        description,
        detail1,
        details2,
        details3,
        details4
      }
    `;

    const product = await client.fetch(query, { id });

    if (!product) {
      throw new Error("Produsul nu a fost găsit.");
    }

    return product;
  } catch (error) {
    console.error("Eroare la obținerea produsului:", error);
    return null;
  }
}
