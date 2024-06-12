"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/consants";
import { Button } from "@/components/ui/button";
import accountpic from "../../../public/account.svg";
// import accountpic from "../../../public/assets/icons/account.svg";
import signuppic from "../../../public/assets/icons/sign-up.svg";
import { useAuth } from "@clerk/nextjs";

const LeftSideBar = () => {
  const { userId } = useAuth();
  // console.log("%%%%%%%%%%%5", userId);

  const pathname = usePathname();
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      {/*  */}
      <div className="flex flex-1 flex-col gap-3">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          // todo
          if (item.route === "/profile") {
            if (userId) {
              item.route = `${item.route}/${userId}`;
            } else {
              return null;
            }
          }

          return (
            <Link
              key={item.route}
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
              <p
                className={`${isActive ? "base-bold " : "base-medium"} max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      {/*  */}
      <div className="mt-14 flex flex-col gap-3">
        <Link href={"/sign-in"}>
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src={accountpic}
              alt="login"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Button>
        </Link>

        {/* if user is logged in than signup button will be  notbe shown */}

        <Link href={"/sign-up"}>
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src={signuppic}
              alt="signup"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className=" max-lg:hidden">Sign up</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSideBar;
