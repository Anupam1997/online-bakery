import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./header.module.scss";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
function Header() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("username");

  const scrollIntoView = (sectionId: string) => {
    if (window.location.pathname === "/") {
      const section = document.querySelector(sectionId);
      if (section)
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/${sectionId}`);
    }
  };

  return (
    <div className={classes.header}>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div>
                    <div
                      onClick={() => scrollIntoView("#home")}
                      className="d-flex align-items-start py-3"
                    >
                      <StarBorderPurple500Icon
                        style={{ fill: "#e75480", fontSize: "40px" }}
                      />
                      <p className={classes.logo}>Star Bakery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isAuthenticated ? (
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li
                          onClick={() => scrollIntoView("#home")}
                          className="active"
                        >
                          <p>Home</p>
                        </li>
                        <li onClick={() => scrollIntoView("#about")}>
                          <p>About</p>
                        </li>
                        <li onClick={() => scrollIntoView("#products")}>
                          <p>products</p>
                        </li>
                        <li onClick={() => scrollIntoView("#gallery")}>
                          <p>gallery</p>
                        </li>
                        <li onClick={() => scrollIntoView("#contact")}>
                          <p>Contact Us</p>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
