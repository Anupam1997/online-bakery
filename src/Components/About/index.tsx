import React from "react";
import "./about.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className={"about"}>
      {" "}
      <div id="about" className="layout_padding about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  alt="dsdsd"
                  src="/images/cupcake-img.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="about_text">
                <strong>
                  About <span className="logo">Star Bakery</span>
                </strong>
              </h1>
              <p className="about_taital">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim ve niam, quis
                nostrud exercitationconsectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation
              </p>
              <Button className="read_more" onClick={() => navigate("/about")}>
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
