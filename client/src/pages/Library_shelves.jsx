import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Library_shelve.css";
import logo from "../assets/Images/virlib_logo.png";

import woodTexture from "../Textures/old-wood-planks.jpg";
import leatherTexture from "../Textures/aged-leather.jpg";
import paperTexture from "../Textures/vellum-paper.avif";
import fabricTexture from "../Textures/antique-fabric.jpg";
// import libraryBg from "../Textures/library-background.jpg";
import papyrusTexture from "../Textures/papyrus-texture.jpg";
import buckramTexture from "../Textures/buckram-texture.jpg";
import parchmentTexture from "../Textures/parchment-texture.jpg";
import moroccoTexture from "../Textures/morocco-leather-texture.jpg";
import calfskinTexture from "../Textures/calfskin-texture.jpg";
import velvetTexture from "../Textures/velvet-texture.jpg";
import ChatBotWrapper from "../pages/chatbot/chatBotWrapper";

const LibraryShelves = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/About");
  };
  const handleHelp = () => {
    navigate("/Help");
  };

  // Genre data with period-appropriate colors and materials
  const genreSections = [
    {
      title: "Funtempi (Fun + Contemplative)",
      description: "Imaginative, light-hearted, mythic, and creative genres.",
      genres: [
        {
          id: "graphic-novel",
          name: "Graphic Novel",
          material: "Morocco",
        },
        {
          id: "mythology",
          name: "Mythology",
          material: "Morocco",
        },
        {
          id: "Comic",
          name: "Comics",
          material: "Morocco",
        },
        {
          id: "fantasy",
          name: "Fantasy",
          material: "Morocco",
        },
        {
          id: "legends",
          name: "Legends",
          material: "Morocco",
        },
        {
          id: "Fairytale",
          name: "Fairytale",
          material: "Morocco",
        },
        {
          id: "fables",
          name: "Fables",
          material: "Morocco",
        },
        {
          id: "comedy-humor",
          name: "Comedy",
          material: "Morocco",
        },
        {
          id: "adventure",
          name: "Adventure",
          material: "Morocco",
        },
        {
          id: "magical-realism",
          name: "Magical Realism",
          material: "Morocco",
        },
        {
          id: "Alternate-History",
          name: "Alternate History",
          material: "Morocco",
        },
        {
          id: "paranormal",
          name: "Paranormal",
          material: "Morocco",
        },
        {
          id: "fan-fiction",
          name: "Fan Fiction",
          material: "Morocco",
        },
        {
          id: "daily-life",
          name: "Daily Life",
          material: "Morocco",
        },
      ],
    },
    {
      title: "Fiction",
      genres: [
        {
          id: "historical-fiction",
          name: "Historical Fiction",
          material: "Parchment",
        },
        {
          id: "thriller",
          name: "Thriller",
          material: "Parchment",
        },
        {
          id: "mystery",
          name: "Mystery",
          material: "Parchment",
        },
        {
          id: "science-fiction",
          name: "Science Fiction",
          material: "Parchment",
        },
        {
          id: "crime",
          name: "Crime",
          material: "Parchment",
        },
        {
          id: "horror",
          name: "Horror",
          material: "Parchment",
        },
        {
          id: "dystopian",
          name: "Dystopian",
          material: "Parchment",
        },
        {
          id: "suspense",
          name: "Suspense",
          material: "Parchment",
        },
        {
          id: "literary-fiction",
          name: "Literary Fiction",
          material: "Parchment",
        },
        {
          id: "satire",
          name: "Satire",
          material: "Parchment",
        },
        {
          id: "noir",
          name: "Noir",
          material: "Parchment",
        },
        {
          id: "political-fiction",
          name: "Political Fiction",
          material: "Parchment",
        },
        {
          id: "speculative-fiction",
          name: "Speculative Fiction",
          material: "Parchment",
        },
      ],
    },

    {
      title: "Technical",
      genres: [
        {
          id: "science",
          name: "Science",
          material: "Velvet",
        },
        {
          id: "technology",
          name: "Technology",
          material: "Velvet",
        },
        {
          id: "maths",
          name: "Mathematics",
          material: "Velvet",
        },
        {
          id: "tragedy",
          name: "Tragedy",
          material: "Velvet",
        },
        {
          id: "engineering",
          name: "Engineering",
          material: "Velvet",
        },
        {
          id: "medical",
          name: "Medical",
          material: "Velvet",
        },
        {
          id: "ai-ml",
          name: "AI/ML",
          material: "Velvet",
        },
        {
          id: "law",
          name: "Legal Studies",
          material: "Velvet",
        },
        {
          id: "philosophy",
          name: "Philosophy",
          material: "Velvet",
        },
        {
          id: "economics",
          name: "Economics",
          material: "Velvet",
        },
        {
          id: "history",
          name: "History",
          material: "Velvet",
        },
        {
          id: "research",
          name: "Research",
          material: "Velvet",
        },
        {
          id: "environment",
          name: "Environment",
          material: "Velvet",
        },
        {
          id: "psychology",
          name: "Psychology",
          material: "Velvet",
        },
        {
          id: "education",
          name: "Education",
          material: "Velvet",
        },
      ],
    },
    {
      title: "Emotional & Human Experience ",
      genres: [
        {
          id: "romance",
          name: "Romance",
          material: "Buckram",
        },
        {
          id: "Tragedy",
          name: "Tragedy",
          material: "Buckram",
        },
        {
          id: "drama",
          name: "Drama",
          material: "Buckram",
        },
        {
          id: "Coming-of-Age",
          name: "Coming of Age",
          material: "Buckram",
        },
        {
          id: "Memoir",
          name: "Memoir",
          material: "Buckram",
        },
        {
          id: "Biography",
          name: "Biography",
          material: "Buckram",
        },
        {
          id: "Self-Help",
          name: "Self-Help",
          material: "Buckram",
        },
        {
          id: "Inspiration",
          name: "Inspiration",
          material: "Buckram",
        },
        {
          id: "Relationships",
          name: "Relationships",
          material: "Buckram",
        },
        {
          id: "Mental-Health",
          name: "Mental Health",
          material: "Buckram",
        },
        {
          id: "Faith-Spirituality",
          name: "Faith Spirituality",
          material: "Buckram",
        },
      ],
    },
    {
      title: "Young Minds",
      genres: [
        {
          id: "picture-books",
          name: "Picture Books",
          material: "Gilt",
        },
        {
          id: "Early-Readers",
          name: "Early Readers",
          material: "Gilt",
        },
        {
          id: "Young-Adult",
          name: "Young Adult",
          material: "Gilt",
        },
        {
          id: "Middle-Grade",
          name: "Middle Grade",
          material: "Gilt",
        },
        {
          id: "Fantasy-for-Kids",
          name: "Fantasy-for-Kids",
          material: "Gilt",
        },
        {
          id: "Activity-puzzle",
          name: "Activity/Puzzle",
          material: "Gilt",
        },
        {
          id: "Moral-Stories",
          name: "Moral-Stories",
          material: "Gilt",
        },
      ],
    },
    {
      title: "Creative & Artsy",
      genres: [
        {
          id: "photography",
          name: "Photography",
          material: "Velvet",
        },
        {
          id: "Art",
          name: "Art",
          material: "Velvet",
        },
        {
          id: "Poetry",
          name: "Poetry",
          material: "Velvet",
        },
        {
          id: "Calligraphy",
          name: "Calligraphy",
          material: "Velvet",
        },
        {
          id: "Music-Lyrics",
          name: "Music",
          material: "Velvet",
        },
        {
          id: "Design-fashion",
          name: "Design",
          material: "Velvet",
        },
        {
          id: "Craft-DIY",
          name: "DIY Craft",
          material: "Velvet",
        },
        {
          id: "cook-book",
          name: "Cooking",
          material: "Velvet",
        },
      ],
    },
  ];

  // Texture mapping for different materials
  const materialTextures = {
    Gilt: `url(${leatherTexture})`,
    Parchment: `url(${parchmentTexture})`,
    Vellum: `url(${paperTexture})`,
    Morocco: `url(${moroccoTexture})`,
    Calfskin: `url(${calfskinTexture})`,
    Cloth: `url(${fabricTexture})`,
    Buckram: `url(${buckramTexture})`,
    Papyrus: `url(${papyrusTexture})`,
    Velvet: `url(${velvetTexture})`,
  };

  const handleGenreClick = (genreId) => {
    if (!genreId) {
      console.warn("Genre ID is missing");
      return;
    }
    navigate(`/genre/${genreId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/enter", { replace: true });
  };

  return (
    <div
      className="library-container"
      style={{
        backgroundImage:
          "https://images.unsplash.com/photo-1575220360526-be964710f279?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
    >
      {/* Antique Library Header */}
      <header
        className="library-header"
        style={{ backgroundImage: `url(${woodTexture})` }}
      >
        <div className="header-content">
          <img src={logo} alt="" width="180" height="100" />
          <h1 className="library-title">VirLib</h1>
          <div className="library-logo">
            <i className="fas fa-scroll"></i>
          </div>
          <div className="header-buttons">
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
            <button
              onClick={() => navigate("/recommended")}
              className="recommended-button"
            >
              Recommended Books
            </button>
          </div>
        </div>
        <div className="wood-carving"></div>
      </header>

      {/* Main Library Shelves */}
      <main className="library-main">
        <div
          className="almirah"
          style={{ backgroundImage: `url(${woodTexture})` }}
        >
          {genreSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="shelf-section">
              <div className="section-label">
                <span className="label-text">{section.title}</span>
                <span className="label-ornament"></span>
              </div>
              <div className="shelf">
                <div className="shelf-board"></div>
                <div className="shelf-content">
                  {section.genres.map((genre) => (
                    <div
                      key={genre.id}
                      className="genre-book"
                      onClick={() => handleGenreClick(genre.id)}
                      // data-era={genre.era}
                    >
                      <div
                        className="book-spine"
                        style={{
                          background:
                            materialTextures[genre.material] ||
                            `linear-gradient(135deg, var(--${genre.material
                              .toLowerCase()
                              .replace(" ", "-")}-light), var(--${genre.material
                              .toLowerCase()
                              .replace(" ", "-")}-dark))`,
                        }}
                      >
                        <span className="spine-text">{genre.name}</span>
                      </div>
                      <div
                        className="book-cover"
                        style={{
                          backgroundImage:
                            /*materialTextures[genre.material] ||*/
                            `url(${paperTexture})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="cover-ornament"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Antique Library Footer */}
      <footer
        className="library-footer"
        style={{
          backgroundImage:
            "https://images.unsplash.com/photo-1575220360526-be964710f279?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        <div className="footer-content">
          <p className="established">Established Mid-2025</p>
          <div className="footer-links">
            <button onClick={handleAbout} className="footer-link">
              <i className="fas fa-ankh"></i>
              <strong> About</strong>
            </button>
            <button
              className="footer-link"
              onClick={() => navigate("/contact")}
            >
              <i className="fas fa-quill"></i>
              <strong> Contact </strong>
            </button>
            <button onClick={handleHelp} className="footer-link">
              <i className="fas fa-infinity"></i>
              <strong> Help </strong>
            </button>
          </div>
          <p className="hours">
            <i className="fas fa-hourglass-half"></i> Open 24/7, 365 days a year
          </p>
        </div>
      </footer>
      <ChatBotWrapper />
    </div>
  );
};

export default LibraryShelves;
