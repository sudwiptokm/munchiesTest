import { ProductType } from "./types";

export const getOccurrence = (array: ProductType[], value: ProductType) => {
  return array.filter((v) => v.name === value.name).length;
};
