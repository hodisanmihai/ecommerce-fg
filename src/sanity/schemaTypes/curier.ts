const curierSchema = {
  name: "curier", // Numele tipului de document
  title: "Pret Curier", // Titlul care apare în Sanity Studio
  type: "document", // Tipul documentului
  fields: [
    {
      name: "price",
      title: "Pretul Curierului",
      type: "number",
    },
  ],
};

export default curierSchema;
