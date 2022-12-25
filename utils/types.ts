export type ProductType = {
  id: number;
  name: string;
  price: number;
  quantity_available: number;
  image: string;
  vat: number;
  addons: { id: number; name: string; is_default?: boolean; price: number }[];
};

export type PostProductsType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  vat: number;
  addon: { name: string; price: number };
};
