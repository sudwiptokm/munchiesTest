import Image from "next/image";
import React from "react";

type Props = {
  isLarge?: boolean;
  url: string;
};

export default function BlogCard({ isLarge, url }: Props) {
  return (
    <div className="w-full rounded-t-[10px]">
      <Image
        alt=""
        src={url}
        className={`w-full h-full rounded-t-[10px] object-contain ${
          !isLarge ? "h-[183px]" : "h-[421px]"
        }`}
        width={100}
        height={183}
        unoptimized
      />
      <div className="pl-4 pr-[22px] py-[15px] sf tracking-tight">
        <p className="text-base leading-5">
          Most Satisfying Cake decorating Cake ideas
        </p>
        <p className="mt-2 text-xs leading-4 text-caption">
          Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris
          sed faucibus.
        </p>
      </div>
    </div>
  );
}
