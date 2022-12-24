import React from "react";
import Brands from "./components/brands";
import Discount from "./components/discounts";
import Featured from "./components/featured";
import TopCategories from "./components/topcategories";
import chargeback from "./utils/images/chargeback.svg";
import Image from "next/image";
import Latest from "./components/latest";
import Banner from "./navbar/banner";

type Props = {};

export default function Page({}: Props) {
  return (
    <main>
      <Banner />
      <TopCategories />
      <Discount />
      <Brands />
      <Featured />
      <div className="mt-10 md:mx-12">
        <div className="relative">
          <Image src={chargeback} alt="banner" className="object-cover h-48" />
          <div className="absolute bottom-5 ">
            <h1 className="text-[#d5d8e0] mt-10 font-bold ml-3 sm:text-3xl sm:font-bold sm:mt-[30%]">
              Get 7% charge back on Xshop
            </h1>
            <button className="bg-[#0F172A] rounded-lg font-medium ml-3 md:ml-6 sm:ml-11 mt-2 md:w-1/3">
              <h1 className=" p-4 text-[#E3ECEF]">Learn More</h1>
            </button>
          </div>
        </div>
      </div>
      <Latest />
    </main>
  );
}
