import React, { useState } from "react";
import StarRating from "../Star/StarRating";
import CommentCard from "./CommentCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconStart from "../icon/IconStart";
import IconArrowRight from "../icon/IconArrowRight";
import IconArrowLeft from "../icon/IconArrowLeft";
type Props = {};

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 4.5,
    comment:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is diverse and always up-to-date.",
  },
  {
    id: 4,
    name: "Lily P.",
    rating: 4.8,
    comment:
      "The customer experience is amazing! Shipping was fast, and I got so many compliments on my outfit.",
  },
  {
    id: 5,
    name: "Marcus D.",
    rating: 4.7,
    comment:
      "Shop.co is my favorite online store now! Great fit, modern designs, and fair prices — it’s everything I wanted in a clothing brand.",
  },
];

// const NextArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-red p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
//   >
//     <ChevronRight width={20} height={20} />
//   </button>
// );

// const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
//   <button
//     onClick={onClick}
//     className="absolute left-[-25px] top-1/2 -translate-y-1/2 bg-red p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
//   >
//     <ChevronLeft size={20} />
//   </button>
// );

const Review = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <IconArrowRight />,
    prevArrow: <IconArrowLeft />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className="w-full">
      <div className="px-16 my-10 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
          OUR HAPPY CUSTOMERS
        </h2>{" "}
      </div>
      <div className="relative">
      <CommentCard/>
        <Slider {...settings}>
          {reviews.map((r, index) => (
            <div key={r.id} className={`px-4 transition-all duration-500`}>
              <CommentCard
                name={r.name}
                rating={r.rating}
                comment={r.comment}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
