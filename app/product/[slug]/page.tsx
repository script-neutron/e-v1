"use client";
import React, { useState } from "react";
import dress from "../../utils/images/dress.png";
import nike from "../../utils/images/nike.jpg";
import Image, { StaticImageData } from "next/image";
import { log } from "console";

type Props = {
  params: { slug: string };
};

interface productpic {
  src: String | StaticImageData;
  srcset: String | StaticImageData;
  className?: string;
}

const stars = [1, 2, 3, 4, 5];
const colors = [
  {
    color: "blue",
    image: dress,
  },
  {
    color: "red",
    image: dress,
  },
  {
    color: "pink",
    image: nike,
  },
  {
    color: "green",
    image: nike,
  },
];

const details = {
  description: [
    {
      title: "Enhanced power",
      text: "Use these button styles when building social media login forms using Facebook, Twitter, GitHub, Google, and Apple. These buttons use the new",
    },
    {
      title: "Enhanced power",
      text: "Use these button styles when building social media login forms using Facebook, Twitter, GitHub, Google, and Apple. These buttons use the new",
    },
    {
      title: "Enhanced power",
      text: "Use these button styles when building social /n media login forms using Facebook, Twitter, GitHub, Google, and Apple. These buttons use the new",
    },
    {
      title: "Enhanced power",
      text: "Use these button styles when building social media login forms using Facebook, Twitter, GitHub, Google, and Apple. These buttons use the new",
    },
    {
      title: "Enhanced power",
      text: "Use these button styles when building social media login forms using Facebook, Twitter, GitHub, Google, and Apple. These buttons use the new",
    },
  ],
  reviews: [
    {
      user: "user01",
      text: "These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.",
    },
    {
      user: "user01",
      text: "These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.",
    },
    {
      user: "user01",
      text: "These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.",
    },
    {
      user: "user01",
      text: "These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.",
    },
    {
      user: "user01",
      text: "These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.",
    },
  ],
  specification: [
    {
      title: "brand",
      text: "yakosa",
    },
    {
      title: "package",
      text: "yes",
    },
    {
      title: "model",
      text: "a38",
    },
  ],
};
export default function Product({ params }: Props) {
  const [modal, setOpenModal] = useState(false);
  const [info, setInfo] = useState(1);
  const [quantity, setQuantity] = useState(0);

  let show;

  switch (info) {
    case 1:
      show = (
        <div className="my-6 sm:ml-3">
          {details.description.map((item, index) => (
            <div key={index}>
              <h1 className="text-lg font-bold mt-6">{item.title}</h1>
              <h1 className="mt-1">{item.text}</h1>
            </div>
          ))}
        </div>
      );
      break;

    case 2:
      show = (
        <div className="my-6 sm:ml-3">
          {details.reviews.map((item, index) => (
            <div key={index}>
              <h1 className="text-lg font-bold mt-6">{item.user}</h1>
              <h1 className="mt-1">{item.text}</h1>
            </div>
          ))}
        </div>
      );
      break;

    case 3:
      show = (
        <div className="my-6 sm:ml-3 flex-wrap flex sm:flex-nowrap justify-around">
          {details.specification.map((item, index) => (
            <div key={index}>
              <h1 className="text-lg font-bold mt-6">{item.title}</h1>
              <h1 className="mt-1">{item.text}</h1>
            </div>
          ))}
        </div>
      );
      break;

    default:
      break;
  }

  return (
    <div className="max-w-7xl mx-auto md:mt-20 mt-8 ">
      <div className="flex-wrap flex sm:flex-nowrap bg-[#fff] mx-3">
        <div className="w-full">
          <Image src={dress} alt="image" id="myproductimage" />
        </div>

        <div className="ml-[32px] p-3 flex-grow-1 w-full">
          <h1 className="mb-1 text-lg">Wireless Duster 500 rmp blowing gun</h1>
          <div className="flex flex-row">
            {stars.map((start, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className="w-5 h-5 text-yellow-300 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}

            <p className="ml-3">200 Reviews</p>
            <p className="ml-3">700 orders</p>
          </div>
          <div className="text-white text-xl bg-gradient-to-r from-[#f12711] to-[#f5af19] p-3 mt-3 rounded-md">
            <h1>USD $500.00</h1>
          </div>
          <div className="flex flex-row overflow-scroll mt-3">
            {colors.map((color) => (
              <div
                key={color.color}
                className="p-2 cursor-pointer"
                onClick={() => {
                  (
                    document.getElementById(
                      "myproductimage"
                    ) as unknown as productpic
                  ).src = color.image.src;
                  (
                    document.getElementById(
                      "myproductimage"
                    ) as unknown as productpic
                  ).srcset = color.image.src;
                  console.log(color.image.src);
                }}>
                <h1>Color: {color.color}</h1>
                <Image src={color.image} alt="img" height={100} width={100} />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h1 className="text-lg font-bold">Quantity : {quantity}</h1>
            <div className="flex items-center">
              <button
                onClick={() => {
                  if (quantity > 0) setQuantity((prev) => prev - 1);
                }}
                className=" rounded-full bg-gray-300 text-black w-10 h-10 mt-3">
                <h1 className="text-xl">-</h1>
              </button>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className=" rounded-full bg-gray-300 text-black w-10 h-10 mt-3 ml-4">
                <h1 className="text-xl">+</h1>
              </button>
            </div>
          </div>
          <div className="flex flex-center mt-8">
            <button
              type="button"
              className="w-full sm:text-lg text-[#f12711] hover:text-white border border-[#f12711] hover:bg-[#f12711] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center mx-4 mb-3">
              Buy Now
            </button>
            <button
              onClick={() => setOpenModal(true)}
              type="button"
              className="w-full sm:text-lg text-[#f5af19] hover:text-white border border-[#f5af19] hover:bg-[#f5af19] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center mx-4 mb-3">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <h1 className="p-3 bg-white uppercase text-xl text-center mt-3 rounded-md mx-2">
        {" "}
        Details
      </h1>
      <div className=" mt-4 p-3 bg-white rounded-md mx-2">
        <div className="flex items-center justify-around mx-2">
          <button
            onClick={(prev) => setInfo(1)}
            className="p-2 cursor-pointer border-b-2 hover:border-black hover:font-bold ">
            DESCRIPTION
          </button>
          <button
            onClick={(prev) => setInfo(2)}
            className="p-2 cursor-pointer border-b-2 hover:border-black hover:font-bold">
            REVIEWS
          </button>
          <button
            onClick={(prev) => setInfo(3)}
            className="p-2 cursor-pointer border-b-2 hover:border-black hover:font-bold">
            SPECIFICATIONS
          </button>
        </div>
        {show}
      </div>
      {modal ? (
        <div
          id="staticModal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className=" backdrop-opacity-80 bg-black/30 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen">
          <div className="relative w-full h-full max-w-2xl md:h-auto mx-auto sm:mt-[10%] mt-[30%]">
            <div className="relative bg-[#0F172A] rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-2 rounded-t dark:border-gray-600">
                <button
                  onClick={() => setOpenModal(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="staticModal">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>

              <div className="p-2 text-center">
                <p className="font-bold sm:text-lg leading-relaxed text-white">
                  A new item has been added to your Shopping Cart.
                </p>
              </div>

              <div className="flex items-center p-4 space-x-2 border-gray-200 rounded-b justify-around">
                <button
                  data-modal-toggle="staticModal"
                  type="button"
                  className="w-full sm:text-lg text-[#6A9113] hover:text-white border border-[#6A9113] hover:bg-[#439113ae] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg sm:px-5 py-2.5 text-center mx-4 mb-3">
                  View Shopping Cart
                </button>
                <button
                  data-modal-toggle="staticModal"
                  type="button"
                  className="w-full sm:text-lg text-[#f5af19] hover:text-white border border-[#f5af19] hover:bg-[#f5af19] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg sm:px-5 py-2.5 text-center mx-4 mb-3">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
