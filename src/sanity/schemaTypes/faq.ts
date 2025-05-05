import { defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Întrebare",
      type: "string",
    },
    {
      name: "answer",
      title: "Răspuns",
      type: "text",
    },
  ],
});
