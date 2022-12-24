"use client";
import React, { useState } from "react";
import nike from "../utils/images/nike.jpg";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiHandshake } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";

type Props = {};

const data = [
  {
    id: 1,
    image: nike,
    name: "Wireless Duster 500 rmp blowing gun",
    price: 30.0,
    qty: 1,
  },
  {
    id: 2,
    image: nike,
    name: "Wireless Duster 500 rmp blowing gun",
    price: 30.0,
    qty: 1,
  },
  {
    id: 3,
    image: nike,
    name: "Wireless Duster 500 rmp blowing gun",
    price: 30.0,
    qty: 1,
  },
  {
    id: 4,
    image: nike,
    name: "Wireless Duster 500 rmp blowing gun",
    price: 30.0,
    qty: 1,
  },
  {
    id: 5,
    image: nike,
    name: "Wireless Duster 500 rmp blowing gun",
    price: 30.0,
    qty: 1,
  },
  {
    id: 6,
    image: nike,
    name: "Wireless Duster 500 rmp blowing gun",
    price: 30.0,
    qty: 1,
  },
  {
    id: 7,
    image: nike,
    name: "Wireless Duster 500 rmp blowing gun",
    price: 30.0,
    qty: 1,
  },
  {
    id: 8,
    image: nike,
    name: "Wireless Duster 500 rmp blowing gun",
    price: 30.0,
    qty: 1,
  },
];

export default function Cart({}: Props) {
  const [quantity, setQuantity] = useState(0);
  let number = 3;
  return (
    <div className="max-w-7xl mx-auto md:mt-20 mt-8 ">
      <div className="flex flex-wrap sm:flex-nowrap justify-around">
        <div className="flex flex-col items-center w-full mx-3">
          <div className="bg-[#fff] p-4 mb-3 rounded-sm w-full">
            <h1 className="text-lg font-bold text-center">Items</h1>
          </div>
          <div className="bg-[#fff] p-4 rounded-sm w-full max-h-screen overflow-scroll scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-100">
            {data.map((product) => (
              <div key={product.id}>
                <div
                  className="flex sm:flex-nowrap flex-wrap items-center my-3"
                  style={{ alignItems: "self-start" }}>
                  <div className=" sm:w-[200px]">
                    <Image alt="image" src={nike} className=" object-cover" />
                  </div>

                  <div className="sm:flex-1 relative ml-2 mt-3 sm:mt-0">
                    <h1 className="text-lg  mr-[50px] overflow-hidden">
                      Wireless Duster 500 rmp blowing gun
                    </h1>
                    <RiDeleteBin6Line
                      size={30}
                      className="absolute right-0 top-0"
                    />
                    <div className="flex sm:flex-nowrap flex-wrap justify-between mt-2 flex-col">
                      <h1 className="text-lg">USD $100.00</h1>
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            if (quantity > 0) setQuantity((prev) => prev - 1);
                          }}
                          className=" rounded-full bg-gray-300 text-black w-10 h-10 mt-3">
                          <h1 className="text-xl">-</h1>
                        </button>
                        <h1 className="text-xl mt-3 ml-4">{quantity}</h1>
                        <button
                          onClick={() => setQuantity((prev) => prev + 1)}
                          className=" rounded-full bg-gray-300 text-black w-10 h-10 mt-3 ml-4">
                          <h1 className="text-xl">+</h1>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-3" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex sm:flex-nowrap flex-wrap flex-col sm:mx-8 sm:w-1/2 w-full mt-3 sm:mt-0 mx-3">
          <div className="bg-[#fff] p-6 ">
            <h1 className="text-xl font-bold mb-3">Summary</h1>
            <div className="flex items-center justify-around my-1">
              <h1 className=" text-base p-2">Subtotal</h1>
              <h1 className="p-2">USD $400.88</h1>
            </div>
            <div className="flex items-center justify-around my-1">
              <h1 className=" text-base p-2">Shipping fee</h1>
              <h1 className="p-2">USD $400.88</h1>
            </div>
            <h1 className="text-lg font-medium text-center my-1">
              Shopping Cart {`(${number})`}
            </h1>
            <button
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold text-xl rounded-lg px-5 py-2.5 my-2 w-full">
              Checkout
            </button>
          </div>
          <div className="bg-[#fff] p-6 mt-4 ">
            <h1 className="text-lg font-bold mb-2">Payment Methods</h1>
            <div className="flex items-center">
              <FaCcVisa size={30} className="mx-3" />
              <FaCcMastercard size={30} className="mx-3" />
              <SiHandshake size={30} className="mx-3" />
              <FaCcPaypal size={30} className="mx-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
