import React from "react";

type Props = {
  placeholder: string;
};

export default function InputField({ placeholder }: Props) {
  return (
    <input
      type="text"
      className="w-full h-[58px] py-[19px] px-[22px] rounded-[10px] shadow-sm sf text-caption text-base font-normal leading-5 tracking-tight outline-none"
      placeholder={placeholder}
    />
  );
}
