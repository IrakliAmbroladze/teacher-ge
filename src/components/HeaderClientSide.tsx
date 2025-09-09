import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationConfig, logoConfig } from "@/config/navigation";

export default function HeaderClientSide(): React.JSX.Element {
  return (
    <>
      <Link href={logoConfig.href} className="relative w-7 h-7 active:scale-95">
        <Image
          src={logoConfig.src}
          alt={logoConfig.alt}
          fill
          className="rounded-sm"
        />
      </Link>
      {navigationConfig.map((item) => (
        <Link
          key={item.pageDestination}
          href={item.pageDestination}
          className={`rounded-sm  active:scale-95 cursor-pointer py-1 sm:py-2.5 sm:px-5 text-white ${
            item.className || ""
          } `}
          style={{ backgroundColor: item.bgColor || "#282f40" }}
        >
          <span className="px-1.5">{item.title}</span>
        </Link>
      ))}
    </>
  );
}
