import express from "express";
import axios from "axios";
const router = express.Router();

// Existing route: full list for GenrePage
router.get("/:genre", async (req, res) => {
  const genre = req.params.genre.toLowerCase();

  try {
    const url = `https://openlibrary.org/search.json?subject=${genre}&has_fulltext=true&limit=15`;
    const { data } = await axios.get(url);

    const formattedBooks = data.docs.map((book) => ({
      title: book.title,
      authors: book.author_name?.map((name) => ({ name })),
      first_publish_year: book.first_publish_year,
      read_url: book.ia
        ? `https://archive.org/download/${book.ia[0]}/${book.ia[0]}.pdf`
        : null,
    }));

    res.json(formattedBooks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed fetching readable genre books" });
  }
});
router.get("/series/:genre", async (req, res) => {
  const genre = req.params.genre.toLowerCase();

  try {
    const url = `https://openlibrary.org/search.json?subject=${genre}&has_fulltext=true&limit=20`;
    const { data } = await axios.get(url);

    // For now treat works as series items to display under Series section
    const formattedSeries = data.docs.map((item) => ({
      title: item.title,
      authors: item.author_name?.map((name) => ({ name })) || [],
      first_publish_year: item.first_publish_year,
      read_url: item.ia
        ? `https://archive.org/download/${item.ia[0]}/${item.ia[0]}.pdf`
        : null,
    }));

    res.json(formattedSeries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed fetching series" });
  }
});

// ✅ New route: minimal top 5 books for Chatbot with English filter
router.get("/chatbot/:genre", async (req, res) => {
  const genre = req.params.genre.toLowerCase();

  try {
    const url = `https://openlibrary.org/search.json?subject=${genre}&has_fulltext=true&language=eng&limit=10`;
    const { data } = await axios.get(url);

    const books = data.docs
      .filter((book) => book.title && book.title.match(/^[\x00-\x7F]+$/))
      .slice(0, 5)
      .map((book) => ({
        title: book.title,
        author_name: book.author_name ? book.author_name.join(", ") : "Unknown",
        first_publish_year: book.first_publish_year,
      }));

    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed fetching books for chatbot" });
  }
});

export default router;
