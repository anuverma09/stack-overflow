import moonpic from "../../public/assets/icons/moon.svg";
import sunpic from "../../public/assets/icons/sun.svg";
import systempic from "../../public/assets/icons/computer.svg";
import homepic from "../../public/assets/icons/home.svg";
import userspic from "../../public/assets/icons/users.svg";
import starpic from "../../public/assets/icons/star.svg";
import suitcasepic from "../../public/assets/icons/suitcase.svg";
import tagpic from "../../public/assets/icons/tag.svg";
import userpic from "../../public/assets/icons/user.svg";
import questionpic from "../../public/assets/icons/question.svg";
// import { BADGE_CRITERIA } from "@/constants";

import { SidebarLinks, Themes } from "@/types";

export const themes: Themes = [
  { value: "light", label: "Light", icon: sunpic },
  { value: "dark", label: "Dark", icon: moonpic },
  { value: "system", label: "System", icon: systempic },
];

export const sidebarLinks: SidebarLinks[] = [
  { imgURL: homepic, route: "/", label: "Home" },
  { imgURL: userspic, route: "/community", label: "Community" },
  { imgURL: starpic, route: "/collection", label: "Collection" },
  { imgURL: suitcasepic, route: "/jobs", label: "Find Jobs" },
  { imgURL: tagpic, route: "/tags", label: "Tags" },
  { imgURL: userpic, route: "/profile", label: "Profile" },
  { imgURL: questionpic, route: "/ask-question", label: "Ask a question" },
];

// export const BADGE_CRITERIA = {
//   QUESTION_COUNT: {
//     BRONZE: 10,
//     SILVER: 50,
//     GOLD: 100,
//   },
//   ANSWER_COUNT: {
//     BRONZE: 10,
//     SILVER: 50,
//     GOLD: 100,
//   },
//   QUESTION_UPVOTES: {
//     BRONZE: 10,
//     SILVER: 50,
//     GOLD: 100,
//   },
//   ANSWER_UPVOTES: {
//     BRONZE: 10,
//     SILVER: 50,
//     GOLD: 100,
//   },
//   TOTAL_VIEWS: {
//     BRONZE: 1000,
//     SILVER: 10000,
//     GOLD: 100000,
//   },
// };
