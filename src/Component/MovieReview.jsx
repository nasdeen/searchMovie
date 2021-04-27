import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const MovieReview = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title>Movie Review</Modal.Title>

        <Modal.Body>{item.summary_short}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Button className="btn btn-primary" onClick={handleShow}>
        Movie Review
      </Button>

     
    </div>
  );
};

export default MovieReview;
