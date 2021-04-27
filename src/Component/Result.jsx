import React from "react";
import MovieReview from "./MovieReview";

const Result = ({ result }) => {
  return (
    <>
      <div style={{ backgroundColor: "#b3d7ff" }}>
        {result.map((item, index) => {
          return (
            <div style={{ padding: 30 }}>
              <p style={{ textAlign: "left" }}>
                Moview Reviewed by:{item.byline}
              </p>
              <h3>{item.headline}</h3>
              <h4>{item.display_title}</h4>
              <MovieReview item={item} key={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Result;
