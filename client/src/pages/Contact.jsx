import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styling/Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Step 1: Send to YOU (template_rrdtkgi)
      await emailjs.sendForm(
        "service_ob8gemg",
        "template_rrdtkgi",
        form.current,
        "LFhCHc_EFrmEWQEwO"
      );

      // Step 2: Auto-reply to USER (template_f2jefnd)
      const formData = new FormData(form.current);
      const name = formData.get("name");
      const email = formData.get("email");

      await emailjs.send(
        "service_ob8gemg",
        "template_f2jefnd",
        { name, email },
        "LFhCHc_EFrmEWQEwO"
      );

      setStatus("Message sent successfully! 📬");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-page">
      <h1>📮 Get in Touch with the Curators of the Library</h1>
      <p className="contact-intro">
        Have a question, feedback, or a bookish idea to share? We'd love to hear
        from you!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject (Optional)" />
        <textarea
          name="message"
          rows="5"
          placeholder="Write your message here..."
          required
        />
        <button type="submit">📨 Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>

      <div className="contact-details">
        <p>
          <strong>📍 Address:</strong> Virtual Library Archives, The Web
          Universe
        </p>
      </div>

      {/* <div className="contact-social">
        <p>Follow us:</p>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fab fa-goodreads-g"></i>
        </a>
      </div> */}
    </section>
  );
};

export default Contact;
