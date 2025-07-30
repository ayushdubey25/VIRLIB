import express from "express";
import Book from "../models/Book.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { title, genre, pages, description, cover, pdf, authorId } = req.body;

    if (!authorId) {
      return res.status(400).json({ msg: "Author ID is required." });
    }

    const author = await User.findById(authorId);
    if (!author || author.role !== "author") {
      return res
        .status(403)
        .json({ msg: "You must be logged in as author to publish a book." });
    }

    const newBook = await Book.create({
      title,
      genre,
      pages,
      description,
      cover,
      pdf, // ⬅️ Save base64-encoded PDF
      authorId,
    });

    await User.findByIdAndUpdate(authorId, {
      $inc: { booksPublished: 1 },
    });

    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ msg: "Error adding book", error: err.message });
  }
});

// GET /api/books/author/:authorId
router.get("/author/:authorId", async (req, res) => {
  try {
    const books = await Book.find({ authorId: req.params.authorId });
    res.json(books);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch books", error: err.message });
  }
});

// DELETE /api/books/:bookId
router.delete("/:bookId", async (req, res) => {
  try {
    const bookId = req.params.bookId;

    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ msg: "Book not found" });

    const authorId = book.authorId;

    // Delete book
    await Book.findByIdAndDelete(bookId);

    // Decrease author's book count
    await User.findByIdAndUpdate(authorId, { $inc: { booksPublished: -1 } });

    res.json({ msg: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete book", error: err.message });
  }
});
// books.routes.js
router.get("/recommended", async (req, res) => {
  try {
    const books = await Book.find({}).populate(
      "authorId",
      "firstName lastName"
    );

    const booksWithAuthorData = books.map((book) => ({
      ...book.toObject(),
      authorName: `${book.authorId.firstName} ${book.authorId.lastName}`,
      authorId: book.authorId._id, // ensure populated
    }));

    res.json(booksWithAuthorData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

export default router;
