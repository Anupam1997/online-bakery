import React from "react";
import "./products.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  return (
    <div className="products">
      <div id="products" className="layout_padding product_section ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="product_text">
                <strong>
                  <span className="logo">Star Bakery </span>
                  <span
                    style={{
                      borderBottom: "3px solid #111111",
                    }}
                  >
                    Products
                  </span>
                </strong>
              </h1>
            </div>
          </div>
          <div className="product_section_2 images">
            <div className="row">
              <div className="col-sm-4">
                <div
                  className="images"
                  onClick={() => navigate("/products?category=cakes")}
                >
                  <img
                    alt="dsdsd"
                    src="/images/about-img4.png"
                    style={{ maxWidth: "100%", width: "100%" }}
                  />
                </div>
                <h2 className="den_text">Cake</h2>
              </div>
              <div className="col-sm-4">
                <div
                  className="images"
                  onClick={() => navigate("/products?category=muffins")}
                >
                  <img
                    alt="dsdsd"
                    src="/images/about-img5.png"
                    style={{ maxWidth: "100%", width: "100%" }}
                  />
                </div>
                <h2 className="den_text">Muffins</h2>
              </div>
              <div className="col-sm-4">
                <div
                  className="images"
                  onClick={() => navigate("/products?category=cookies")}
                >
                  <img
                    alt="dsdsd"
                    src="/images/about-img6.png"
                    style={{ maxWidth: "100%", width: "100%" }}
                  />
                </div>
                <h2 className="den_text">Cookies</h2>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <Button
                  className="goToProducts"
                  onClick={() => navigate("/products")}
                >
                  Go to Products page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
