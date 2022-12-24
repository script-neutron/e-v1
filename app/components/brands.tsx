import Image from "next/image";
import React from "react";
import nike from "../utils/images/nike.jpg";

type Props = {};

const data = [
  {
    id: 1,
    title: "Footware",
    image: nike,
  },
  {
    id: 2,
    title: "Footware",
    image: nike,
  },
  {
    id: 3,
    title: "Footware",
    image: nike,
  },
  {
    id: 4,
    title: "Footware",
    image: nike,
  },
  {
    id: 5,
    title: "Footware",
    image: nike,
  },
];

export default function Brands({}: Props) {
  return (
    <div className=" mt-20 md:max-w-7xl md:mx-auto mx-2 ">
      <h1 className=" tracking-[6px] md:tracking-[10px] uppercase text-[#E3ECEF] font-bold mb-3">
        Latest Brands
      </h1>
      <div className="flex overflow-x-auto space-x-8 ">
        {data.map((brand) => (
          <div
            key={brand.id}
            className=" rounded-lg shadow-md bg-gradient-to-r from-[#536976] to-[#292E49] ">
            <a href="#">
              <Image
                className="p-2 rounded-t-lg object-cover"
                src={brand.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5 w-[8rem] md:w-full text-center mt-3">
              <h5 className="w-full text-md tracking-tight text-gray-900 dark:text-white">
                NIKE
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
