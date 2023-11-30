"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [showProfile, setshowProfile] = useState<boolean>(false);
  const [showNav, setshowNav] = useState<boolean>(false);
  return (
    <div>
    <div className="flex items-center justify-between py-4 relative">
      <div className="flex items-center md:space-x-10 lg:space-x-20">
        <div className="font-semibold text-2xl">
          <a href="/">Seine</a>
        </div>
        <nav className="max-md:hidden">
          <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
            <li>
              <a href="/" className="py-3 inline-block w-full">
                Shop
              </a>
            </li>
            <li>
              <a href="filters" className="py-3 inline-block w-full">
                filters
              </a>
            </li>
            <li>
              <a href="myProducts" className="py-3 inline-block w-full">
                My Products
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <SearchBar />
        <div className="relative cursor-pointer">
            <img src="user.jpg" className="w-[35px] h-[35px] rounded-full object-cover" alt=""/>
            <div className="absolute bg-white z-[2] rounded-lg shadow-lg">
                <Link href="/sign">SignIn</Link>
            </div>
            <Link href="/cart">
            <div className="p-2 bg-gray-100 rounded-full"><CiShoppingCart size={20}/>
                </div>
                </Link>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Navbar;
