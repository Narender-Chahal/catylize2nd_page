import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import demo_img from "../assets/img/png/demo_watch_img.png";
import demo_vector from "../assets/img/png/demo_vector.png";
import black_img from "../assets/img/png/black_img.png";
import black_img2 from "../assets/img/png/black_img2.png";
import black_img3 from "../assets/img/png/black_img3.png";
import black_img4 from "../assets/img/png/black_img4.png";
import pricing_img from "../assets/img/png/pricing_img.png";
import eyes_img from "../assets/img/png/eyes_img.png";
import Roi_img from "../assets/img/png/Roi_img.png";
import Pipeline_img from "../assets/img/png/pipline_img.png";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
function DemoSection() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="mt-xl-5 mt-md-4 pt-md-5 pt-4 position-relative">
      <div className="blur_circle3 opacity_animation position-absolute circle_img_adjust "></div>
      <div className="nav_blur_circle opacity_animation top-0 end-0 position-absolute "></div>
      <Container className="custom_container mt-4">
        <Row className="justify-content-center mb-5 pb-md-5 pb-3">
          <Col sm={10}>
            <div className="position-relative">
              {" "}
              <img className="w-100  min_50_xsm" src={demo_img} alt="" />
              <div className="position-absolute  demo_text_adjust start-50   text-center d-flex justify-content-center align-items-center flex-column">
                <h2 className="mb-0 fw-semibold fs_8xl text-white mb-md-4 mb-3">
                  Watch a demo
                </h2>

                <button
                  onClick={handleShow}
                  className="box_demo_vector border-0"
                >
                  {" "}
                  <img src={demo_vector} alt="demo_vector" />
                </button>
                <p className="mb-0 fw-semibold fs_lg mt-md-4 mt-3 pt-2 text-white">
                  Catalyze AI is a predictive analytics business development
                  platform
                </p>
              </div>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="d-flex flex-column align-items-center justify-content-center "
              >
                <Modal.Header closeButton>
                  <Modal.Title>radialcode</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <iframe
                    width="100%"
                    className="w_xsm_150"
                    height="400"
                    src="https://www.youtube.com/embed/5_Ojw-ZyHe4"
                    title="Process of Making a Website #shorts #shortvideo @radialcode"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
        <Row className="mt-lg-5 pt-xl-5 d-none d-lg-flex">
          <Col lg={3} className="justify-content-start mt-5">
            <h2 className="mb-0 fw-semibold fs_7xl">Our Platform</h2>
          </Col>
          <Col lg={9} className="mt-5">
            <Row>
              <Col md={6}>
                <div className="box_plateform  d-flex flex-column justify-content-between">
                  <Row className="align-items-center ">
                    <Col sm={6} xs={6}>
                      <h3 className="mb-0 fw-semibold fs_xl">Exclusive</h3>
                    </Col>
                    <Col sm={6} xs={6} className="text-end">
                      <img src={black_img} alt="black_img" />
                    </Col>
                  </Row>
                  <p className="clr_dark mb-0 fw-normal fs_md">
                    200 exclusive prospects
                    <span className="d-lg-block">
                      {" "}
                      pushed to your platfrom
                    </span>{" "}
                    monthly.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="box_plateform  d-flex flex-column  justify-content-between">
                  <Row className="align-items-center">
                    <Col sm={5} xs={6}>
                      <h3 className="mb-0 fw-semibold fs_xl">
                        In your backyard
                      </h3>
                    </Col>
                    <Col sm={6} xs={6} s className="text-end">
                      <img src={black_img2} alt="black_img2" />
                    </Col>
                  </Row>
                  <p className="clr_dark mb-0 fw-normal fs_md ">
                    Radius based leads within 50-miles from you, prioritizing
                    those closer to you.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-2 pt-2 d-none d-lg-flex">
          <Col md={9}>
            <Row>
              <Col md={6}>
                <div className="box_plateform  d-flex flex-column justify-content-between">
                  <Row className="align-items-center ">
                    <Col sm={6} xs={6}>
                      <h3 className="mb-0 fw-semibold fs_xl">
                        High <span className="d-block">net worth</span>
                      </h3>
                    </Col>
                    <Col sm={6} xs={6} className="text-end">
                      <img src={black_img3} alt="black_img" />
                    </Col>
                  </Row>
                  <p className="clr_dark mb-0 fw-normal fs_md">
                    Average investable assets of{" "}
                    <span className="d-lg-block"> $1.5 million.</span>
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="box_plateform  d-flex flex-column justify-content-between">
                  <Row className="align-items-center ">
                    <Col sm={6} xs={6}>
                      <h3 className="mb-0 fw-semibold fs_xl">
                        High <span className="d-block">propensity</span>
                      </h3>
                    </Col>
                    <Col sm={6} xs={6} className="text-end">
                      <img src={black_img4} alt="black_img" />
                    </Col>
                  </Row>
                  <p className="clr_dark mb-0 fw-normal fs_md">
                    Our combination of event-driven data,{" "}
                    <span className="d-lg-block">
                      historical data, behavioral analytics,
                    </span>{" "}
                    and real-time data results in the highest propensity
                    prospects.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <div className="position-relative">
              <img
                className="w-100 "
                height="363px"
                src={pricing_img}
                alt="pricing_img"
              />
              <button className="fw-semibold fs_md border-0 bg-transparent text-white position-absolute bottom-0 start-0 px-4 pb-5 d-flex justify-content-between  w-100 ">
                <span>View pricing </span>
                <span>
                  <svg
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </Col>
        </Row>
        <h2 className="mb-0 fw-semibold fs_7xl text-center pb-4 d-lg-none">
          Our Platform
        </h2>
        <Slider {...settings} className="d-lg-none">
          <Col md={4} className=" mx-1 px-2">
            <div className="box_plateform  d-flex flex-column justify-content-between">
              <Row className="align-items-center justify-content-between">
                <Col sm={6} xs={6}>
                  <h3 className="mb-0 fw-semibold fs_xl">Exclusive</h3>
                </Col>
                <Col
                  sm={6}
                  xs={6}
                  className="text-end d-flex justify-content-end"
                >
                  <img src={black_img} alt="black_img" />
                </Col>
              </Row>
              <p className="clr_dark mb-0 fw-normal fs_md">
                200 exclusive prospects
                <span className="d-lg-block">
                  {" "}
                  pushed to your platfrom
                </span>{" "}
                monthly.
              </p>
            </div>
          </Col>
          <Col md={4} className=" mx-1 px-2">
            <div className="box_plateform  d-flex flex-column  justify-content-between">
              <Row className="align-items-center">
                <Col sm={5} xs={6}>
                  <h3 className="mb-0 fw-semibold fs_xl">In your backyard</h3>
                </Col>
                <Col
                  sm={6}
                  xs={6}
                  s
                  className="text-end d-flex justify-content-end"
                >
                  <img src={black_img2} alt="black_img2" />
                </Col>
              </Row>
              <p className="clr_dark mb-0 fw-normal fs_md ">
                Radius based leads within 50-miles from you, prioritizing those
                closer to you.{" "}
              </p>
            </div>
          </Col>{" "}
          <Col md={4} className=" mx-1 px-2">
            <div className="box_plateform  d-flex flex-column justify-content-between">
              <Row className="align-items-center ">
                <Col sm={6} xs={6}>
                  <h3 className="mb-0 fw-semibold fs_xl">
                    High <span className="d-block">net worth</span>
                  </h3>
                </Col>
                <Col
                  sm={6}
                  xs={6}
                  className="text-end d-flex justify-content-end"
                >
                  <img src={black_img3} alt="black_img" />
                </Col>
              </Row>
              <p className="clr_dark mb-0 fw-normal fs_md">
                Average investable assets of{" "}
                <span className="d-lg-block"> $1.5 million.</span>
              </p>
            </div>
          </Col>
          <Col md={4} className=" mx-1 px-2">
            <div className="box_plateform  d-flex flex-column justify-content-between">
              <Row className="align-items-center ">
                <Col sm={6} xs={6}>
                  <h3 className="mb-0 fw-semibold fs_xl">
                    High <span className="d-block">propensity</span>
                  </h3>
                </Col>
                <Col
                  sm={6}
                  xs={6}
                  className="text-end d-flex justify-content-end"
                >
                  <img src={black_img4} alt="black_img" />
                </Col>
              </Row>
              <p className="clr_dark mb-0 fw-normal fs_md">
                Our combination of event-driven data,{" "}
                <span className="d-lg-block">
                  historical data, behavioral analytics,
                </span>{" "}
                and real-time data results in the highest propensity prospects.
              </p>
            </div>
          </Col>
          <Col md={4} className="px-2 mx-1">
            <div className="position-relative">
              <img
                className="w-100 "
                height="363px"
                src={pricing_img}
                alt="pricing_img"
              />
              <button className="fw-semibold fs_md border-0 bg-transparent text-white position-absolute bottom-0 start-0 px-4 pb-5 d-flex justify-content-between  w-100 ">
                <span>View pricing </span>
                <span>
                  <svg
                    width="26"
                    height="16"
                    viewBox="0 0 26 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </Col>
        </Slider>
        <Row className="my-sm-5 py-5 justify-content-center">
          <Col sm={6} md={4} className="text-center">
            <img src={eyes_img} alt="eyes_img" />
            <p className="mb-0 fw-normal fs_md pt-2 ">
              Harness the power of 30 million data points to reach your highest
              converting target market
            </p>
          </Col>
          <Col sm={6} md={4} className="text-center mt-4 mt-md-0">
            <img src={Roi_img} alt="Roi_img" />
            <p className="mb-0 fw-normal fs_md pt-2 ">
              Increase your marketingdollars{" "}
              <span className="d-md-block ">ROI 6</span>{" "}
            </p>
          </Col>
          <Col sm={6} md={4} className="text-center mt-4 mt-md-0">
            <img src={Pipeline_img} alt="Pipeline_img" />
            <p className="mb-0 fw-normal fs_md pt-2 ">
              A top of funnel marketing solution{" "}
              <span className="d-md-block">to fill your prospect pipeline</span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DemoSection;
