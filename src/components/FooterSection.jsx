import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer_logo from "../assets/img/png/footer_black.png";
import back_to_top from "../assets/img/png/back_to_top.png";
function FooterSection() {
  const [first, setfirst] = useState(false);
  const movetotop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      setfirst(true);
    } else {
      setfirst(false);
    }
  });
  return (
    <section className="bg_footer py-5 mt-5 overflow-hidden position-relative">
      <a
        className={
          first
            ? " border-0 position-fixed back_to_top_adjust back_to_top_box"
            : "position-fixed back_to_top_adjust d-none"
        }
        onClick={() => movetotop()}
        href="#"
      >
        <img src={back_to_top} alt="back_to_top" />
      </a>
      <Container className="custom_container position-relative">
        <div className="footer_circle_blur opacity_animation position-absolute"></div>
        <Row className="justify-content-between">
          <Col lg={7}>
            <Row>
              <Col sm={7}>
                <div className="d-flex flex-column">
                  {" "}
                  <input
                    className="fw-semibold fs_md   input_modify"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="fw-semibold fs_md input_modify mt-3"
                    type="text"
                    placeholder="Email"
                  />
                  <Row className="mt-3">
                    <Col sm={6} lg={7} xl={6} xs={7}>
                      <button className="ff_semibold fs_md d-flex align-items-center btn_financial  justify-content-center  ">
                        <div className="btn_dots mt-1"></div>
                        <span className="ps-md-2 ps-1">Financial Services</span>
                      </button>
                    </Col>
                    <Col sm={6} lg={5} xl={6} xs={5}>
                      <button className="ff_semibold fs_md d-flex align-items-center justify-content-center  btn_real">
                        <div className="btn_dot2 mt-1"></div>
                        <span className="ps-2">Real Estate</span>
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={5}>
                <div className="d-flex flex-column mt-4 mt-sm-0">
                  <textarea
                    className="input_modify"
                    name=""
                    cols="30"
                    rows="4"
                    placeholder="Message.."
                  ></textarea>
                  <button className="btn_submit mt-2 fw-semibold fs_md text-white">
                    Submit
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="mt-4 mt-lg-0">
            <h2 className="mb-0 fw-semibold fs_5xl text-white">Contact us</h2>
            <p className="fw-normal fs_md clr_lightwhite2 pt-4 max_width">
              Our Predictive Analytics utilize a combination of event-driven
              data, historical data.
            </p>
          </Col>
        </Row>
        <div className="line_footer"></div>
        <Row className="pt-5 mt-3">
          <Col md={4}>
            <div className="d-flex flex-column">
              <a href="#">
                <img src={footer_logo} alt="footer_logo" />
              </a>
              <a className="fw-semibold fs_md text-white mt-2" href="#">
                info@catalyzeai.com
              </a>
              <a className="mb-0  text-white fw-semibold fs_md" href="tel:+">
                (941) 867-1761
              </a>
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col sm={4} xs={6} className="pt-4 pt-md-0">
                <h2 className="mb-0 fw-semibold fs_md text-white">
                  Financial Services
                </h2>
                <ul>
                  <li className="mt-3">
                    <a className="fw-normal fs_md text-white nav_link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="mt-2 pt-1">
                    <a className="fw-normal fs_md text-white nav_link" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} xs={6} className="pt-4 pt-md-0">
                <h2 className="mb-0 fw-semibold fs_md text-white">
                  Real Estate
                </h2>
                <ul>
                  <li className="mt-3">
                    <a className="fw-normal fs_md text-white nav_link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="mt-2 pt-1">
                    <a className="fw-normal fs_md text-white nav_link" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} xs={6} className="pt-4 pt-md-0">
                <h2 className="mb-0 fw-semibold fs_md text-white">LinkedIn </h2>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col lg={4} xs={12} sm={6}>
            <p className="mb-0 fw-normal fs_xsm clr_lightwhite2 ">
              All rights reserved.©20022 Catalyze AI
            </p>
          </Col>
          <Col lg={4} xs={6} sm={6} className="mt-3 mt-sm-0">
            <a
              className="mb-0 fw-normal fs_xsm terms_line position-relative clr_lightwhite2 "
              href="#"
            >
              Do not sell my data
            </a>
          </Col>
          <Col
            lg={4}
            sm={12}
            className="text-lg-end justify-content-lg-end mt-4 mt-lg-0 d-flex"
          >
            <a
              className="mb-0 fw-normal fs_xsm terms_line position-relative clr_lightwhite2 "
              href="#"
            >
              Terms & Conditions{" "}
            </a>{" "}
            <a
              className="mb-0 fw-normal fs_xsm terms_line position-relative clr_lightwhite2 ms-5"
              href="#"
            >
              Privacy Policy{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FooterSection;
