import React from "react";
import financeManagement from "./finance-management.jpg";  // Import the image
import "./styles2.css";
const Home = () => {
  return (
    <section className="main home">
      <div className="container">
        <div className="content">
          <h2>Welcome to Finexo</h2>
          <p>
            At <strong>Finexo</strong>, we are passionate about helping individuals and businesses reach their financial goals. 
            With a decade of expertise in the financial industry, we specialize in providing personalized financial solutions 
            tailored to the unique needs of our clients.
          </p>
          <p>
            Our platform offers intuitive tools for budgeting, financial planning, and investments to ensure long-term growth 
            and financial freedom. Start your journey to financial success with us today!
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>
        <div className="image">
          {/* Use the imported image */}
          <img src={financeManagement} alt="Home Image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
