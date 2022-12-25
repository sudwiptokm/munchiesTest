import { PlusIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../../slices/basketSlice";
import { getOccurrence } from "../../../utils/functions";
import { ProductType } from "../../../utils/types";

type Props = {
  product: ProductType;
  addProduct: (product: ProductType) => void;
};

export default function ProductCard({ product, addProduct }: Props) {
  const items = useSelector(selectItems);

  return (
    <div className="w-[277px] bg-white sf border-none rounded-t-[10px]">
      <div className="h-[250px] flex items-center justify-center rounded-t-[10px] relative border-none">
        <Image
          alt=""
          src={product.image}
          width={277}
          height={250}
          className="rounded-t-[12px] h-full w-full object-cover border-none "
          id="productImage"
        />
        <div className="w-8 h-[30px] bg-secondary rounded-tl-[10px] absolute top-0 left-0 flex items-center justify-center">
          <p className="sf text-xs leading-5 tracking-tight">50%</p>
        </div>
      </div>
      <div className="py-[15.5px] px-[12.5px]">
        <div className="flex items-center justify-between">
          <p>{product.name}</p>
          <p>৳{product.price}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="py-1 px-[6px] rounded-[5px] bg-[#F7F8FA] flex items-center space-x-[6px]">
              <StarIcon className="w-4 h-4 text-black" />
              <p>4.7</p>
            </div>
            <div className="py-1 px-[6px] rounded-[5px] bg-[#F7F8FA] flex items-center space-x-[6px]">
              <p>50-79 min</p>
            </div>
          </div>

          <button
            className={`text-white w-[22px] h-5 rounded-[5px] cursor-pointer flex items-center justify-center outline-none ${
              getOccurrence(items, product) >= product.quantity_available
                ? "bg-gray-600"
                : "bg-secondary"
            }`}
            disabled={
              getOccurrence(items, product) >= product.quantity_available
            }
            onClick={() => addProduct(product)}
          >
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
