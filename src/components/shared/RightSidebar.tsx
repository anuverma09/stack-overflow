import Image from "next/image";
import Link from "next/link";
import React from "react";
import chevronrightpic from "../../../public/assets/icons/chevron-right.svg";
import RenderTag from "./RenderTag";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getTopPopularTags } from "@/lib/actions/tag.action";

// const hotQuestion = [
//   { _id: 1, title: "How do I use express bas a custom server in nextjs?" },
//   { _id: 2, title: "Cascading Delete in SQLAlchemy" },
//   { _id: 3, title: "How do I use express bas a custom server in nextjs?" },
//   { _id: 4, title: "How do I use express bas a custom server in nextjs?" },
//   { _id: 5, title: "Redux Toolkit Not Updating AS expected" },
// ];

// const popularTags = [
//   { _id: 1, name: "javascript", totalquestion: 5 },
//   { _id: 2, name: "react", totalquestion: 2 },
//   { _id: 3, name: "redux", totalquestion: 15 },
//   { _id: 4, name: "Angular", totalquestion: 10 },
//   { _id: 5, name: "mongo db", totalquestion: 8 },
// ];

const RightSidebar = async () => {
  const hotQuestion = await getHotQuestions();
  const popularTags = await getTopPopularTags();
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px]  flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* top section */}
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestion.map((question) => {
            return (
              <Link
                href={`/question/${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src={chevronrightpic}
                  alt="chevronRight"
                  width={20}
                  height={20}
                />
              </Link>
            );
          })}
        </div>
      </div>
      {/* below section */}
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4 ">
          {popularTags.map((tag) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id.toString()}
                name={tag.name}
                totalquestion={tag.numberOfQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
