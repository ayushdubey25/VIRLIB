import React from 'react';
import logo from "../assets/Images/virlib_logo.png";
// import { useNavigate } from 'react-router-dom';
import '../Styling/Help.css'; 

const Help = () => {

//   const navigate = useNavigate();
//   const handleEnter = () => {
//     navigate('/Enter');
//   };

  return (
    <div className='content-box'>
        <div className="header-flex">
            <img src={logo} alt="VIRLIB Logo" className="logo-img" />
            <h1 className="heading">Virlib Help & Support</h1>
        </div>
        <br/>
        <h3>🔍 What is Virlib?</h3>
        <p>Virlib (Scriptoria) is your personalized, genre-rich digital library designed to resemble an ancient, magical archive. It provides beautifully categorized shelves for fun, emotional, educational, and creative content.</p>
        <br/>
        <h3>📁 Navigating the Library</h3>
        <p>Explore different genre sections like Funtempi, Technical, Emotional & Human Experience, Young Minds, and Creative & Artsy.<br/>
            Click on any **book spine** to open books from that genre.<br/>
            Each genre leads to a collection curated with stories, resources, and articles.</p>
        <br/>
        <h3>🧭 Key Sections</h3>
        <p><strong>Home: </strong>Return to the main library shelf.<br/>
            <strong>About: </strong>Learn more about the origin and vision of Virlib.<br/>
            <strong>Help: </strong>(You are here!) Find answers and tips for smooth navigation.<br/>
            <strong>Contact: </strong>Reach out to us for feedback or support.</p>
        <br/>
        <h3>❓ Frequently Asked Questions (FAQs)</h3>
          <details>
            <summary>Why is a genre not opening?</summary>
            <p>Please ensure you have internet access. If the issue persists, try refreshing the page or come back later.</p>
          </details>
          <details>
            <summary>How can I publish a book here?</summary>
            <p>Publishing features are coming soon! Stay tuned via our Contact or About page.</p>
          </details>
          <details>
            <summary>Is Virlib free?</summary>
            <p>Yes! Virlib is completely free to explore and enjoy.</p>
          </details>

        <section>
          <h2>📩 Need More Help?</h2><br/>
          <p>
            Reach out through our <strong>Contact</strong> page or email us at <a href="mailto:support@virlib.com">support@virlib.com</a>.
          </p>
        </section>
        <br/>
        <footer className="help-footer">
            <p>🕯️ Scriptoria © 2025. Designed with care for curious minds.</p>
      </footer>
    </div>
  );
};

export default Help;
