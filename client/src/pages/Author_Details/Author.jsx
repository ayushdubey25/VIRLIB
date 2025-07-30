import React, { useState, useEffect } from "react";
import "../../Styling/Author.css";
import logo from "../../assets/Images/virlib_logo.png";
import Profile from "./Profile";
import PublishedWork from "./PublishedWork";
import Feedback from "./Feedback";
import AddNewWork from "./AddWork";
import { useNavigate } from "react-router-dom";

const Author = () => {
  const [activeSection, setActiveSection] = useState("Profile");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // Fetch books written by this author
  useEffect(() => {
    const fetchBooks = async () => {
      if (!user.id) return;
      try {
        const res = await fetch(
          `http://localhost:5050/api/books/author/${user.id}`
        );
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("Failed to fetch books", err);
      }
    };

    fetchBooks();
  }, [user.id]);

  const handleDeleteBook = async (bookId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5050/api/books/${bookId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        alert("Book deleted successfully!");
        setBooks((prev) => prev.filter((b) => b._id !== bookId)); // Update UI
      } else {
        alert(data.msg || "Failed to delete book");
      }
    } catch (err) {
      alert("Error deleting book");
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Profile":
        return <Profile />;
      case "PublishedWork":
        return <PublishedWork books={books} onDelete={handleDeleteBook} />;

      case "Feedback":
        return <Feedback />;
      case "AddNewWork":
        return <AddNewWork />;
      default:
        return <Profile />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/enter", { replace: true });
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1>
            Welcome to the World of Creativity, {user.firstName || "Author"}!
          </h1>
        </div>
        <button onClick={handleLogout} className="logout-button">
          🚪 Logout
        </button>
      </header>

      <div className="dashboard-main">
        <nav className="sidebar">
          <button onClick={() => setActiveSection("Profile")}>Profile</button>
          <button onClick={() => setActiveSection("PublishedWork")}>
            Published Work
          </button>
          <button onClick={() => setActiveSection("Feedback")}>Feedback</button>
          <button onClick={() => setActiveSection("AddNewWork")}>
            Add New Work
          </button>
        </nav>
        <div className="content">{renderSection()}</div>
      </div>
    </div>
  );
};
export default Author;
