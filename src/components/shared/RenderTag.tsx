import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  _id: string;
  name: string;
  totalquestion?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalquestion, showCount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500  rounded-md border-none p-4 uppercase">
        {name}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{totalquestion}</p>
      )}
    </Link>
  );
};

export default RenderTag;
