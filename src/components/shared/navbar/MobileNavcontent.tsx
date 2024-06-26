"use client";

import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/consants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileNavcontent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-1 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose key={item.route}>
            <Link
              href={item.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                height={20}
                width={20}
                className={`${isActive ? " " : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold " : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

export default MobileNavcontent;
