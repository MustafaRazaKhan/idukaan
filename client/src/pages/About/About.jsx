import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>About ShopEase</h1>
          <p>
            Your one-stop shop for all your needs, delivered with love and care.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At ShopEase, we strive to make shopping simple, convenient, and
            accessible for everyone. Our mission is to bring quality products to
            your doorstep at unbeatable prices.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>
              <strong>Customer First:</strong> We prioritize our customers'
              needs above all else.
            </li>
            <li>
              <strong>Quality Assurance:</strong> Every product we offer is
              carefully vetted for quality.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace technology to enhance your
              shopping experience.
            </li>
            <li>
              <strong>Sustainability:</strong> We support eco-friendly practices
              and products.
            </li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Emma Johnson" />
              <h3>Emma Johnson</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Mark Smith" />
              <h3>Mark Smith</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Sophia Brown" />
              <h3>Sophia Brown</h3>
              <p>Marketing Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="container">
          <h2>Why Choose ShopEase?</h2>
          <div className="stats">
            <div className="stat">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>5,000+</h3>
              <p>Products Available</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
