import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

router.get("/:userId/:date", async (req, res) => {
  const { userId, date } = req.params;
  try {
    const tasks = await Task.find({ userId, date });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

export default router;
