import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { handleClickScroll } from "../../../utils/functions";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="h-20 flex items-center justify-between">
      <div onClick={() => Router.push("/")} className="cursor-pointer">
        <Image
          alt="logo"
          src={require("../../../public/images/logo.png")}
          className="w-[128px] h-[65px]"
          priority
        />
      </div>

      <div className="flex space-x-10 items-center text-lg font-normal sf">
        <p className="cursor-pointer" onClick={() => Router.push("/")}>
          Home
        </p>
        <p
          className="cursor-pointer"
          onClick={() => handleClickScroll("about")}
        >
          About
        </p>
        <p className="cursor-pointer" onClick={() => handleClickScroll("menu")}>
          Menu
        </p>
        <p className="cursor-pointer" onClick={() => handleClickScroll("blog")}>
          Blog
        </p>
        <p
          className="cursor-pointer"
          onClick={() => handleClickScroll("contact")}
        >
          Contact
        </p>
      </div>

      <div className="flex items-center space-x-10">
        <MagnifyingGlassIcon className="h-5 w-5" />
        <div
          className="relative cursor-pointer"
          onClick={() => Router.push("/checkout")}
        >
          <ShoppingBagIcon className="h-5 w-5" />
          <div className="absolute rounded-full w-2 h-2 bg-secondary top-0 right-0 z-10"></div>
        </div>
      </div>
    </header>
  );
}
