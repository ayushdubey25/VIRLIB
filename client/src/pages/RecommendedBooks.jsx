// Updated RecommendedBooks.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/RecommendedBooks.css";

const RecommendedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [comments, setComments] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      try {
        const res = await fetch("http://localhost:5050/api/books/recommended");
        const data = await res.json();
        setBooks(data || []);
      } catch (error) {
        console.error("Error fetching recommended books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedBooks();
  }, []);

  const handleRating = async (bookId, rating, authorId) => {
    try {
      const res = await fetch("http://localhost:5050/api/ratings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ bookId, rating, authorId }),
      });

      const data = await res.json();
      if (res.ok) alert("⭐ Rating submitted!");
      else alert("❌ Failed to rate: " + data?.error || "Unknown error");
    } catch (err) {
      console.error("Error submitting rating", err);
    }
  };

  const handleCommentChange = (bookId, value) => {
    setComments((prev) => ({ ...prev, [bookId]: value }));
  };

  const handleSubmitComment = async (bookId, authorId, bookTitle) => {
    const comment = comments[bookId]?.trim();
    if (!comment) return;
    try {
      const res = await fetch("http://localhost:5050/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ bookId, comment, authorId, bookTitle }), // send bookTitle
      });
      if (res.ok) {
        alert("💬 Comment added!");
        setComments((prev) => ({ ...prev, [bookId]: "" }));
      } else {
        const data = await res.json();
        alert("Failed to comment: " + data?.error);
      }
    } catch (err) {
      console.error("Error posting comment", err);
    }
  };

  const filteredBooks = books.filter((book) => {
    const lower = searchTerm.toLowerCase();
    return (
      book.title?.toLowerCase().includes(lower) ||
      book.authorName?.toLowerCase().includes(lower) ||
      book.genre?.toLowerCase().includes(lower) ||
      book.description?.toLowerCase().includes(lower)
    );
  });

  return (
    <div className="recommended-books-page">
      <header className="recommended-header">
        <h1>📚 Recommended by Our Authors</h1>
        <p>Explore handpicked books directly uploaded by our authors</p>
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by title, author, genre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <main className="recommended-book-list">
        {loading ? (
          <div className="no-books-message">No books found for your search.</div>
        ) : filteredBooks.length === 0 ? (
          <div className="no-books-message">No books found for your search.</div>
        ) : (
          filteredBooks.map((book, index) => (
            <div className="book-card" key={index}>
              {book.cover && (
                <img
                  src={book.cover}
                  alt="Book Cover"
                  className="book-cover-img"
                />
              )}
              <h3>{book.title}</h3>
              <p>
                <strong>Author:</strong> {book.authorName}
              </p>
              <p>
                <strong>Genre:</strong> {book.genre}
              </p>
              <p>
                <strong>Description:</strong> {book.description}
              </p>

              {book.pdf && (
                <>
                  <iframe
                    src={book.pdf}
                    title={`Preview of ${book.title}`}
                    width="100%"
                    height="250px"
                    style={{
                      border: "1px solid #ccc",
                      marginTop: "1rem",
                      borderRadius: "8px",
                    }}
                  ></iframe>
                  <a
                    href={book.pdf}
                    className="view-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    download={`${book.title}.pdf`}
                    style={{ marginTop: "1rem", display: "inline-block" }}
                  >
                    📖 Read Book
                  </a>
                </>
              )}

              <div className="rating-stars">
                <p>
                  <strong>Rate this book:</strong>
                </p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRating(book._id, star, book.authorId)}
                    style={{ cursor: "pointer", fontSize: "1.3rem" }}
                  >
                    ⭐
                  </span>
                ))}
              </div>

              {/* 💬 Comment Box */}
              <div className="comment-section">
                <textarea
                  placeholder="Write your feedback..."
                  value={comments[book._id] || ""}
                  onChange={(e) =>
                    handleCommentChange(book._id, e.target.value)
                  }
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                    padding: "0.5rem",
                    borderRadius: "6px",
                  }}
                ></textarea>
                <button
                  className="submit-comment-btn"
                  onClick={() =>
                    handleSubmitComment(book._id, book.authorId, book.title)
                  }
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.4rem 1rem",
                    cursor: "pointer",
                  }}
                >
                  💬 Submit Feedback
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default RecommendedBooks;
