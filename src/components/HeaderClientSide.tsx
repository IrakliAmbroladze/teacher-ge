import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderClientSide(): React.JSX.Element {
  return (
    <>
      <Link href={"/"} className="relative w-7 h-7">
        <Image src="/logoTodo.jpg" alt="Logo" fill className="rounded-sm" />
      </Link>
      <Link
        href="/protected/create-task"
        className="border border-[#8338EC] rounded-sm bg-[#8338EC] cursor-pointer py-1 sm:py-2.5 sm:px-5 text-white  "
      >
        <span>new</span>
      </Link>
    </>
  );
}
