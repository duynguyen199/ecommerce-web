import React from "react";
import StarRating from "../Star/StarRating";
import CommentCard from "./CommentCard";

type Props = {};

const arr = [
  {
    id: 1,
    rating: <StarRating rating={5} />,
    name: "Sarah M.",
    comments:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
];
const Review = (props: Props) => {
  return (
    <div>
      <h1>OUR HAPPY CUSTOMERS</h1>
      <CommentCard name=""/>
    </div>
  );
};

export default Review;
