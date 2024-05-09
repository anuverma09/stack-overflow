import Image from "next/image";
import React from "react";
import lightillustrationpic from "../../../public/assets/images/light-illustration.png";
import darkillustrationpic from "../../../public/assets/images/dark-illustration.png";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src={lightillustrationpic}
        alt="no result illustration"
        height={200}
        width={270}
        style={{ height: "auto", width: "auto" }}
        className="block object-contain dark:hidden"
      />
      <Image
        src={darkillustrationpic}
        alt="no result illustration"
        height={200}
        width={270}
        style={{ height: "auto", width: "auto" }}
        className="hidden object-contain dark:flex"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3  text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
          {" "}
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
