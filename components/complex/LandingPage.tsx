import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Categories } from "../../utils/enums";
import Dropdown from "../common/Dropdown/Dropdown";
import { DropdownItems } from "../../utils/data";
import ProductCard from "../common/ProductCard/ProductCard";
import { PlusIcon } from "@heroicons/react/20/solid";
import BlogCard from "../common/BlogCard/BlogCard";
import InputField from "../common/InputField/InputField";
import axios from "axios";
import { ProductType } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectItems,
  selectTotal,
} from "../../slices/basketSlice";
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

type Props = {};

export default function LandingPage({}: Props) {
  const [CurrentCategory, SetCurrentCategory] = useState<Categories>(
    Categories.ALL
  );
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    axios.defaults.baseURL = "/";
    axios
      .get(`https://${process.env.URL}/products`)
      .then((res) => setProducts(res.data));
  }, []);

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const addItemToBasket = (product: ProductType) => {
    dispatch(addToBasket(product));
  };

  // console.log(items, total);

  return (
    <div className="max-w-[1440px] mx-auto sf">
      <div className="h-[800px] bg-[#0C1712] text-white px-[108px]">
        {/* Header */}
        <Header />
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
      <main>
        {/* Product Section */}
        <section className="pt-[105px] px-[130px] bg-[#F7F8FA]">
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
          <div className="mt-10 flex gap-x-6 flex-wrap gap-y-10">
            {products.length !== 0 &&
              products.map((product, idx: number) => (
                <div key={product?.id}>
                  <ProductCard product={product} addProduct={addItemToBasket} />
                </div>
              ))}
          </div>
          {/* Product Cards Ends */}

          {/* Load More Button */}
          <div className="mt-[99px] flex items-center justify-center pb-[50px] cursor-pointer">
            <div className="border border-secondary rounded-[10px] w-[172px] h-[46px] flex justify-center items-center px-[19px] sf text-caption space-x-2 tracking-tight">
              <PlusIcon className="w-4 h-4 " />
              <p>Load More ...</p>
            </div>
          </div>
          {/* Load More Button Ends */}
          {/* Product Section */}
        </section>
        {/* Product Section Ends*/}

        {/* Blog Section */}
        <section className="py-[100px] px-[129px] bg-white">
          <p className="text-2xl leading-6 tracking-tight font-medium mb-7">
            Our Blog
          </p>
          <div className="grid grid-cols-4 gap-10">
            <div className="flex flex-col justify-between">
              <BlogCard />
              <BlogCard />
            </div>
            <div className="col-span-2">
              <BlogCard isLarge />
            </div>
            <div className="flex flex-col justify-between">
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </section>
        {/* Blog Section Ends */}

        {/* Contact Section */}
        <section className="py-[100px] px-[109px] bg-[#F7F8FA] flex items-center space-x-[103px] mb-[60px] sf">
          <div className="w-full">
            <p className="text-2xl leading-6 tracking-tight font-medium">
              Do you have a question <br /> or want to become a seller?
            </p>
            <p className="mt-[5px] text-xs leading-5 text-caption">
              Fill this form and our manager will contact you next 48 hours.
            </p>
            <div className="mt-8 w-full">
              <div className="flex items-center space-x-4">
                <InputField placeholder="Your Name" />
                <InputField placeholder="Your e-mail" />
              </div>
              <textarea
                name=""
                id=""
                className="h-[215px] w-full rounded-[10px] shadow-sm bg-white sf text-caption text-base font-normal leading-5 tracking-tight mt-6 py-[19px] px-[22px] resize-none outline-none"
                placeholder="Your message"
              />
            </div>
          </div>
          <Image
            alt="Delivery"
            src={"/images/delivery.png"}
            className="w-full"
            width={503}
            height={402}
          />
        </section>
        {/* Contact Section Ends */}

        {/* Footer */}
        <Footer />
        {/* Footer Ends*/}
      </main>
      {/* Main Ends*/}
    </div>
  );
}
