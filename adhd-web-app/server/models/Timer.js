import mongoose from "mongoose";

const TimerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  timeLeft: { type: Number, required: true },
});

export default mongoose.model("Timer", TimerSchema);
