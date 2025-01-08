import React from "react";
import servicesImage from "./services.jpeg"; // Replace with the correct path to your image

function Services() {
  return (
    <section className="main services">
      <div className="container">
        {/* Content Section */}
        <div className="content">
          <h2>Our Services</h2>
          <p>
            At <strong>Finexo</strong>, we offer a wide range of financial
            services designed to help you achieve your financial objectives.
            Our team of experts is dedicated to providing personalized
            solutions that cater to your unique needs.
          </p>

          <ul>
            <li>
              <strong>Financial Planning:</strong> Tailored strategies to help
              you plan for the future and manage your finances effectively.
            </li>
            <li>
              <strong>Investment Management:</strong> Expert guidance to help
              you navigate the investment landscape and grow your wealth.
            </li>
            <li>
              <strong>Budgeting Tools:</strong> User-friendly tools to assist
              you in creating and maintaining your budget.
            </li>
            <li>
              <strong>Retirement Planning:</strong> Strategies to ensure you
              have a secure and comfortable retirement.
            </li>
            <li>
              <strong>Debt Management:</strong> Solutions to help you manage
              and reduce your debt effectively. Solutions to help you manage
              and reduce your debt effectively. Solutions to help you manage
              and reduce your debt effectively. Solutions to help you manage
              and reduce your debt effectively. Solutions to help you manage
              and reduce your debt effectively.Solutions to help you manage
              and reduce your debt effectively.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="image">
          <img src={servicesImage} alt="Services" />
        </div>
      </div>
    </section>
  );
}

export default Services;
