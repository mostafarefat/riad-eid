"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./const";
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-around items-center w-full h-20 px-12 pt-11 pb-11 fixed top-0 left-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-gray-50 shadow-sm" : "bg-white"
      }`}
    >
      <h2>
        <Image src="/Navbar/logo-line.png" alt="شعار" width={132} height={32} />
      </h2>

      <ul className="links flex bg-sky-50 rounded-full gap-4 px-6 h-14 items-center mx-12">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                pathname === href
                  ? "text-blue-600 font-medium text-base"
                  : "text-gray-600 font-normal text-sm"
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <Link href="/sign-up" className=" py-3 px-6 bg-blue-500 rounded-xl text-white font-semibold ">
          اشترك الان
        </Link>
        <Link href="/sign-in" className="py-3 px-6 rounded-xl text-blue-500 border font-semibold">
          تسجيل الدخول
        </Link>
      </div>
    </nav>
  );
}
