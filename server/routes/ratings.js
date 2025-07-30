import express from "express";
import User from "../models/User.js";
import Book from "../models/Book.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { bookId, rating, authorId } = req.body;
  console.log("Received rating request:", req.body); // ✅

  try {
    const author = await User.findById(authorId);
    if (!author) {
      console.log("Author not found:", authorId); // ✅
      return res.status(404).json({ error: "Author not found" });
    }

    const newFeedbackCount = author.feedbackCount + 1;
    const newTotalRating = author.averageRating * author.feedbackCount + rating;
    const newAverageRating = newTotalRating / newFeedbackCount;

    author.feedbackCount = newFeedbackCount;
    author.averageRating = parseFloat(newAverageRating.toFixed(1));
    await author.save();
    console.log("Author updated:", author); // ✅

    await Book.findByIdAndUpdate(bookId, { $push: { ratings: rating } });
    console.log("Book updated with rating:", rating); // ✅

    res.status(200).json({ message: "Rating submitted" });
  } catch (error) {
    console.error("Rating error:", error); // ✅
    res.status(500).json({ error: "Rating failed" });
  }
});

export default router;
