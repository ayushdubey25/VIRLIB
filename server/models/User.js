// models/User.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  bookTitle: String,
  comment: String,
  commenterId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  commenterName: String,
  date: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String, enum: ["reader", "author", "admin"] },
  firstName: String,
  lastName: String,
  profileImage: String,
  booksPublished: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
  feedbackCount: { type: Number, default: 0 },
  feedbacks: [feedbackSchema], // ⬅️ new field to store feedbacks
});

export default mongoose.model("User", userSchema);
