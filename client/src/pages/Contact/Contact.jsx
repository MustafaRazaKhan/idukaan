import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card  d-flex flex-column flex-lg-row">
        {/* Left Image Section */}
        <div className="image-section">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-contact-form-template_23-2150852774.jpg?t=st=1736262154~exp=1736265754~hmac=36bfba7b350d777035396a4d6c1e9a774460fd8b0b3901202a70169a933fa2e0&w=740" // Replace with your image URL
            alt="Contact Us"
          />
        </div>
        {/* Right Form Section */}
        <div className="form-section">
          <h2 className="text-center mb-4 text-primary">Contact Us</h2>
          <p className="text-center text-muted mb-4">
            We would love to hear from you! Reach out to us anytime.
          </p>
          <form className="contact-form">
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 text-uppercase fw-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
    </div>
  );
};

export default Contact;
