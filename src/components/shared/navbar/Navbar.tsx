import Image from "next/image";
import Link from "next/link";
import React from "react";
import piclogo from "../../../../public/assets/images/site-logo.svg";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none  sm:px-12">
      <Link href="/" className="flex items-center gap-1 ">
        <Image
          //   src="../assets/images/site-logo.svg"
          src={piclogo}
          alt="logo"
          height={23}
          width={23}
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Stack
          <span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      {/* GLOBAL SEARCH */}
      <GlobalSearch />
      <div className=" flex-between gap-5">
        {/* theme component */}
        <Theme />

        {/* show the user name if he is signed in otherwise hidden */}

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: "h-10 w-10" },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>

        {/* here  mobilenavigation bar */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
