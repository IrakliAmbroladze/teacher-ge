"use client";
import React, { JSX, useState } from "react";
import { FiArrowDown, FiArrowUp, FiMenu } from "react-icons/fi";
import { lusitana } from "@/components/ui/fonts";
import Link from "next/link";
import Image from "next/image";
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  data_cy?: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  data_cy,
  children,
  onClick,
}) => (
  <Link
    href={href}
    data-cy={data_cy}
    className={`${lusitana.className} text-black dark:text-[#f0eff4] no-underline transition duration-300 p-2 hover:text-[#ffa552] dark:hover:text-[#ffa552] hover:text-shadow `}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function HeaderClientSide(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/protected/profile", label: "profile" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <>
      <button
        className={`${lusitana.className} text-2xl flex items-center`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        data-cy="menu"
      >
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={580}
          height={386}
          className="w-[60px] h-auto"
        />
        <FiMenu />
        {menuOpen ? <FiArrowDown /> : <FiArrowUp />}
      </button>
      <Link
        href="/protected/create-task"
        className="border border-[#8338EC] rounded-sm bg-[#8338EC] cursor-pointer py-1 sm:py-2.5 sm:px-5 text-white  "
      >
        <span>new</span>
      </Link>
      {menuOpen && (
        <nav
          className={`absolute h-svh top-12 left-0 w-full shadow-md dark:bg-stone-800/20 bg-stone-50/20 backdrop-blur-md text-5xl`}
          aria-label="Main Navigation"
        >
          <ul className="flex flex-col gap-3 p-4 max-w-[1110px] mx-auto">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <NavLink href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
