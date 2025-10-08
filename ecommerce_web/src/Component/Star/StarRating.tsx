import React from "react";

type StarRatingProps = {
  rating: number;     // e.g. 4.5
  total?: number;     // default 5
  showNumber?: boolean; // optional flag to show number
};

const StarRating: React.FC<StarRatingProps> = ({ rating, total = 5, showNumber = true }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {/* Stars */}
      <div style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: total }, (_, i) => {
          const starValue = i + 1;
          if (rating >= starValue) {
            // full star
            return <span key={i} style={{ color: "#FFC633", fontSize: "32px" }}>★</span>;
          } else if (rating >= starValue - 0.5) {
            // half star
            return (
              <span key={i} style={{ position: "relative", fontSize: "32px", color: "#facc15" }}>
                <span style={{ position: "absolute", overflow: "hidden", width: "50%" }}>★</span>
                <span style={{ color: "#d1d5db" }}>★</span>
              </span>
            );
          } else {
            // empty star
            return <span key={i} style={{ color: "#d1d5db", fontSize: "32px" }}>★</span>;
          }
        })}
      </div>

      {/* Number */}
      {showNumber && (
        <span style={{ fontSize: "14px", fontWeight: "regular", color: "#000000" }}>
          {rating.toFixed(1)} / <span style={{color:"rgba(0, 0, 0, 0.6)"}}>{total}</span> 
        </span>
      )}
    </div>
  );
};

export default StarRating;
