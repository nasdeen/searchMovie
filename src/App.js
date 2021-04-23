import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col, Container, fluid } from "react-bootstrap";
import BarSearch from "./Component/BarSearch";
import Result from "./Component/Result";

const App = () => {
  const [query, setQuery] = useState("");
  const [resultSearch, setResult] = useState([]);

  const API_KEY = "NBxDntesYHGyHNs3HSjh1ICVDPFViWhN";
  const hitonSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${API_KEY}`
      )
      .then((res) => res.data.results && setResult(res.data.results));
    // .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Row>
          <Col>
            <div
              style={{ textAlign: "center", paddingTop: 20, color: "#007bff" }}
            >
              <h3>NEW YORK MOVIE SEARCH</h3>
            </div>
            <BarSearch
              query={query}
              submit={hitonSubmit}
              setQuery={setQuery}
              change={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Result result={resultSearch} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
