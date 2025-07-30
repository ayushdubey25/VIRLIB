import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styling/BookRequest.css";

const BookRequest = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Step 1: Send to Admin (template_rrdtkgi)
      await emailjs.sendForm(
        "service_ob8gemg",
        "template_rrdtkgi",
        form.current,
        "LFhCHc_EFrmEWQEwO"
      );

      // Step 2: Send Auto-Reply to User (template_f2jefnd)
      const formData = new FormData(form.current);
      const name = formData.get("name");
      const email = formData.get("email");

      await emailjs.send(
        "service_ob8gemg",
        "template_f2jefnd",
        { name, email },
        "LFhCHc_EFrmEWQEwO"
      );

      setStatus("Request sent successfully! 📚");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Failed to send request. Please try again.");
    }
  };

  return (
    <div className="book-request-page">
      <h2>📬 Request a Book</h2>
      <p>
        If you couldn’t find the book you were looking for, let us know here.
      </p>

      <form ref={form} onSubmit={sendEmail} className="book-request-form">
        <label>👤 Your Name:</label>
        <input type="text" name="name" required placeholder="Your full name" />

        <label>📧 Your Email:</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
        />

        <label>📖 Book Name:</label>
        <input
          type="text"
          name="book_name"
          required
          placeholder="e.g., The Midnight Library"
        />

        <label>✍ Author:</label>
        <input
          type="text"
          name="author"
          required
          placeholder="e.g., Matt Haig"
        />

        <label>📝 Description / Message:</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Tell us more about the book..."
        ></textarea>

        <button type="submit">Send Request</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default BookRequest;
