import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import Header from "components/Header";
import './styles.css'

const App = () => {
  const [status, setStatus] = useState("loading");
  const [popular, setPopular] = useState([]);
  const onSearch = (query) => {
      console.log('search query: ', query)
  };

  useEffect(() => {
    fetch("/assets/popular-searches.json")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setStatus("loaded");
        setPopular(response);
      });
  }, []);

  return (
    <>
      <Header onSearch={onSearch} />
      <Container>
        <Row className="mb-2">
          <Col>
            <h1>Popular Searches</h1>
          </Col>
        </Row>
        <Row>
          {status === "loading" && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          {popular.map((item, index) => (
            <Col md={4} className="mb-3" key={index}>
              <a
                href={item.url}
                className="font-weight-light text-decoration-underline text-muted"
              >
                {item.name}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
