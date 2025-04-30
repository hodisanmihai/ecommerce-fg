import { defineType } from "sanity";
import { Rule } from "sanity";

export default {
  name: "product", // Numele tipului de document
  title: "Product", // Titlul care apare în Sanity Studio
  type: "document", // Tipul documentului
  fields: [
    {
      name: "name",
      title: "Nume Produs",
      type: "string",
    },
    {
      name: "image1",
      title: "Poza Principala",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "id",
      title: "Product ID",
      type: "number",
      validation: (Rule: Rule) =>
        Rule.required().custom(async (id: number, context: any) => {
          if (!id) return "ID-ul este obligatoriu!";

          const client = context.getClient({ apiVersion: "2024-03-14" });

          // Verificăm dacă există deja un produs cu același ID
          const existingProduct = await client.fetch(
            `*[_type == "product" && id == $id][0]`,
            { id }
          );

          return existingProduct ? "ID-ul este deja folosit!" : true;
        }),
    },
    {
      name: "price",
      title: "Pret",
      type: "number",
    },
    {
      name: "description",
      title: "Descriere produs",
      type: "string",
    },
    {
      name: "detail1",
      title: "Detalii produs-1",
      type: "string",
    },
    {
      name: "details2",
      title: "Detalii produs-2",
      type: "string",
    },
    {
      name: "details3",
      title: "Detalii produs-3",
      type: "string",
    },
    {
      name: "details4",
      title: "Detalii produs-4",
      type: "string",
    },
    {
      name: "image2",
      title: "A 2-a poza",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image3",
      title: "A 3-a poza",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image4",
      title: "A 4-a poza",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image5",
      title: "A 5-a poza",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
