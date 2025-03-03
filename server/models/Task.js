import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  date: { type: String, required: true }, // Дата для календаря
  completed: { type: Boolean, default: false },
});

export default mongoose.model("Task", TaskSchema);
