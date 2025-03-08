import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Make sure Bootstrap JS is loaded

const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel" // Enable automatic sliding
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline</h1>
              <p>Some representative placeholder content for the first slide.</p>
              <a className="btn btn-lg btn-primary" href="#">
                Sign up today
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn-bijap.nitrocdn.com/AuMaQmessFRMSicXmZsEecJFLEquAyoT/assets/images/optimized/rev-1e69eac/www.the-future-of-commerce.com/wp-content/uploads/2021/09/ecommerce-evolution_1200x375-1200x370.jpg"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline</h1>
              <p>Some representative placeholder content for the second slide.</p>
              <a className="btn btn-lg btn-primary" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
