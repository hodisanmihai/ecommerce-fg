import { createClient } from "next-sanity";

const client = createClient({
  projectId: "4f5liuxr",
  dataset: "production",
  apiVersion: "2024-03-14",
  useCdn: true,
});

export async function getFAQ() {
  const query = `*[_type == "faq"]{
    question,
    answer
  }`;

  const faqData = await client.fetch(query);

  return faqData;
}
