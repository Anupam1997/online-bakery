import React from "react";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import classes from "./footer.module.scss";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function Footer() {
  return (
    <div className={classes.footer}>
      <div id="contact" className="contact_section">
        <div className="container">
          <div className="contact-taital">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="contact_text">
                  <strong>Contact Us</strong>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="adderess_text">Adderess</h2>
              <div className="image-icon">
                <PlaceIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">Gb road 123 london Uk </span>
              </div>
              <div className="image-icon">
                <PhoneInTalkIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">(+71) 56982424536</span>
              </div>
              <div className="image-icon">
                <EmailIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">bacerim@gmail.com</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="adderess_text">Useful Links</h2>
              <div className="image-icon">
                <CakeIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">Bacerim Dictionary</span>
              </div>
              <div className="image-icon">
                <CakeIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">Help Links</span>
              </div>
              <div className="image-icon">
                <CakeIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">bacerim Attitudes</span>
              </div>
              <div className="image-icon">
                <CakeIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">Call a Cutumer</span>
              </div>
              <div className="image-icon">
                <CakeIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">Help a Bacerim</span>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="adderess_text">Overview</h2>
              <div className="image-icon">
                <CakeIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">Bacerim Dictionary</span>
              </div>
              <div className="image-icon">
                <CakeIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">Help Links</span>
              </div>
              <div className="image-icon">
                <CakeIcon style={{ fill: "#ff3049" }} />
                <span className="email_text">bacerim Attitudes</span>
              </div>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img alt="dsdsd" src="/images/fb-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="dsdsd" src="/images/twitter-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="dsdsd" src="/images/google-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img alt="dsdsd" src="/images/linkedin-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <h2 className="adderess_text">Instagram</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-img">
                    <img
                      alt="dsdsd"
                      src="/images/footer-img1.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-img">
                    <img
                      alt="dsdsd"
                      src="/images/footer-img2.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-img">
                    <img
                      alt="dsdsd"
                      src="/images/footer-img2.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-img">
                    <img
                      alt="dsdsd"
                      src="/images/footer-img3.png"
                      style={{ width: "100%" }}
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

export default Footer;
