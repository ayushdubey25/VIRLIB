import express from "express";
import axios from "axios";

const router = express.Router();

// Proxy to OpenLibrary for genre books
router.get("/:genre", async (req, res) => {
  const { genre } = req.params;

  try {
    const openLibraryURL = `https://openlibrary.org/subjects/${genre.toLowerCase()}.json?limit=50`;

    const response = await axios.get(openLibraryURL);

    res.json(response.data); // Send data to frontend
  } catch (err) {
    console.error("Error fetching genre:", err.message);
    res.status(500).json({ error: "Failed to fetch genre books" });
  }
});

export default router;
