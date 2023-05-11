import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo_img from "../assets/img/png/logo.png";
import finencial_log from "../assets/img/png/financial_img.png";
import real_logo from "../assets/img/png/real_logo.png";
import login_img from "../assets/img/png/login_img.png";
import cross from "../assets/img/png/cross-sign.png";
function MyNav() {
  const [first, setfirst] = useState(false);
  if (first) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <section className="nav_bg position-relative">
      <div className="position-absolute top-0 opacity_animation end-0 nav_blur_circle"></div>
      <Container className="custom_container">
        <nav className="d-flex align-items-center justify-content-between py-4">
          <div className="d-flex align-items-center">
            <a href="#">
              <img src={logo_img} alt="logo_img" />
            </a>
            <div
              className={
                first === true
                  ? " open_nav d-flex  align-items-center flex-column flex-lg-row justify-content-center ms-lg-3 ps-lg-4"
                  : "close_nav d-flex flex-column align-items-center  flex-lg-row justify-content-center ms-lg-5 ms-lg-3 ps-lg-4 "
              }
            >
              <button
                onClick={() => setfirst(false)}
                className="border-0 rounded-5 bg-white position-absolute top-0 end-0 m-4 d-lg-none"
              >
                <img width="20px" src={cross} alt="cross" />
              </button>
              <a
                onClick={() => setfirst(false)}
                className="d-flex align-items-center nav_link"
                href="#"
              >
                <img src={finencial_log} alt="finencial_log" />
                <span className="fw-semibold text-black fs_md  ms-2">
                  Financial Services
                </span>
              </a>
              <a
                onClick={() => setfirst(false)}
                className="d-flex align-items-center ms-lg-5  mt-4 mt-lg-0 nav_link"
                href="#"
              >
                <img src={real_logo} alt="real_logo" />
                <span className="fw-semibold text-black fs_md  ms-2">
                  Real Estate
                </span>
              </a>{" "}
              <div className="d-lg-none d-flex flex-column">
                <button
                  onClick={() => setfirst(false)}
                  className="fw-semibold border-0 bg-transparent signup_btn  clr_green fs_md  mt-4 mt-lg-0"
                >
                  Sign up
                </button>
                <button
                  onClick={() => setfirst(false)}
                  className="fw-semibold fs_md clr_green log_in_button position-relative mt-4 mt-lg-0"
                >
                  Log in
                  <svg
                    className="ms-3"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.325 13.275C6.14167 13.0583 6.05 12.8127 6.05 12.538C6.05 12.2633 6.14167 12.034 6.325 11.85L8.175 10H1C0.71667 10 0.479003 9.904 0.287003 9.712C0.0950034 9.52 -0.000663206 9.28267 3.46021e-06 9C3.46021e-06 8.71667 0.0960036 8.479 0.288004 8.287C0.480004 8.095 0.717337 7.99934 1 8H8.175L6.325 6.15C6.125 5.95 6.025 5.71234 6.025 5.437C6.025 5.16167 6.125 4.92434 6.325 4.725C6.50834 4.525 6.73767 4.425 7.013 4.425C7.28834 4.425 7.51734 4.51667 7.7 4.7L11.3 8.3C11.4 8.4 11.471 8.50834 11.513 8.625C11.555 8.74167 11.5757 8.86667 11.575 9C11.575 9.13334 11.5543 9.25834 11.513 9.375C11.4717 9.49167 11.4007 9.6 11.3 9.7L7.7 13.3C7.5 13.5 7.26667 13.5917 7 13.575C6.73334 13.5583 6.50834 13.4583 6.325 13.275ZM10 18C9.71667 18 9.47934 17.9043 9.288 17.713C9.09667 17.5217 9.00067 17.284 9 17C9 16.7167 9.096 16.479 9.288 16.287C9.48 16.095 9.71734 15.9993 10 16H16V2H10C9.71667 2 9.479 1.904 9.287 1.712C9.095 1.52 8.99934 1.28267 9 1C9 0.71667 9.096 0.479003 9.288 0.287003C9.48 0.0950034 9.71734 -0.000663206 10 3.46021e-06H16C16.55 3.46021e-06 17.021 0.196004 17.413 0.588004C17.805 0.980003 18.0007 1.45067 18 2V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H10Z"
                      fill="#1AD079"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex">
            <button className="fw-semibold border-0 bg-transparent signup_btn clr_green fs_md me-3">
              Sign up
            </button>
            <button className="fw-semibold fs_md clr_green log_in_button ms-lg-4 ms-3 ms-2 ">
              Log in
              <svg
                className="ms-3"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.325 13.275C6.14167 13.0583 6.05 12.8127 6.05 12.538C6.05 12.2633 6.14167 12.034 6.325 11.85L8.175 10H1C0.71667 10 0.479003 9.904 0.287003 9.712C0.0950034 9.52 -0.000663206 9.28267 3.46021e-06 9C3.46021e-06 8.71667 0.0960036 8.479 0.288004 8.287C0.480004 8.095 0.717337 7.99934 1 8H8.175L6.325 6.15C6.125 5.95 6.025 5.71234 6.025 5.437C6.025 5.16167 6.125 4.92434 6.325 4.725C6.50834 4.525 6.73767 4.425 7.013 4.425C7.28834 4.425 7.51734 4.51667 7.7 4.7L11.3 8.3C11.4 8.4 11.471 8.50834 11.513 8.625C11.555 8.74167 11.5757 8.86667 11.575 9C11.575 9.13334 11.5543 9.25834 11.513 9.375C11.4717 9.49167 11.4007 9.6 11.3 9.7L7.7 13.3C7.5 13.5 7.26667 13.5917 7 13.575C6.73334 13.5583 6.50834 13.4583 6.325 13.275ZM10 18C9.71667 18 9.47934 17.9043 9.288 17.713C9.09667 17.5217 9.00067 17.284 9 17C9 16.7167 9.096 16.479 9.288 16.287C9.48 16.095 9.71734 15.9993 10 16H16V2H10C9.71667 2 9.479 1.904 9.287 1.712C9.095 1.52 8.99934 1.28267 9 1C9 0.71667 9.096 0.479003 9.288 0.287003C9.48 0.0950034 9.71734 -0.000663206 10 3.46021e-06H16C16.55 3.46021e-06 17.021 0.196004 17.413 0.588004C17.805 0.980003 18.0007 1.45067 18 2V16C18 16.55 17.804 17.021 17.412 17.413C17.02 17.805 16.5493 18.0007 16 18H10Z"
                  fill="#1AD079"
                />
              </svg>
            </button>
          </div>
          <div
            onClick={() => setfirst(true)}
            className="d-flex h_20 justify-content-between flex-column cursor_pointer d-lg-none"
          >
            <span className="icon"></span>
            <span className="icon"></span>
            <span className="icon"></span>
          </div>
        </nav>
      </Container>
    </section>
  );
}

export default MyNav;
