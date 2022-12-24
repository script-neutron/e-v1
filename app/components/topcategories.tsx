import Image from "next/image";
import React from "react";
import shoe from "../utils/images/shoe.png";

type Props = {};

const data = [
  {
    id: 1,
    title: "Footware",
    image: shoe,
  },
  {
    id: 2,
    title: "Footware",
    image: shoe,
  },
  {
    id: 3,
    title: "Footware",
    image: shoe,
  },
  {
    id: 4,
    title: "Footware",
    image: shoe,
  },
  {
    id: 5,
    title: "Footware",
    image: shoe,
  },
];

export default function TopCategories({}: Props) {
  return (
    <div className=" mt-12 md:max-w-7xl md:mx-auto mx-2">
      <h1 className=" tracking-[10px] uppercase text-[#E3ECEF] font-bold mb-3">
        Top Categories
      </h1>
      <div className="flex overflow-x-auto space-x-8 ">
        {data.map((product) => (
          <div
            key={product.id}
            className=" max-w-sm p-6 rounded-lg shadow-md bg-gradient-to-r from-[#536976] to-[#292E49]">
            <a href="#">
              <h5 className="mb-2 text-lg text-center tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>
            <Image alt="image" src={product.image} className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
