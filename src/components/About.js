import React from "react";

const About = () => {
  return (
    <div id="about-us" className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">About Us</h2>
        <p className="lead">
        Welcome to [Your Store Name], your go-to destination for quality products at unbeatable prices. We are an online retail platform committed to providing a seamless shopping experience for customers worldwide. Our mission is simple: to bring you the latest, most exciting products, from fashion to home goods, electronics to beauty, and beyond—all in one convenient place.

Founded in [Year], we’ve grown from a small startup to a trusted name in e-commerce by prioritizing customer satisfaction and offering a vast range of top-quality items. Whether you're shopping for everyday essentials or searching for something special, we make it our mission to deliver exceptional service, secure payment options, and fast, reliable shipping.

We work with trusted suppliers and renowned brands to ensure our products meet the highest standards of quality and durability. Our user-friendly website, detailed product descriptions, and customer reviews help you make informed choices every time you shop with us.
        </p>
      </div>
      <div className="col-md-5">
        <img src="https://img.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg" alt="photo" />
      </div>
    </div>
  );
};

export default About;