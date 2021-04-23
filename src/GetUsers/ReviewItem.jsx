import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ReviewItem = ({ item }) => {
  const [modalState, toggleModalState] = useState(false);

  return (
    <>
      <div>
        {/* <h2>{item.display_title}</h2>
        <h4>{item.headline}</h4> */}

        <button
          className="btn btn-primary"
          onClick={() => toggleModalState(!modalState)}
        >
          Read review
        </button>

        <p className="text-right">
          <small className="text-muted">Reviewed by: </small>
          {/* {item.byline} */}
        </p>
      </div>

      <Modal show={modalState} onHide={() => toggleModalState(!modalState)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewItem;
