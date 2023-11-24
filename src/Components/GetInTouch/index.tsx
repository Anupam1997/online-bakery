import React from "react";
import "./getInTouch.scss";
import { Button } from "@mui/material";
function GetInTouch() {
  return (
    <div className="getInTouch">
      <div className="layout_padding gallery_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="gallery_main">
                <h1 className="gallery_taital">
                  <strong>
                    <span className="our_text">Get in</span>Touch
                  </strong>
                </h1>
              </div>
            </div>
          </div>
          <div className="touch_main">
            <div className="row">
              <div className="col-md-6">
                <div className="input_main">
                  <div className="container">
                    <form action="/action_page.php">
                      <div className="form-group">
                        <input
                          type="text"
                          className="email-bt"
                          placeholder="YOUR NAME"
                          name="Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="email-bt"
                          placeholder="EMAIL"
                          name="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="email-bt"
                          placeholder="PHONE NUMBER"
                          name="Email"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="massage-bt"
                          placeholder="MASSAGE"
                          rows={5}
                          id="comment"
                          name="text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
                <Button className="send_btn">SEND</Button>
              </div>
              <div className="col-md-6">
                <div className="images">
                  <img
                    alt="dsdsd"
                    src="/images/bread-img.png"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
