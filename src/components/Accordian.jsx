import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import accordiyan_img1 from "../assets/img/png/accordiyan_img1.png";
import accordiyan_img2 from "../assets/img/png/accordiyan_img2.png";
import accordiyan_img3 from "../assets/img/png/accordiyan_img3.png";
import accordiyan_img4 from "../assets/img/png/accordiyan_img4.png";
import plus_vector from "../assets/img/png/plus_vector.png";
import payment_card from "../assets/img/png/payment_card.png";
import chech_vector from "../assets/img/png/check_vector.png";
function Accordian() {
  const [first, setfirst] = useState(2);
  return (
    <section className="accordiyan_box pt-5 mt-5 pb-lg-5">
      <Container className="custom_container ">
        <h2 className="mb-0 fw-semibold fs_7xl text-center text-white">
          How to get started?
        </h2>
        <Row className="justify-content-lg-between justify-content-center align-items-center">
          <Col lg={6}>
            <Accordion defaultActiveKey="1" className="mt-5">
              <Accordion.Item
                eventKey="0"
                className="my-4 max_900 accordiyan_bg mx-auto"
              >
                <Accordion.Header onClick={() => setfirst(1)}>
                  <p
                    className={
                      first === 1
                        ? "btn_4 d-flex align-items-center  fw-semibold mb-0 fs_md justify-content-center"
                        : "btn_3 d-flex align-items-center fw-semibold mb-0 fs_md justify-content-center"
                    }
                  >
                    1
                  </p>
                  <h6 className="mb-0 ff_inter  fw-semibold fs_xxl ps-md-5 ps-4">
                    Provide your information{" "}
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-0 pb-3  fw-normal fs_md  clr_lightwhite max_width_700 ps-md-5 ps-4">
                    Provide a zip code and we will provide you with{" "}
                    <span className="d-block">
                      the highest propensity prospects in a 50 mile radius.
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="my-4 max_900 accordiyan_bg mx-auto"
              >
                <Accordion.Header onClick={() => setfirst(2)}>
                  <span
                    className={
                      first === 2
                        ? "btn_4  d-flex align-items-center fw-semibold fs_md justify-content-center text-white"
                        : "btn_3 text-white d-flex align-items-center fw-semibold fs_md justify-content-center"
                    }
                  >
                    2
                  </span>
                  <h6 className="mb-0 ff_inter fw-semibold fs_xxl  ps-md-5 ps-4">
                    Digital Marketing
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-0 pb-3  fw-normal fs_md  clr_lightwhite max_width_700 ps-md-5 ps-4">
                    Provide a zip code and we will provide you with{" "}
                    <span className="d-block">
                      the highest propensity prospects in a 50 mile radius.
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="my-4 max_900 accordiyan_bg mx-auto"
              >
                <Accordion.Header onClick={() => setfirst(3)}>
                  <span
                    className={
                      first === 3
                        ? "btn_4  d-flex align-items-center fw-semibold fs_md justify-content-center text-white"
                        : "btn_3 text-white d-flex align-items-center fw-semibold fs_md justify-content-center"
                    }
                  >
                    3
                  </span>{" "}
                  <h6 className="mb-0 ff_inter fw-semibold fs_xxl ps-md-5 ps-4 pl_40 pl_20_xsm">
                    Purchase your subscription{" "}
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-0 pb-3  fw-normal fs_md  clr_lightwhite max_width_700 ps-md-5 ps-4">
                    Provide a zip code and we will provide you with{" "}
                    <span className="d-block">
                      the highest propensity prospects in a 50 mile radius.
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="my-4 max_900 accordiyan_bg mx-auto"
                data-aos="fade-right"
              >
                <Accordion.Header onClick={() => setfirst(4)}>
                  <span
                    className={
                      first === 4
                        ? "btn_4  d-flex align-items-center fw-semibold fs_md justify-content-center text-white"
                        : "btn_3 text-white d-flex align-items-center fw-semibold fs_md justify-content-center"
                    }
                  >
                    4
                  </span>
                  <h6 className="mb-0 ff_inter fw-semibold fs_xxl ps-md-5 ps-4 pl_40 pl_20_xsm">
                    Development
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mb-0 pb-3  fw-normal fs_md  clr_lightwhite max_width_700 ps-md-5 ps-4">
                    Provide a zip code and we will provide you with{" "}
                    <span className="d-block">
                      the highest propensity prospects in a 50 mile radius.
                    </span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={5} sm={8} xs={8} className="py-5">
            <div className="position-relative">
              {" "}
              <img
                className={
                  first === 2 ? "  d-flex w-100 pb-3 " : "d-none w-100 "
                }
                src={accordiyan_img1}
                alt="accordiyan_img1"
              />
              <div>
                <img
                  className={
                    first === 2
                      ? "position-absolute plus_vector_adjust animation_scale d-block"
                      : " d-none"
                  }
                  src={plus_vector}
                  alt="plus_vector"
                />
              </div>
            </div>
            <img
              className={first === 1 ? "  d-flex w-100 pb-3" : "d-none w-100"}
              src={accordiyan_img2}
              alt="accordiyan_img2"
            />
            <img
              className={first === 3 ? "  d-flex w-100 pb-3" : "d-none w-100"}
              src={accordiyan_img3}
              alt="accordiyan_img3"
            />
            <div className="position-relative">
              <img
                className={
                  first === 4 ? "  d-flex w-100 pb-3 " : "d-none w-100"
                }
                src={accordiyan_img4}
                alt="accordiyan_img4"
              />
              <div>
                <img
                  className={
                    first === 4
                      ? "position-absolute payment_card_adjust animation_payment_card d-block"
                      : " d-none"
                  }
                  src={payment_card}
                  alt="payment_card"
                />
                <img
                  className={
                    first === 4
                      ? "position-absolute check_card check_card_animation d-block"
                      : " d-none"
                  }
                  src={chech_vector}
                  alt="chech_vector"
                />
              </div>
            </div>
            <div className="d-flex align-items-center mt-4 ">
              <button className="fw-normal fs_md common_btn text-white sign_up_btn1  ">
                Sign up
              </button>
              <h3 className="mb-0 fw-normal clr_lightwhite2 fs_md ms-4 ps-3">
                Register in under 5 minutes.
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Accordian;
