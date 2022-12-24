import Image from "next/image";
import React from "react";
import banner from "../utils/images/banner.svg";
type Props = {};

export default function Banner({}: Props) {
  return (
    <div className="mt-3">
      <div className="relative">
        <Image src={banner} alt="banner" />
        <div className="absolute top-0 md:w-[25rem]">
          <h1 className="text-[#0F172A] mt-10 font-bold ml-3 sm:text-3xl sm:font-bold sm:mt-[30%]">
            We ship over 30 million products all over the world
          </h1>
          <button className="bg-[#0F172A] rounded-lg font-medium ml-6 sm:ml-11 mt-2 w-1/3">
            <h1 className=" p-4 text-[#E3ECEF]">SHOP NOW</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
