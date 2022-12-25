import { PlusIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

type Props = {
  url: string;
  name: string;
  price: number;
};

export default function ProductCard({ url, name, price }: Props) {
  return (
    <div className="w-[277px] rounded-[10px] bg-white sf">
      <div className="h-[250px] flex items-center justify-center bg-gray-500 rounded-t-[10px]">
        <Image
          alt=""
          src={url}
          width={277}
          height={250}
          className="rounded-t-[10px] h-full w-full object-cover"
        />
      </div>
      <div className="py-[15.5px] px-[12.5px]">
        <div className="flex items-center justify-between">
          <p>{name}</p>
          <p>৳{price}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="py-1 px-[6px] rounded-[5px] bg-[#F7F8FA] flex items-center space-x-[6px]">
              <StarIcon className="w-4 h-4 text-black" />
              <p>4.7</p>
            </div>
            <div className="py-1 px-[6px] rounded-[5px] bg-[#F7F8FA] flex items-center space-x-[6px]">
              <StarIcon className="w-4 h-4 text-black" />
              <p>50-79 min</p>
            </div>
          </div>

          <div className="bg-secondary text-white w-[22px] h-5 rounded-[5px] cursor-pointer flex items-center justify-center">
            <PlusIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
