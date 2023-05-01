import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import header_img from "../assets/img/png/header_img.png";
import card_img from "../assets/img/png/card_img.png";
import overview_img from "../assets/img/png/overview.png";
import search_img from "../assets/img/png/search_img.png";
function HeaderSection() {
  return (
    <>
      <section className="py-sm-5 py-4 my-xl-5 mt-md-4 position-relative">
        <Container className="custom_container">
          <Row className="d-flex align-items-center justify-content-between flex-column-reverse flex-lg-row pb-lg-5 mb-lg-3">
            <Col lg={6}  className="text-center text-lg-start mt-sm-4 mt-3 mt-lg-0">
              <h1 className="mb-0 fw-semibold fs_9xl">
                Event-Driven <span className="d-lg-block">Listing Leads</span>
              </h1>
              <p className="mb-0 fw-normal fs_md pt-3 pb-md-4 pb-2">
                Not your average smart farming, not statistical analysis, but
                <span className="d-lg-block ">actionable behaviors.</span>
              </p>{" "}
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mt-lg-5 mt-3">
                {" "}
                <button className="fw-normal fs_md common_btn text-white getstarted_btn">
                  Get started
                </button>
                <button className="fs_md fw-semibold ms-sm-4 ms-3 bookdemo_btn clr_green d-flex align-items-center justify-content-center">
                  Book a demo{" "}
                  <a
                    className="border_book d-flex align-items-center justify-content-center ms-sm-3 ms-2"
                    href="#"
                  >
                    {" "}
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 0.533467V9.06654C0.499973 9.16143 0.525266 9.25461 0.573268 9.33647C0.62127 9.41833 0.690243 9.48589 0.773071 9.5322C0.855899 9.57851 0.949583 9.60187 1.04446 9.59989C1.13933 9.59791 1.23195 9.57065 1.31278 9.52093L8.2459 5.25439C8.32355 5.20667 8.38767 5.13986 8.43216 5.06031C8.47664 4.98076 8.5 4.89114 8.5 4.8C8.5 4.70886 8.47664 4.61924 8.43216 4.5397C8.38767 4.46015 8.32355 4.39333 8.2459 4.34562L1.31278 0.0790812C1.23195 0.0293572 1.13933 0.00209813 1.04446 0.000116346C0.949583 -0.00186544 0.855899 0.0215019 0.773071 0.0678073C0.690243 0.114113 0.62127 0.181679 0.573268 0.263536C0.525266 0.345392 0.499973 0.438574 0.5 0.533467Z"
                        fill="#1AD079"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </Col>
            <Col lg={6} md={8}sm={10} xs={10} className="pe-lg-0">
              <div className="position-relative">
                <img className="w-100" src={header_img} alt="header_img" />
                <img
                  className="position-absolute start-0 animation_move overview_img_adjust"
                  src={overview_img}
                  alt="overview_img"
                />
                <img
                  className="position-absolute  animation_move2 card_img_adjust "
                  src={card_img}
                  alt="card_img"
                />
                <img
                  className="position-absolute  animation_move3 search_img_adjust "
                  src={search_img}
                  alt="search_img"
                />
              </div>
            </Col>
          </Row>
          <div className="line_header mt-5 "></div>
        </Container>
      </section>
    </>
  );
}

export default HeaderSection;
