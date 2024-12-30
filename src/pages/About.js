import React from "react";
import aboutUsImage from "./aboutus1.jpg"; // Replace with the correct path to your image

function About() {
  return (
    <section className="main about-us">
      <div className="container">
        {/* Content Section */}
        <div className="content">
          <h2>About Us</h2>
          <p>
            At <strong>Finexo</strong>, we are passionate about empowering individuals and businesses to achieve their financial aspirations. Established with the vision of making financial planning simple, accessible, and effective, we pride ourselves on offering tailored financial solutions designed to meet the unique needs of our diverse clientele.
          </p>
          <h3>Our Mission</h3>
          <p>
            To guide you on your journey to financial success by providing innovative tools, expert advice, and unparalleled service. We strive to build lasting relationships with our clients by delivering results-driven solutions and fostering trust every step of the way.
          </p>
          <h3>Our Vision</h3>
          <p>
            To be the most trusted financial partner globally, empowering people to take control of their financial future with confidence and clarity.
          </p>
 
        </div>

        {/* Image Section */}
        <div className="image">
          <img src={aboutUsImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default About;
