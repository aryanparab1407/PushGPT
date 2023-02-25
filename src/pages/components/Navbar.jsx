import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "public/gowthopslogo.png"

function Navbar() {
  return (
    <div className="flex text-xl justify-evenly items-center h-24 p-3">
      <Link href={""}>
        <p className="p-2 m-1 border-2 border-r-0 border-l-0 border-t-0 border-[#1ACE66]">PushGPT</p>
      </Link>
      <Link href={""}>
        <p className="p-2 m-1">Springwood</p>
      </Link>{" "}
      <Link href={""}>
        <Image src={Logo} className="w-64"></Image>
      </Link>{" "}
      <Link href={""}>
        <p className="p-2 m-1">About us</p>
      </Link>{" "}
      <Link href={""}>
        <p className="p-2 m-1">Contact us</p>
      </Link>
    </div>
  );
}

export default Navbar;
