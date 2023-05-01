import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import vector from "../assets/img/png/vector.png";
import Slider from "react-slick";
import prev_img from "../assets/img/png/prev_arrow.png";
import next_img from "../assets/img/png/next_arrow.png";
function SliderSection() {
  const first = useRef("");
  console.log(first.current.slickNext);
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-lg-5 my-5 position-relative">
      <div className="see_blur_circle opacity_animation position-absolute start-50 start_sm_25 top-0 see_blur_circle_adjust"></div>
      <div className="see_blur2 position-absolute see_blur_circle2_adjust opacity_animation"></div>
      <Container className=" custom_container position-relative">
        <h2 className="fw-semibold fs_7xl mb-0 text-center">
          See what our users say
        </h2>
        <button
          className="border-0 bg-transparent position-absolute  slide_btn_adjust "
          onClick={() => first.current.slickPrev()}
        >
          <img src={next_img} alt="next_img" />
        </button>
        <button
          className="border-0 bg-transparent position-absolute  slide_btn_adjust_prev"
          onClick={() => first.current.slickNext()}
        >
          <img src={prev_img} alt="prev_img" />
        </button>
        <Slider ref={first} {...settings} className="d-flex px-4 mt-5">
          <div className="mx-2 px-2">
            <div className="richard_box h-100    d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="rc_box d-flex align-items-center justify-content-center clr_green">
                    <h2 className="mb-0 fw-semibold fs_md">RC</h2>
                  </div>
                  <div className="d-flex flex-column ps-sm-4 ps-2 ms-1">
                    <span className="fw-semibold fs_xl">Richard Chung</span>
                    <span className="fw-normal fs_xsm clr_lightdark">
                      Killer Williams
                    </span>
                  </div>
                </div>
                <div>
                  <img src={vector} alt="vectors" />
                </div>
              </div>
              <p className="mb-0 fw-normal fs_md mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </div>
          <div className="mx-2 px-2">
            {" "}
            <div className="richard_box h-100    d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="rc_box d-flex align-items-center justify-content-center clr_green">
                    <h2 className="mb-0 fw-semibold fs_md">PM</h2>
                  </div>
                  <div className="d-flex flex-column ps-sm-4 ps-2 ms-1">
                    <span className="fw-semibold fs_xl">Paul Morris</span>
                    <span className="fw-normal fs_xsm clr_lightdark">
                      CEO of KW Forward Living KW Regianal Owner
                    </span>
                  </div>
                </div>
                <div>
                  <img src={vector} alt="vectors" />
                </div>
              </div>
              <p className="mb-0 fw-normal fs_md mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
          <div className="mx-2 px-2">
            <div className="richard_box h-100    d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="rc_box d-flex align-items-center justify-content-center clr_green">
                    <h2 className="mb-0 fw-semibold fs_md">RC</h2>
                  </div>
                  <div className="d-flex flex-column ps-sm-4 ps-2 ms-1">
                    <span className="fw-semibold fs_xl">Richard Chung</span>
                    <span className="fw-normal fs_xsm clr_lightdark">
                      Killer Williams
                    </span>
                  </div>
                </div>
                <div>
                  <img src={vector} alt="vectors" />
                </div>
              </div>
              <p className="mb-0 fw-normal fs_md mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The 'Content here, content here', making it look like readable
                English.
              </p>
            </div>
          </div>
          <div className="mx-2 px-2">
            {" "}
            <div className="richard_box h-100  d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="rc_box d-flex align-items-center justify-content-center clr_green">
                    <h2 className="mb-0 fw-semibold fs_md">PM</h2>
                  </div>
                  <div className="d-flex flex-column ps-sm-4 ps-2 ms-1">
                    <span className="fw-semibold fs_xl">Paul Morris</span>
                    <span className="fw-normal fs_xsm clr_lightdark">
                      CEO of KW Forward Living KW Regianal Owner
                    </span>
                  </div>
                </div>
                <div>
                  <img src={vector} alt="vectors" />
                </div>
              </div>
              <p className="mb-0 fw-normal fs_md mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Point making it look like readable English.
              </p>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
}

export default SliderSection;
