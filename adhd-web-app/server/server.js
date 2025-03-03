import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import timerRoutes from "./routes/timerRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Подключение маршрутов
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/timer", timerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
