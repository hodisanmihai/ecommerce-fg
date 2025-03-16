import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import curier from "./curier";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, curier],
};
