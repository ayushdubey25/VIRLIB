// GenrePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styling/GenrePage.css";
import logo from "../assets/Images/virlib_logo.png";

import parchmentTexture from "../Textures/parchment-texture.jpg";
import woodTexture from "../Textures/old-wood-planks.jpg";
import leatherTexture from "../Textures/aged-leather.jpg";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const materialTextures = {
  Morocco: `url(${leatherTexture})`,
  Parchment: `url(${parchmentTexture})`,
  Velvet: `url(${leatherTexture})`,
  Buckram: `url(${leatherTexture})`,
  Gilt: `url(${leatherTexture})`,
};

const GenrePage = () => {
  const { genreId } = useParams();
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [series, setSeries] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [loadingSeries, setLoadingSeries] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("books");

  const genreName = genreId ? genreId.replace(/-/g, " ") : "Unknown Genre";

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewPDF = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setModalOpen(true);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredB = books.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filteredB);

    const filteredS = series.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredSeries(filteredS);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setLoadingBooks(true);
      try {
        const res = await fetch(
          `http://localhost:5050/api/openlibrary/genre/${genreId}?limit=50`
        );
        const data = await res.json();

        const englishBooks = data.filter(
          (book) => book.title && book.title.match(/^[\x00-\x7F]+$/)
        );

        setBooks(englishBooks || []);
        setFilteredBooks(englishBooks || []);
      } catch (error) {
        console.error("Failed to fetch genre books:", error);
      } finally {
        setLoadingBooks(false);
      }
    };

    const fetchSeries = async () => {
      setLoadingSeries(true);
      try {
        const res = await fetch(
          `http://localhost:5050/api/openlibrary/genre/series/${genreId}?limit=20`
        );
        const data = await res.json();

        const englishSeries = data.filter(
          (serie) => serie.title && serie.title.match(/^[\x00-\x7F]+$/)
        );

        setSeries(englishSeries || []);
        setFilteredSeries(englishSeries || []);
      } catch (error) {
        console.error("Failed to fetch series:", error);
      } finally {
        setLoadingSeries(false);
      }
    };

    fetchBooks();
    fetchSeries();
  }, [genreId]);

  return (
    <div
      className="ancient-genre-page"
      style={{
        "--genre-color": "#c0a16b",
        "--texture": `url(${parchmentTexture})`,
      }}
    >
      {/* Header */}
      <header
        className="genre-library-header"
        style={{ backgroundImage: `url(${woodTexture})` }}
      >
        <div className="genre-header-content">
          <div className="header-left">
            <img src={logo} alt="VirLib Logo" width="200" height="120" />
          </div>
          <div className="header-center">
            <h1 className="genre-library-title">Virlib</h1>
            <p className="description">
              Explore our curated selection of {genreName} books
            </p>
          </div>
          <div className="header-right">
            <button className="back-button" onClick={() => navigate(-1)}>
              <i className="fas fa-arrow-left"></i> Return to Stacks
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="genre-library-main">
        <div
          className="genre-almirah"
          style={{ backgroundImage: `url(${woodTexture})` }}
        >
          <div className="genre-shelf-section">
            <div className="genre-section-label">
              <span className="genre-label-text">
                {genreName.toUpperCase()}
              </span>

              {/* Toggle Tabs */}
              <div
                className="genre-toggle-buttons"
                style={{ textAlign: "center", margin: "1rem" }}
              >
                <button
                  onClick={() => setActiveTab("books")}
                  style={{
                    marginRight: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: activeTab === "books" ? "#c0a16b" : "#eee",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Books
                </button>
                <button
                  onClick={() => setActiveTab("series")}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor:
                      activeTab === "series" ? "#c0a16b" : "#eee",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Series
                </button>
              </div>

              {/* Search Bar */}
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <input
                  type="text"
                  className="genre-search-bar"
                  placeholder="Search books or series by title..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    width: "80%",
                    maxWidth: "500px",
                  }}
                />
              </div>
            </div>

            {/* Books Section */}
            {activeTab === "books" && (
              <section>
                <h2 style={{ textAlign: "center", margin: "1rem 0" }}>Books</h2>
                <div className="genre-grid-container">
                  {loadingBooks ? (
                    <p>Loading books...</p>
                  ) : filteredBooks.length === 0 ? (
                    <p>No books found.</p>
                  ) : (
                    filteredBooks.map((book, index) => (
                      <div
                        key={index}
                        className="genre-genre-book"
                        onClick={() => window.open(book.read_url, "_blank")}
                      >
                        <div
                          className="genre-book-spine"
                          style={{
                            background: materialTextures["Morocco"],
                            backgroundSize: "cover",
                          }}
                        >
                          <span className="genre-spine-title">
                            {book.title}
                          </span>
                        </div>
                        <div className="genre-book-cover">
                          <div className="cover-content">
                            <h3>{book.title}</h3>
                            <p className="author">
                              {book.authors?.[0]?.name || "Unknown"}
                            </p>
                            <p className="year">
                              First Published ~{" "}
                              {book.first_publish_year || "N/A"}
                            </p>
                            {book.read_url && (
                              <button
                                className="view-button"
                                onClick={() =>
                                  window.open(book.read_url, "_blank")
                                }
                              >
                                📖 Read Book
                              </button>
                            )}
                          </div>
                          <div className="genre-cover-ornament"></div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="shelf-bottom"></div>
              </section>
            )}

            {/* Series Section */}
            {activeTab === "series" && (
              <section>
                <h2 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
                  Series
                </h2>
                <div className="genre-grid-container">
                  {loadingSeries ? (
                    <p>Loading series...</p>
                  ) : filteredSeries.length === 0 ? (
                    <p>No series found.</p>
                  ) : (
                    filteredSeries.map((serie, index) => (
                      <div
                        key={index}
                        className="genre-genre-book"
                        onClick={() => window.open(serie.read_url, "_blank")}
                      >
                        <div
                          className="genre-book-spine"
                          style={{
                            background: materialTextures["Morocco"],
                            backgroundSize: "cover",
                          }}
                        >
                          <span className="genre-spine-title">
                            {serie.title}
                          </span>
                        </div>
                        <div className="genre-book-cover">
                          <div className="cover-content">
                            <h3>{serie.title}</h3>
                            <p className="author">
                              {serie.authors?.[0]?.name || "Unknown"}
                            </p>
                            <p className="year">
                              First Published ~{" "}
                              {serie.first_publish_year || "N/A"}
                            </p>
                            {serie.read_url && (
                              <button
                                className="view-button"
                                onClick={() =>
                                  window.open(serie.read_url, "_blank")
                                }
                              >
                                📖 Read Series
                              </button>
                            )}
                          </div>
                          <div className="genre-cover-ornament"></div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="shelf-bottom"></div>
              </section>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="genre-library-footer">
        <div className="genre-footer-content">
          <p>Scriptoria Library • Established 2025</p>
          <button
            className="send-request-button"
            onClick={() => navigate("/bookrequest")}
          >
            📚 Couldn't find a book? Request it here!
          </button>
        </div>
      </footer>

      {/* PDF Modal */}
      {modalOpen && selectedPdf && (
        <div className="pdf-modal">
          <button className="close-button" onClick={() => setModalOpen(false)}>
            ✖
          </button>
          <div className="pdf-viewer-container">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={selectedPdf}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenrePage;
