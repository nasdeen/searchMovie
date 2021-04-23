import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  InputGroup,
  Form,
  Button,
  FormControl,
  Container,
  Row,
} from "react-bootstrap";

const BarSearch = ({ query, submit, change }) => {
  return (
    <form style={{ padding: "20px" }} onSubmit={submit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter Movie Title"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={query}
          onChange={change}
        />
        <InputGroup.Append>
          <Button type="submit">Search Movie</Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  );
};

export default BarSearch;
