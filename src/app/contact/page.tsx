import "/src/app/globals.css";
import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      {/* Contact Image */}
      <div className="contactImg">
        {/* skills */}
        <div className="contact-container">
          <div className="form">
            <label>Email:</label>
            <input
              type="email"
              className="input-field"
              placeholder="Your email"
            />

            <label>Subject:</label>
            <input type="text" className="input-field" placeholder="Subject" />

            <label>Content:</label>
            <textarea
              className="input-field"
              placeholder="Write your message here"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
