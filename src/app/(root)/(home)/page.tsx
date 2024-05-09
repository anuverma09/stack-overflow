import Link from "next/link";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/consants/filters";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import HomeFilters from "@/components/shared/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/shared/cards/QuestionCard";

const question = [
  {
    _id: "1",
    title: "Sample Question 1",
    tags: [{ _id: "tag1", name: "Tech" }],
    author: { _id: "user1", name: "John Doe", picture: "avatar.jpg" },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2024-04-08"),
  },
  {
    _id: "3",
    title: "Sample Question 2",
    tags: [{ _id: "tag2", name: "Science" }],
    author: { _id: "user2", name: "Jane Smith", picture: "avatar.jpg" },
    upvotes: 5123456,
    views: 5000000,
    answers: [],
    createdAt: new Date("2022-05-01"),
  },

  {
    _id: "4",
    title: "Cascading delete in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: { _id: "user3", name: "Mona", picture: "avatar.jpg" },
    upvotes: 100054,
    views: 20000,
    answers: [{ _id: "ans4", text: "NLTK and spaCy are popular choices." }],
    createdAt: new Date("2024-05-09"),
  },
  {
    _id: "5",
    title: "flex in css?",
    tags: [
      { _id: "1", name: "css" },
      { _id: "2", name: "sql" },
    ],
    author: { _id: "user4", name: "Ricky", picture: "avatar.jpg" },
    upvotes: 1000,
    views: 2000,
    answers: [{ _id: "ans4", text: "NLTK and spaCy are popular choices." }],
    createdAt: new Date("2024-04-04"),
  },
  {
    _id: "6",
    title: "Python Libraries for Natural Language Processing",
    tags: [
      { _id: "tag11", name: "Python" },
      { _id: "tag12", name: "NLP" },
    ],
    author: { _id: "user7", name: "Michael Johnson", picture: "avatar.jpg" },
    upvotes: 18,
    views: 140,
    answers: [{ _id: "ans4", text: "NLTK and spaCy are popular choices." }],
    createdAt: new Date("2024-03-09"),
  },
];

export default function Home() {
  return (
    <>
      {/*  */}
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className=" h1-bold text-dark100_light900">All Questions</h1>
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
        {question.length > 0 ? (
          question.map((question) => {
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
    </>
  );
}
