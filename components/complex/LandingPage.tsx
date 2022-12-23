import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Categories } from "../../utils/enums";
import Dropdown from "../common/Dropdown/Dropdown";
import { DropdownItems } from "../../utils/data";
import ProductCard from "../common/ProductCard/ProductCard";
import { PlusIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function LandingPage({}: Props) {
  const [CurrentCategory, SetCurrentCategory] = useState<Categories>(
    Categories.ALL
  );
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="h-[800px] bg-[#0C1712] text-white px-[108px]">
        {/* Header */}
        <header className="h-20 flex items-center justify-between">
          <div>
            <Image
              alt="logo"
              src={require("../../public/images/logo.png")}
              className="w-[128px] h-[65px]"
            />
          </div>

          <div className="flex space-x-10 items-center text-lg font-normal sf">
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div className="flex items-center space-x-10">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <div className="relative">
              <ShoppingBagIcon className="h-5 w-5" />
              <div className="absolute rounded-full w-2 h-2 bg-secondary top-0 right-0 z-10"></div>
            </div>
          </div>
        </header>
        {/* Header Ends */}

        {/* Hero Section */}
        <section className="flex-1 h-full grid grid-cols-2 space-x-[100px] items-center">
          <div>
            <p className="text-[70px] font-medium leading[82.03px]">
              Authentic Home food in UK
            </p>
            <p className="mt-8 sf text-base font-normal max-w-[441px] leading-5 tracking-tight">
              What2Eat is a courier service in which authentic home cook food is
              delivered to a customer.
            </p>
            <div className="mt-10 w-[398px] bg-white rounded-[10px] h-[58px] flex items-center">
              <input
                type="text"
                className="mx-[22px] h-full flex-1 text-caption sf text-xs outline-none"
                placeholder="Search food you love"
              />
              <div className="w-[112px] h-full rounded-r-[10px] bg-secondary flex items-center cursor-pointer">
                <p className="text-white sf font-semibold text-center flex-1">
                  Search
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section Ends */}
      </div>

      {/* Main */}
      <main className="pt-[105px] px-[130px] bg-[#F7F8FA]">
        <p className="text-2xl leading-6 tracking-tight font-medium mb-4">
          Home Kitchen
        </p>

        {/* Categories */}
        <div className="inline-flex border border-secondary rounded-[10px] divide-x divide-secondary h-[46px] items-center">
          <div
            className={`h-full cursor-pointer rounded-l-[10px] px-10 sf text-base leading-5 font-semibold tracking-tight flex items-center ${
              CurrentCategory === Categories.ALL
                ? "bg-secondary text-black"
                : "bg-[#F7F8FA] text-caption"
            }`}
            onClick={() => SetCurrentCategory(Categories.ALL)}
          >
            <p>All</p>
          </div>
          <div
            className={`h-full cursor-pointer px-10 sf text-base leading-5 font-semibold tracking-tight flex items-center ${
              CurrentCategory === Categories.BUTTON
                ? "bg-secondary text-black"
                : "bg-[#F7F8FA] text-caption"
            }`}
            onClick={() => SetCurrentCategory(Categories.BUTTON)}
          >
            <p>Button</p>
          </div>
          <div
            className={`h-full cursor-pointer px-10 sf text-base leading-5 font-semibold tracking-tight flex items-center ${
              CurrentCategory === Categories.FREE_DELIVERY
                ? "bg-secondary text-black"
                : "bg-[#F7F8FA] text-caption"
            }`}
            onClick={() => SetCurrentCategory(Categories.FREE_DELIVERY)}
          >
            <p>Free Delivery</p>
          </div>
          <div
            className={`h-full cursor-pointer px-10 sf text-base leading-5 font-semibold tracking-tight flex items-center ${
              CurrentCategory === Categories.NEW
                ? "bg-secondary text-black"
                : "bg-[#F7F8FA] text-caption"
            }`}
            onClick={() => SetCurrentCategory(Categories.NEW)}
          >
            <p>New</p>
          </div>
          <div
            className={`h-full rounded-r-[10px] cursor-pointer px-10 sf text-base leading-5 font-semibold tracking-tight flex items-center ${
              CurrentCategory === Categories.COMING
                ? "bg-secondary text-black"
                : "bg-[#F7F8FA] text-caption"
            }`}
            onClick={() => SetCurrentCategory(Categories.COMING)}
          >
            <p>Coming</p>
          </div>
        </div>
        {/* Categories End*/}

        {/* DropDown */}
        <div className="mt-[38px]">
          <Dropdown items={DropdownItems} />
        </div>
        {/* DropDown Ends*/}

        {/* Product Cards */}
        <div className="mt-10 flex justify-between flex-wrap gap-y-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* Product Cards Ends */}

        {/* Load More Button */}
        <div className="mt-[99px] flex items-center justify-center pb-[50px]">
          <div className="border border-secondary rounded-[10px] w-[172px] h-[46px] flex justify-center items-center px-[19px] sf text-caption space-x-2 tracking-tight">
            <PlusIcon className="w-4 h-4 " />
            <p>Load More ...</p>
          </div>
        </div>
        {/* Load More Button Ends */}
      </main>
      {/* Main Ends*/}
    </div>
  );
}
