import Image from "next/image";
import Router from "next/router";
import React from "react";
import { handleClickScroll } from "../../../utils/functions";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-primary h-[137px] pt-[35px] px-[130px] pb-3 text-white">
      <div className="flex items-center justify-between pb-[34px] border-b border-white mb-4">
        <p className="text-[32px] leading-5 tracking-tight sqo">WHAT2EAT</p>
        <div className="flex space-x-10 items-center text-lg font-normal sf leading-5 tracking-tight">
          <p className="cursor-pointer" onClick={() => Router.push("/")}>
            Home
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClickScroll("about")}
          >
            About
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClickScroll("menu")}
          >
            Menu
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClickScroll("blog")}
          >
            Blog
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClickScroll("contact")}
          >
            Contact
          </p>
        </div>
        <div className="flex space-x-[13.5px] items-center">
          <div className="w-[27.75px] h-[25.5px] bg-white rounded-[5px] flex items-center justify-center cursor-pointer">
            <Image alt="fb" src={"/images/fb_logo.png"} width={9} height={17} />
          </div>
          <div className="w-[27.75px] h-[25.5px] bg-white rounded-[5px] flex items-center justify-center cursor-pointer">
            <Image
              alt="insta"
              src={"/images/insta_logo.png"}
              width={17}
              height={17}
            />
          </div>
        </div>
      </div>
      <p className="text-center text-xs leading-5 tracking-tight sf">
        Copyright @2021 What2Eat
      </p>
    </footer>
  );
}
