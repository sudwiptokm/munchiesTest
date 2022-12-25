import { ProductType } from "./types";

export const getOccurrence = (array: ProductType[], value: ProductType) => {
  return array.filter((v) => v.name === value.name).length;
};

export const handleClickScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
