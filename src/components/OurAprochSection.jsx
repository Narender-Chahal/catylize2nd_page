import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import big_box from "../assets/img/png/big_box_img.png";
import big_box2 from "../assets/img/png/big_box2.png";
import big_box3 from "../assets/img/png/big_box3.png";
import big_box4 from "../assets/img/png/big_box4.png";
function OurAprochSection() {
  const [first, setfirst] = useState(1);
  return (
    <section className="my-xl-5 py-5">
      <div className="d-flex flex-column flex-lg-row">
        <div className="approach_box   py-md-5 px-4 px-md-0  ">
          <div className=" custom_container2 py-4 my-2">
            <Row className="justify-content-center">
              <Col
                sm={3}
                xs={6}
                className="align-items-center justify-content-md-end d-flex"
              >
                <button
                  onClick={() => setfirst(1)}
                  className={
                    first == 1
                      ? " big_date d-flex flex-column p-3 border-0 d-flex align-items-start justify-content-start"
                      : "big_date1 d-flex flex-column p-3 align-items-start justify-content-start border-0 "
                  }
                >
                  <span
                    className={
                      first === 1 ? "btn_1 text-white" : "btn_2 text-white"
                    }
                  >
                    1
                  </span>
                  <span className="fw-semibold fs_md text-start text-white pt-2 mt-1">
                    Big <span className="d-block">Data</span>
                  </span>
                </button>
              </Col>
              <Col
                sm={3}
                xs={6}
                className="align-items-center justify-content-md-end d-flex"
              >
                <button
                  onClick={() => setfirst(2)}
                  className={
                    first == 2
                      ? "big_date  d-flex flex-column p-3 border-0 d-flex align-items-start justify-content-start"
                      : " big_date1 d-flex flex-column p-3 align-items-start justify-content-start border-0"
                  }
                >
                  <span
                    className={
                      first === 2 ? "btn_1 text-white" : "btn_2 text-white"
                    }
                  >
                    2
                  </span>
                  <span className="fw-semibold fs_md text-start text-white pt-2 mt-1">
                    Event- <span className="d-block">Driven</span>
                  </span>
                </button>
              </Col>
              <Col
                sm={3}
                xs={6}
                className="align-items-center justify-content-md-end d-flex"
              >
                <button
                  onClick={() => setfirst(3)}
                  className={
                    first == 3
                      ? "big_date  d-flex flex-column p-3 border-0 d-flex align-items-start justify-content-start"
                      : " big_date1 d-flex flex-column p-3 align-items-start justify-content-start border-0"
                  }
                >
                  <span
                    className={
                      first === 3 ? "btn_1 text-white" : "btn_2 text-white"
                    }
                  >
                    3
                  </span>
                  <span className="fw-semibold fs_md text-start text-white pt-2 mt-1">
                    Artificial <span className="d-block">Intelligence</span>
                  </span>
                </button>
              </Col>
              <Col
                sm={3}
                xs={6}
                className="align-items-center justify-content-md-end d-flex"
              >
                <button
                  onClick={() => setfirst(4)}
                  className={
                    first == 4
                      ? "big_date  d-flex flex-column p-3 border-0 d-flex align-items-start justify-content-start"
                      : " big_date1 d-flex flex-column p-3 align-items-start justify-content-start border-0"
                  }
                >
                  <span
                    className={
                      first === 4 ? "btn_1 text-white" : "btn_2 text-white"
                    }
                  >
                    4
                  </span>
                  <span className="fw-semibold fs_md text-start text-white pt-2 mt-1">
                    Predictive <span className="d-block">Analytics</span>
                  </span>
                </button>
              </Col>
            </Row>
            <div className="big_data_box mt-5 ">
              <Row className="justify-content-md-between justify-content-center align-items-center py-md-3 pb-5">
                <Col md={6} sm={10} xs={10} className="">
                  <img
                    className={first === 1 ? "d-flex w-100 ps-md-3 " : "d-none"}
                    src={big_box}
                    alt="big_box"
                  />
                  <img
                    className={first === 2 ? "d-flex w-100 ps-3 " : "d-none"}
                    src={big_box2}
                    alt="big_box2"
                  />
                  <img
                    className={first === 3 ? "d-flex w-100 ps-3 " : "d-none"}
                    src={big_box3}
                    alt="big_box3"
                  />
                  <img
                    className={first === 4 ? "d-flex w-100 ps-3 " : "d-none"}
                    src={big_box4}
                    alt="big_box4"
                  />
                </Col>
                <Col md={5} sm={10} xs={10} className="px-lg-0 pt-4 pt-lg-0 px-4">
                  <h2 className="mb-0 text-white fw-semibold fs_xl pe-5">
                    Big Data
                  </h2>
                  <p className="mb-0 fw-semibold pt-3 fs_xsm clr_lightwhite pe-md-5 ">
                    We gather hundreds of millions of data points in order to
                    perform advanced analytics to identify the highest
                    propensity prospects
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="approach_box2  ms-lg-2 mt-3 text-center text-sm-start mt-lg-0 p-5  d-flex flex-column justify-content-between">
          <h2 className="mb-0 text-white fw-semibold fs_6xl pt-md-4">
            Our <span className="d-md-block">approach</span>
          </h2>
          <div className="pb-lg-4 pt-5 pt-lg-0 ">
            <h3 className="mb-0 text-white fw-normal  fs_6xl">
              200k <span className="fs_3xl">Properties</span>
            </h3>
            <p className="fw-normal clr_lightwhite2 fs_md mb-0 pt-3 pb-1">
              of wealth will be transitioned in
              <span className="d-block ">the next 25 years.</span>
            </p>
            <button className="fw-normal fs_md common_btn text-white sign_up_btn mt-3 ">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAprochSection;
