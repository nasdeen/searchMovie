import React from "react";
import { Button } from "react-bootstrap";

const Result = ({ result }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#b3d7ff",
        }}
      >
        {result.map((item) => {
          return (
            <div style={{ padding: 30 }}>
              <p style={{ textAlign: "left" }}>
                Moview Reviewed by:{item.byline}
              </p>
              <h3>{item.headline}</h3>
              <h4>{item.display_title}</h4>
              <Button className="btn btn-primary">Movie Review </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Result;
