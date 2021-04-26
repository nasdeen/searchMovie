import React,{useState} from "react";
import { Button, Modal } from "react-bootstrap";
import MovieReview from "./MovieReview";

const Result = ({ result }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Title>Movie Review</Modal.Title>

        <Modal.Body>
          <MovieReview item={result} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
              <Button className="btn btn-primary" onClick={handleShow}>Movie Review </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Result;
