import React from "react";
import shoe from "../utils/images/shoe.png";
import Image from "next/image";

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

export default function Order({}: Props) {
  return (
    <div className=" max-w-7xl mx-auto md:mt-20 mt-8">
      <div className="flex flex-col justify-evenly ml-3 md:mx-16 mx-2">
        <div className="flex flex-col justify-between md:p-[20px] bg-[#fff] rounded-sm">
          <div className="flex items-center justify-between pt-[16px] mx-2 ">
            <div className=" hover:border-b-rose-500 hover:border-b-2 cursor-pointer hover:font-bold">
              <h1>All</h1>
            </div>
            <div className=" hover:border-b-rose-500 hover:border-b-2 cursor-pointer hover:font-bold">
              <h1>Unpaid</h1>
            </div>
            <div className=" hover:border-b-rose-500 hover:border-b-2 cursor-pointer hover:font-bold">
              <h1>Processing</h1>
            </div>
            <div className=" hover:border-b-rose-500 hover:border-b-2 cursor-pointer hover:font-bold">
              <h1>Shipped</h1>
            </div>
            <div className=" hover:border-b-rose-500 hover:border-b-2 cursor-pointer hover:font-bold">
              <h1>Completed</h1>
            </div>
          </div>

          <div className="flex mt-[25px] mx-2 mb-2 md:mb-auto">
            <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 ">
              Track Order
            </div>

            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg"
                placeholder="Search ..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:p-[20px] bg-[#fff] mt-4 h-[450px] rounded-sm">
          hh
        </div>

        <div
          role="status"
          className="space-y-2.5 animate-pulse md:p-[20px] bg-[#fff] mt-4 h-[450px] rounded-sm">
          <div className="flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[400px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[440px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[360px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center space-x-2 w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[400px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[440px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[360px]">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>

          <span className="sr-only">Loading...</span>
        </div>

        <div className="md:p-[20px] h-[350px] rounded-sm mt-8 flex overflow-x-auto space-x-8">
          {data.map((product) => (
            <div
              key={product.id}
              className="w-full rounded-lg shadow-md hover:bg-gray-400">
              <a href="#">
                <Image
                  className="p-2 rounded-t-lg object-cover"
                  src={product.image}
                  alt="product image"
                />
              </a>
              <div className="px-2 pb-5">
                <a href="#">
                  <h5 className="tracking-tight text-[#fff]">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#fff]">$599</span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3  text-center">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
