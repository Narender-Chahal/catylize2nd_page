import React from "react";
import logo_img from "../assets/img/png/logo.png";
const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div>
      <div className="preloader">
        <img className="preloder_animation" src={logo_img} alt="logo_img" />
      </div>
    </div>
  );
};

export default Preloader;
