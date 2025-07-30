import React from 'react';
import logo from "../assets/Images/virlib_logo.png";
// import { useNavigate } from 'react-router-dom';
import '../Styling/about.css'; 

const About = () => {

//   const navigate = useNavigate();
//   const handleEnter = () => {
//     navigate('/Enter');
//   };

  return (
    <div className='content-box'>
        <div className="header-flex">
            <img src={logo} alt="VIRLIB Logo" className="logo-img" />
            <h1>About VIRLIB</h1>
        </div>
        <br/>
        <h3>🏛️ Welcome to VIRLIB – Read. Research. Reflect.</h3>
        <p>VIRLIB is not just a library—it's a dynamic literary universe built to empower authors, readers, and thinkers alike. Designed with creativity, accessibility, and innovation at its heart, VIRLIB offers a personalized space for every user to write, discover, and engage with the written word like never before.</p>
        <br/>
        <h3>🌟 Our Vision</h3>
        <p>To build a virtual sanctuary where imagination meets intellect, allowing users across the world to explore literature, research, and personal publishing with ease and elegance</p>
        <br/>
        <h3>🧩 Platform Overview</h3>
        <p>VIRLIB connects three types of users through a shared entry point, branching into role-specific experiences:</p>
        <h4>👤 1. Author</h4>
        <p># Create and publish your original books.<br/># Upload cover images and detailed descriptions.<br/># Categorize works under genres like Fantasy, Science, Romance, Mythology, and more.<br/># Track reader feedback and improve your craft.<br/>Showcase your published work on a personalized Author Dashboard.</p>
        <h4>📚 2. Reader</h4>
        <p># Explore books across a wide range of genres from Funtampi (fun & fantasy) to Technical & Research domains.<br/># Bookmark favorites, track your reading streaks, and earn achievement badges.<br/># Leave meaningful feedback to support the authors you admire.<br/># Enjoy audio versions, cover previews, and interactive reading tools.</p>
        <h4>🛠️ 3. Admin</h4>
        <p># Moderate and manage submissions across the platform.<br/># Ensure content quality and safety.<br/># Feature top authors and books on curated shelves.<br/># Monitor usage analytics and user behavior for platform improvement.</p>
        <br/>
        <h3>🗂️ Genre-Rich Library</h3>
        <p>Our virtual bookshelf includes a beautiful visual display of diverse genres such as: <br/>
        <strong>✨ FuntampiTechnical: </strong>Graphic Novels, Mythology, Legends, Comedy, Fan Fiction, etc.<br/>
        <strong>✨ : </strong>Science, AI/ML, Engineering, Math, Psychology, Medical.<br/>
        <strong>✨ Emotive Reads: </strong>Romance, Tragedy, Memoir, Inspiration.<br/>
        <strong>✨ Creative Arts: </strong>Poetry, Photography, Music, Design, DIY.<br/>
        <strong>✨ Young Minds: </strong>Picture Books, Activity Books, Moral Stories.<br/>
        Each genre is represented as an interactive book spine in a shelf-style interface, echoing the warmth of a vintage library.</p>
        <br/>
        <h3>🎯 Core Features</h3>
        <p>🔒 Secure Role-Based Login (Author / Reader / Admin)<br/>
        📚 Interactive Book Upload System<br/>
        🎨 Genre-Based Bookshelf Layout<br/>
        🗣️ Reader Feedback & Ratings<br/>
        🔔 New Book Notifications<br/>
        🧾 Personalized Author Dashboard<br/>
        🧠 AI-Driven Book Recommendations<br/>
        🎧 Audiobook Support<br/>
        🏆 Reading Streaks & Badges<br/>
        📩 Real-time Chat between Readers & Authors<br/>
        🧩 Book Publishing with Cover Upload & Genre Tags<br/>
        </p>
        <br/>
        <h3>💬 Final Note</h3>
        <p>At VIRLIB, we believe every story deserves a space, whether it’s a whispered poem or a complex thesis. With our rich, genre-based interface and personalized user journeys, VIRLIB is a place where words come alive—waiting to be read, reflected on, and remembered.</p>
    </div>
  );
};

export default About;
