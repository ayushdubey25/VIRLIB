import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js"; // Add this if not already
import genreRoutes from "./routes/genreProxy.js";
import openLibraryGenre from "./routes/openLibraryGenre.js";
import ratingsRoutes from "./routes/ratings.js";
import feedbackRoutes from "./routes/feedback.js";
import commentsRoutes from "./routes/comments.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: "https://virlib-frontend.onrender.com",
  credentials: true,
}));


// ⬇️ Increase payload size limit to 50MB
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/openlibrary/genre", openLibraryGenre);
app.use("/api/genres", genreRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes); // Mount book routes
app.use("/api/ratings", ratingsRoutes); // ✅
app.use("/api/feedback", feedbackRoutes);
app.use("/api/comments", commentsRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
