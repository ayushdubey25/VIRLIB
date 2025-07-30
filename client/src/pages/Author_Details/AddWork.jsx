import React, { useState } from "react";
import Select from "react-select";
import "../../Styling/AddWork.css";
const genreOptions = [
  "mythology",
  "fantasy",
  "romance",
  "science",
  "technology",
  "math",
  "engineering",
  "medical",
  "ai",
  "ml",
  "law",
  "philosophy",
  "economics",
  "history",
  "research",
  "environment",
  "psychology",
  "education",
  "tragedy",
  "drama",
  "memoir",
  "biography",
  "self-help",
  "inspiration",
  "relationships",
  "mental health",
  "faith",
  "picture books",
  "early readers",
  "young adult",
  "middle grade",
  "adventure",
  "fairy tales",
  "fables",
  "graphic novels",
  "comics",
  "poetry",
  "music",
  "art",
  "photography",
  "calligraphy",
  "cooking",
  "diy",
  "design",
  "style",
].map((g) => ({ label: g, value: g }));
const AddWork = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    pages: "",
    description: "",
    cover: null,
    pdf: null,
  });
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const handleGenreChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (opt) => opt.value
    );
    if (selectedOptions.length <= 3) {
      setFormData((prev) => ({ ...prev, genre: selectedOptions }));
    } else {
      alert("You can select up to 3 genres only.");
    }
  };

  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.id) {
      alert("You must be logged in as author to publish a book.");
      return;
    }
    if (!formData.cover || !formData.pdf) {
      alert("Please upload both cover and PDF file.");
      return;
    }

    const base64Cover = await toBase64(formData.cover);
    const base64Pdf = await toBase64(formData.pdf);

    const payload = {
      title: formData.title,
      genre: selectedGenres.map((g) => g.value).join(", "),
      pages: formData.pages,
      description: formData.description,
      cover: base64Cover,
      pdf: base64Pdf, // ✅ include the PDF
      authorId: user.id,
    };

    const res = await fetch("http://localhost:5050/api/books/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (res.ok) {
      alert("📚 Book published successfully!");
    } else {
      alert("❌ Failed: " + (data.msg || JSON.stringify(data)));
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label>
          <span>Book Title:</span>
          <input type="text" name="title" required onChange={handleChange} />
        </label>

        <label>
          <span>Select up to 3 Genres:</span>
          <div className="scroll">
            <Select
              isMulti
              options={genreOptions}
              value={selectedGenres}
              onChange={(selected) => {
                if (selected.length <= 3) setSelectedGenres(selected);
              }}
              placeholder="Click to select genres..."
              closeMenuOnSelect={false}
              className="genre-select"
            />
          </div>
        </label>

        <label>
          <span>Number of Pages:</span>
          <input type="number" name="pages" required onChange={handleChange} />
        </label>

        <label>
          <span>Description:</span>
          <textarea name="description" required onChange={handleChange} />
        </label>

        <label>
          <span>Cover Page:</span>
          <input
            type="file"
            name="cover"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Upload PDF:</span>
          <input
            type="file"
            name="pdf"
            accept="application/pdf"
            onChange={handleChange}
          />
        </label>

        <button type="submit">📘 Add Book</button>
      </form>
    </div>
  );
};

export default AddWork;
