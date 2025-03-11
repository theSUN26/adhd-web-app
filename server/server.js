import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import timerRoutes from "./routes/timerRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

// Подключение к MongoDB
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI не найден! Проверь .env файл или переменные окружения.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ Ошибка подключения к MongoDB:", err);
    process.exit(1);
  }
};

connectDB();

// Базовый маршрут для проверки работы сервера
app.get("/", (req, res) => {
  res.send("Hello, server is running!");
});

// Подключение маршрутов
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/timer", timerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
