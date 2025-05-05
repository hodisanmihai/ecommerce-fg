import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import curier from "./curier";
import faq from "./faq";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, curier, faq],
};
