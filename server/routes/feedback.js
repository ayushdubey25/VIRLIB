// routes/feedback.js
import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const user = await User.findById(userId);
    if (!user || user.role !== "author") {
      return res.status(403).json({ msg: "Unauthorized" });
    }

    res.json(user.feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Could not fetch feedback" });
  }
});

export default router;
