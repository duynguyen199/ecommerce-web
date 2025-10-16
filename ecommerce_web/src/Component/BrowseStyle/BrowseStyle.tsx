// import React from "react";
// import causalImg from "../../assets/img/causal.png";
// import partyImg from "../../assets/img/party.png";
// import formalImg from "../../assets/img/formal.png";
// import gymImg from "../../assets/img/gym.png";

// type Props = {};

// const arr = [
//   { id: 1, title: "Casual", img: causalImg },
//   { id: 2, title: "Formal", img: formalImg },
//   { id: 3, title: "Gym", img: gymImg },
//   { id: 4, title: " Party", img: partyImg },
// ];

// const BrowseStyle = (props: Props) => {
//   return (
//     <div className="flex justify-center items-center w-full mt-10">
//       <div className="bg-[#F0F0F0] w-[90%] rounded-[40px]">
//         <h1 className="text-[48px] my-12 text-black font-[700] text-center">
//           BROWSE BY DRESS STYLE
//         </h1>

//         {/* Image Row */}
//         <div className="flex  gap-8 px-10 pb-10">
//           {arr.slice(0, 2).map((item, index) => {
//             return (
//               <>
//                 {/* Left image */}
//                 <div
//                   className={`relative overflow-hidden h-[450px] rounded-2xl ${
//                     index === 0 ? "w-[35%]" : "w-[65%]"
//                   }`}
//                 >
//                   <img
//                     src={item.img}
//                     alt="Casual"
//                     className="w-full h-full object-cover "
//                   />
//                   {/* Overlay title */}
//                   <div className="absolute top-6 left-6">
//                     <h2 className="text-3xl font-bold text-black">
//                       {item.title}
//                     </h2>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//         <div className="flex flex-row-reverse gap-8 px-10 pb-10">
//           {/* Left image */}
//           {arr.slice(2, 4).map((item, index) => {
//             return (
//               <>
//                 <div
//                   className={`relative w-[35%] overflow-hidden h-[450px] rounded-2xl ${
//                     index === 2 ? "w-[35%]" : "w-[65%]"
//                   }`}
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                   {/* Overlay title */}
//                   <div className="absolute top-6 left-6">
//                     <h2 className="text-3xl font-bold text-black">
//                       {item.title}
//                     </h2>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseStyle;





import React from "react";
import causalImg from "../../assets/img/causal.png";
import partyImg from "../../assets/img/party.png";
import formalImg from "../../assets/img/formal.png";
import gymImg from "../../assets/img/gym.png";
import { BrowseStyleItem } from "./BrowseStyleItem";

const arr = [
  { id: 1, title: "Casual", img: causalImg },
  { id: 2, title: "Formal", img: formalImg },
  { id: 3, title: "Party", img: partyImg },
  { id: 4, title: "Gym", img: gymImg },
];

const BrowseStyle: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="bg-[#F0F0F0] w-[90%] rounded-[40px]">
        <h1 className="text-[48px] my-12 text-black font-[700] text-center">
          BROWSE BY DRESS STYLE
        </h1>

        {/* Row 1 */}
        <div className="flex gap-8 px-10 pb-10">
          {arr.slice(0, 2).map((item, index) => (
            <BrowseStyleItem
              key={item.id}
              title={item.title}
              img={item.img}
              index={index}
            />
          ))}
        </div>

        {/* Row 2 (reversed layout) */}
        <div className="flex flex-row-reserve gap-8 px-10 pb-10">
          {arr.slice(2, 4).map((item, index) => (
            <BrowseStyleItem
              key={item.id}
              title={item.title}
              img={item.img}
              index={index}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
