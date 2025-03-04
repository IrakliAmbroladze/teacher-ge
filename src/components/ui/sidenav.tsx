import React, { JSX } from "react";
import Link from "next/link";

// import Image from "next/image";
import NavLinks from "./nav-links";
import { GiTeacher } from "react-icons/gi";

export default function SideNav(): JSX.Element {
  return (
    <div>
      <div className=" cursor-pointer mb-2 flex h-40 justify-center rounded-md bg-[#222e46] p-4 items-center">
        <Link href="/dashboard" className="text-white text-9xl">
          <GiTeacher />
        </Link>
      </div>

      <NavLinks />
    </div>
  );
}
