"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../utils/images/logo.svg";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { BsInboxes } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const departments = [
  {
    id: 1,
    name: "Women's Fashion",
  },
  {
    id: 2,
    name: "Men's Fashion",
  },
  {
    id: 3,
    name: "Phones",
  },
  {
    id: 4,
    name: "Computers & Tech",
  },
];

const subdepartment = [
  {
    id: 1,
    name: "Dress",
  },
  {
    id: 2,
    name: "Skirts",
  },
  {
    id: 3,
    name: "Belts",
  },
];

export default function Navbar({}: Props) {
  const [open, setOpen] = useState(false);
  const [openDepartment, setOpenDepartment] = useState(false);

  return (
    <nav className="sticky z-20">
      {/** big screen */}
      <div className="hidden md:flex md:items-center justify-between lg:max-w-7xl mx-auto mt-4">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>

        <div>
          <label
            htmlFor="default-search"
            className="text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative w-[350px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div
            className="flex items-center mr-6 cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}>
            <CgProfile size={"30px"} color="#F5F8F9" />
            <h1 className="text-[#F5F8F9] ml-3">Account</h1>
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between ">
        <Image src={logo} alt="logo" />
        <BiMenuAltLeft
          size={35}
          color="#E3ECEF"
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      {open ? (
        <aside
          className="right-0 absolute h-screen sidebar"
          aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 rounded ">
            <ul className="space-y-2">
              <li onClick={() => setOpen(!open)}>
                <Link
                  href="/"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 cursor-pointer">
                  <AiOutlineHome size={25} />
                  <span className="ml-3">Home</span>
                </Link>
              </li>

              <li>
                <div
                  onClick={() => {
                    setOpenDepartment(!openDepartment);
                  }}
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 cursor-pointer">
                  <BiCategory size={25} />
                  <span className=" ml-3 ">Departments</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </li>
              {openDepartment ? (
                <ul className="space-y-2">
                  <div className="ml-4">
                    {departments.map((item) => (
                      <li key={item.id}>
                        <div
                          onClick={() => {
                            setOpenDepartment(!openDepartment);
                          }}
                          className="flex items-center p-2 text-sm rounded-lg text-white hover:bg-gray-700 cursor-pointer">
                          <FaRegAddressBook
                            size={20}
                            className="text-gray-400"
                          />
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            {item.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </div>
                </ul>
              ) : null}

              <li onClick={() => setOpen(!open)}>
                <Link
                  href="/order"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 cursor-pointer">
                  <BsInboxes size={25} className="text-white" />
                  <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
                </Link>
              </li>
              <li onClick={() => setOpen(!open)}>
                <Link
                  href="/cart"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 cursor-pointer">
                  <FaOpencart size={25} className="text-white" />
                  <span className="flex-1 ml-3 whitespace-nowrap">Cart</span>
                </Link>
              </li>
              <li onClick={() => setOpen(!open)}>
                <Link
                  href="/personal_info"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 cursor-pointer">
                  <FiSettings size={25} color="#E3ECEF" />
                  <span className="ml-3 ">Edit Account </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      ) : null}
    </nav>
  );
}
