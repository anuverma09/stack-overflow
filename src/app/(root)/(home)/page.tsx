import Link from "next/link";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/consants/filters";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
import {
  getQuestions,
  getRecommendedQuestions,
} from "@/lib/actions/question.action";
import { SearchParamsProps } from "@/types";
import Pagination from "@/components/shared/Pagination";
import Loading from "./loading";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
// import { UserButton } from "@clerk/nextjs";

// export interface SearchParamsProps {
//   searchParams: { [key: string]: string | undefined };
// }

export const metadata: Metadata = {
  title: "Home | stack overflow",
  description: "A platform for asking and answering programing question",
};

export default async function Home({ searchParams }: SearchParamsProps) {
  const { userId } = auth();

  let result;

  if (searchParams?.filter === "recommended") {
    if (userId) {
      result = await getRecommendedQuestions({
        userId,
        searchQuery: searchParams.q,
        page: searchParams.page ? +searchParams.page : 1,
      });
    } else {
      result = {
        questions: [],
        isNext: false,
      };
    }
  } else {
    result = await getQuestions({
      searchQuery: searchParams.q,
      filter: searchParams.filter,
      page: searchParams.page ? +searchParams.page : 1,
    });
  }

  // console.log(result.questions);

  // const isLoading = true;
  // if (isLoading) return <Loading />;

  return (
    <>
      {/*  */}
      {/* <div>
        <UserButton afterSignOutUrl="/" />
      </div> */}

      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full ">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask A Question
          </Button>
        </Link>
      </div>
      {/*  */}
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        {/* local search bar */}
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/public/assets/icons/search.svg"
          placeholder="Search for question"
          otherClasses="flex-1"
        />
        {/* filters */}

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      {/* homefilters filters visible as tags on larger screen */}
      <HomeFilters />

      {/* question cards */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => {
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There is no question to show"
            description="Be the first to break the slience! 🚀 Ask a question and Kickstart the discussion.our query could be a next big thing others learns from.Get involved !💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>

      <div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        />
      </div>
    </>
  );
}
