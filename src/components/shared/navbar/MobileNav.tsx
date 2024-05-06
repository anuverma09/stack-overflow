import React from "react";
import hamburgerpic from "../../../../public/assets/icons/hamburger.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import piclogo from "../../../../public/assets/images/site-logo.svg";
import { Button } from "@/components/ui/button";
import MobileNavcontent from "./MobileNavcontent";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={hamburgerpic}
          alt="Menu"
          height={36}
          width={36}
          // sm:hidden mean that at sm breakpoint(640 and above) and its wider it will not shown
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1 ">
          <Image
            //   src="../assets/images/site-logo.svg"
            src={piclogo}
            alt="logo"
            height={23}
            width={23}
          />

          <p className="h2-bold text-dark100_light900 font-spaceGrotesk ">
            Stack
            <span className="text-primary-500">Overflow</span>
          </p>
        </Link>

        <div>
          {/*  */}
          <SheetClose asChild>
            {/* component for links */}
            <MobileNavcontent />
          </SheetClose>

          {/* signout component from clerk */}
          {/* <SignOut>(whole div should be inside it,if user is notlogged in then login button will be shown ) */}
          <div className="mt-2 flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={"/sign-in"}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>

            {/* if user is logged in than signup button will be  notbe shown */}
            <SheetClose asChild>
              <Link href={"/sign-up"}>
                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
