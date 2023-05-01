import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import identify_img1 from "../assets/img/png/identify_img1.png";
import identify_img2 from "../assets/img/png/identify_img2.png";
import identify_img3 from "../assets/img/png/identify_img3.png";
import Slider from "react-slick";

function IdentifySection() {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="position-relative ">
      <div className="blur_circle2 opacity_animation position-absolute blur_circle2_adjust"></div>
      <div className="blur_circle4 opacity_animation position-absolute end-0 top-0"></div>
      <Container className="custom_container">
        <h2 className="mb-0 text-center fw-semibold fs_7xl">
          Identify Inherited Properties in your{" "}
          <span className="d-sm-block">local area that will sell</span>
        </h2>
        <Row className="mt-lg-5 mt-3   pt-4 align-items-center">
          <Col md={3} sm={6} className="text-center">
            <h3 className="mb-0 text-center fw-normal fs_xl d-none d-lg-block">
              Industry High <span className="d-md-block ">Prediction Rate</span>
            </h3>
          </Col>
        </Row>
        <Slider
          {...settings}
          className="justify-content-md-between row justify-content-center align-items-center"
        >
          <Col
            md={3}
            sm={6}
            className="text-center d-flex flex-column justify-content-center align-items-center"
          >
            {" "}
            <h3 className="mb-0 text-center fw-normal fs_xl d-lg-none">
              Industry High <span className="d-md-block ">Prediction Rate</span>
            </h3>{" "}
            <h3 className="mb-0 fw-semibold fs_5xl pt-lg-3 pt-4 pb-5">40%</h3>
            <img
              className="w_100 "
              height="149px"
              src={identify_img1}
              alt="identify_img1"
            />
            <p className="mb-0 mt-md-5 mt-4 pt-3 fw-normal fs_md text-black">
              Roughly 4 out of 10 property leads{" "}
              <span className="d-md-block">sell within 12 months.</span>
            </p>
          </Col>
          <Col
            md={3}
            sm={6}
            className="text-center mt-md-5 mt-lg-0 pt-2 pt-lg-0 d-flex flex-column justify-content-center align-items-center"
          >
            <h3 className="mb-0 fw-semibold fs_5xl pt-3 pb-5">
              $77 <span className="fw-normal fs_4xl">Bn</span>
            </h3>
            <img
              className="w_100 "
              height="149px"
              src={identify_img2}
              alt="identify_img2"
            />
            <p className="mb-0 mt-md-5 mt-4 pt-3 fw-normal fs_md text-black">
              Predicted total property value that will sell per year.{" "}
            </p>
          </Col>
          <Col
            md={3}
            sm={6}
            className="text-center mt-md-5 mt-lg-0 pt-2 pt-lg-0  d-flex flex-column justify-content-center align-items-center "
          >
            <h3 className="mb-0 fw-semibold fs_5xl pt-md-3 pt-4 pb-md-5 pb-4">
              77%
            </h3>
            <img
              className="w_100 "
              height="164px"
              src={identify_img3}
              alt="identify_img3"
            />
            <p className="mb-0 mt-md-5 mt-4 pt-xl-3 fw-normal fs_md text-black">
              Of recent seller contacted only one agent before finding the right
              agent they worked with to sell their home.{" "}
              <span className="d-xl-block"></span>
            </p>
          </Col>
        </Slider>
        <div className="line_header mt-5"></div>
      </Container>
    </section>
  );
}

export default IdentifySection;
