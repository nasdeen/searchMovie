import React, { useState } from "react";

const MovieReview = ({ item }) => {
  // const [newItems, setNewItems] = useState([item.summary_short]);
  return (
    <div>
      {item.map((eachItem, index) => {
        return (
          <div>
            {eachItem.summary_short}
            {index}
          </div>
        );
      })}
    </div>
  );
};

export default MovieReview;
