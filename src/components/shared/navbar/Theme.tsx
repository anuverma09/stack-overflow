"use client";

import React from "react";
import moonpic from "../../../../public/assets/icons/moon.svg";
import sunpic from "../../../../public/assets/icons/sun.svg";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/consants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      {/* /* <Image src="sun1.svg" alt="pic" height={40} width={20} /> */}
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src={sunpic}
              alt="sun"
              height={20}
              width={20}
              className="active-theme"
            />
          ) : (
            <Image
              src={moonpic}
              alt="moon"
              height={20}
              width={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>

        <MenubarContent className="absolute -right-12 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => {
            return (
              <MenubarItem
                key={item.label}
                className="flex cursor-pointer items-center gap-4 px-2.5 py-2 focus:bg-light-800 dark:focus:bg-dark-400"
                onClick={() => {
                  setMode(item.value);
                  if (item.value !== "system") {
                    localStorage.theme = item.value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
              >
                <Image
                  src={item.icon}
                  alt="pics"
                  height={16}
                  width={16}
                  className={`${mode === item.value && "active-theme"}`}
                />
                <p
                  className={`body-semibold text-light-500 ${mode === item.value ? "text-primary-500" : "text-dark100_light900"}`}
                >
                  {item.value}
                </p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
