import React from "react";
import {
  Navbar,
  Form,
  Container,
  Col,
  Row,
} from "react-bootstrap";

import "./styles.css";

const Header = ({ onSearch }) => {
  return (
    <div className="sticky-top bg-white mb-1 border-bottom">
      <div className="navbar d-flex flex-column navbar-expand-md navbar-dark flex-md-row bg-black">
        <Container className="bg-black">
          <Row className="w-100">
            <div className="d-md-none d-sm-block">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </div>
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse mobile-nav"
              id="navbarMenu"
            >
              <Col md={6} sm={6} xs={12}>
                <ul className="d-block my-auto">
                  <li className="d-inline mr-2">
                    <a href="#" className="text-white">
                      Categories
                    </a>
                  </li>
                  <li className="d-inline mr-2">
                    <a href="#" className="text-white">
                      Images
                    </a>
                  </li>
                  <li className="d-inline mr-2">
                    <a href="#" className="text-white">
                      Vectors
                    </a>
                  </li>
                  <li className="d-inline mr-2">
                    <a href="#" className="text-white">
                      Videos
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={6} sm={6} xs={10} className="text-right">
                <ul className="d-block my-auto">
                  <li className="d-inline mr-2">
                    <a href="#" className="text-xs text-white">
                      Prices
                    </a>
                  </li>
                  <li className="d-inline mr-2">
                    <span className="text-grey">|</span>
                  </li>
                  <li className="d-inline mr-2">
                    <a href="#" className="text-white">
                      Login
                    </a>
                  </li>
                  <li className="d-inline mr-2">
                    <a href="#" className="text-white">
                      Sign up
                    </a>
                  </li>
                </ul>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <Container className="my-3">
        <Row className="bg-white align-items-center">
          <Col md={3} lg={2} className="d-sm-none d-md-block">
            <a href="#">
              <img src="/assets/logo.svg" alt="" />
            </a>
          </Col>
          <Col md={8} lg={9} className="col-11">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                onSearch(e.target.query.value);
              }}
            >
              <div className="row no-gutters">
                <div className="col">
                  <input
                    className="form-control border-secondary border-right-0 rounded-0 left-rounded"
                    type="search"
                    required
                    placeholder="Search"
                  />
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-outline-secondary border-left-0 rounded-0 right-rounded"
                    type="button"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </Form>
          </Col>
          <Col md={1} className="col-1">
            <a href="#">
              <span className="fas fa-shopping-bag"></span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
