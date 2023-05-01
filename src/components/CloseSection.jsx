import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import propensity_img from "../assets/img/png/propsenty_img.png";
import unconsrained_img from "../assets/img/png/unconstrained.png";
import consrained_img from "../assets/img/png/constrained.png";
function CloseSection() {
  return (
    <section className="my-xl-5 py-md-5 py-4 overflow-hidden">
      <Container className="custom_container">
        <Row className="justify-content-between align-items-center">
          <Col lg={4} sm={5} xs={10}>
            <img className="w-100" src={propensity_img} alt="propensity_img" />
          </Col>
          <Col lg={3} sm={5} className="pt-4 pt-sm-0">
            <h3 className="mb-0 fw-normal fs_md">
              Leverage big data and{" "}
              <span className="d-md-block ">artificial intelligence to</span>
              identify your next Client
            </h3>
            <p className="mb-0 fw-normal fs_md clr_lighblack2 pt-xl-4 pt-2 mt-xl-2 pb-xl-3">
              Compliment your current{" "}
              <span className="d-md-block">business development with</span>{" "}
              Unconstrained predictive{" "}
              <span className="d-md-block">analytics.</span>
            </p>
            <div className="polygon_bg position-relative ps-4  d-flex  align-items-center justify-content-center mt-md-4 mt-2 ">
              <div className="d-flex align-items-center ">
                <div className="d-flex flex-column  ">
                  <img src={unconsrained_img} alt="unconsrained_img" />{" "}
                  <img
                    className="pt-3"
                    src={consrained_img}
                    alt="consrained_img"
                  />
                </div>
                <div className="d-flex  flex-column  ps-3">
                  {" "}
                  <h3 className="mb-0 fw-normal fs_md ">Unconstrained</h3>
                  <h3 className="mb-0 fw-normal fs_md pt-3">Constrained</h3>
                </div>
              </div>
              <div className="box_blur position-absolute top-0 start-0"></div>
            </div>
          </Col>
          <Col
            lg={2}
            md={12}
            className="pt-3 pt-lg-0 d-flex  flex-column align-items-md-center align-items-lg-start"
          >
            <h3 className="mb-0 fw-semiblod fs_7xl">Close More Deals</h3>
            <p className="mb-0 fw-normal fs_md clr_lighblack2 pt-lg-4 pt-3 mt-2">
              Compliment your current business development with Unconstrained
              predictive analytics.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CloseSection;
