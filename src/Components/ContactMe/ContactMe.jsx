import React, { useState } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Data Submitted: ', formData);
    // alert('Form submitted successfully!');

    // Send email using EmailJS
    emailjs
      .send(
        "service_sg8b5cg", // Replace with your EmailJS Service ID
        "template_h47ldeq", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "JqK1nrdUeq95OlR9q" // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Something went wrong. Please try again.");
      });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contactMe" className="contactSection">
      <h1>Contact Me</h1>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
