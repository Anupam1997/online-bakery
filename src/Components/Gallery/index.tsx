import React from "react";
import classes from "./gallery.module.scss";

function Gallery() {
  return (
    <div className={classes.gallery}>
      <div id="gallery" className="layout_padding2 gallery_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="gallery_main">
                <h1 className="gallery_taital">
                  <strong>
                    <span className="our_text">Our</span> Gallery
                  </strong>
                </h1>
              </div>
            </div>
            <div className="col-sm-12 gallery_maain">
              <div className="row">
                <div className="col-sm-3 padding_0">
                  <div className="gallery_blog">
                    <img
                      alt="dsdsd"
                      className="img-responive"
                      src="/images/gallery-img1.png"
                    />
                    <div className="overlay">
                      <h2>Breakfast Breads</h2>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 padding_0">
                  <div className="gallery_blog">
                    <img
                      alt="dsdsd"
                      className="img-responive"
                      src="/images/gallery-img2.png"
                    />
                    <div className="overlay">
                      <h2>Breakfast Breads</h2>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 padding_0">
                  <div className="gallery_blog">
                    <img
                      alt="dsdsd"
                      className="img-responive"
                      src="/images/gallery-img3.png"
                    />
                    <div className="overlay">
                      <h2>Breakfast Breads</h2>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 padding_0">
                  <div className="gallery_blog">
                    <img
                      alt="dsdsd"
                      className="img-responive"
                      src="/images/gallery-img4.png"
                    />
                    <div className="overlay">
                      <h2>Breakfast Breads</h2>
                    </div>
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

export default Gallery;
