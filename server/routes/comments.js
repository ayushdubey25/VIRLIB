import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Book from "../models/Book.js"; // ✅ import Book model

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { bookId, comment, authorId } = req.body;

    // ✅ Fetch commenter info
    const user = await User.findById(userId);
    if (!user)
      return res.status(404).json({ msg: "Commenting user not found" });

    // ✅ Fetch book info to get book title
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ msg: "Book not found" });

    const author = await User.findById(authorId);
    if (!author) return res.status(404).json({ msg: "Author not found" });

    // ✅ Push correct book title in feedback
    author.feedbacks.push({
      bookTitle: book.title, // 🔥 store actual book title
      comment,
      commenterId: userId,
      commenterName: user.username,
    });

    author.feedbackCount++;
    await author.save();

    res.json({ msg: "Comment added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Could not post comment" });
  }
});

export default router;
