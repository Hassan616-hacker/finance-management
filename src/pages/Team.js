import React from "react";
import asjadImage from "./asjad.jpg"; // Replace with the correct path to your image
import hassanImage from "./hassan.jpg"; // Replace with the correct path to your image

function Team() {
  return (
    <section className="main team">
      <div className="container">
        <div className="content">
          <h2>Meet Our Team</h2>
          <p>
            Our dedicated team of financial experts brings years of experience
            to help you achieve your financial goals. Each member of our team
            plays a vital role in providing the best possible solutions for our
            clients.
          </p>
          <div className="team-members">
            <div className="member">
              <img src={asjadImage} alt="Asjad Rizwan" />
              <h3>Asjad Rizwan</h3>
              <p>Chief Financial Officer</p>
            </div>
            <div className="member">
              <img src={hassanImage} alt="Muhammad Hassan" />
              <h3>Muhammad Hassan</h3>
              <p>Lead Financial Planner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
