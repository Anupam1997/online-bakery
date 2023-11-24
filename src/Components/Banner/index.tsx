import React from "react";
import classes from "./baner.module.scss";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

function BanerSection() {
  return (
    <div className="layout_padding banner_section">
      <div className="container">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row ">
                <div className="col-md-6 taital">
                  <h1 className="taital">
                    <strong className="banner_taital pb-3">
                      Rise to the Taste, Shine with Star Bakery
                    </strong>
                  </h1>
                  <p className="lorem_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="banner-image">
                    <img
                      alt="dsdsd"
                      src="/images/banner-image.png"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BanerSection;
