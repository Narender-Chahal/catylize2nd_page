import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nationaide_img from "../assets/img/png/nationwide.png";
import target_img from "../assets/img/png/target_img.png";
function TargetSection() {
  return (
    <section className="my-5 py-5">
      <Container className="custom_container">
        <Row className="justify-content-lg-between justify-content-center align-items-center align-items-lg-start d-flex flex-column-reverse flex-lg-row ">
          <Col lg={5} className="text-center text-lg-start mt-4">
            <h2 className="mb-0 fw-semibold fs_7xl">Your Target Market</h2>
            <div className="d-flex mt-3 justify-content-center justify-content-lg-start">
              <img src={nationaide_img} alt="nationaide_img" />
              <h4 className="mb-0 fw-normal fs_md ps-2 ms-1">
                Nationwide coverage
              </h4>
            </div>
            <p className="mb-0 fw-normal fs_md pt-2 clr_lightdark pb-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>{" "}
            <button className="fw-normal fs_md common_btn text-white getstarted_btn mt-4">
              Get started
            </button>
          </Col>
          <Col lg={5} sm={10} xs={10}>
            <img className="w-100" src={target_img} alt="target_img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TargetSection;
