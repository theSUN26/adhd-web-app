import mongoose from "mongoose";

const timerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  duration: { type: Number, required: true },
  completed: { type: Boolean, default: false },
});

const Timer = mongoose.model("Timer", timerSchema);
export default Timer;
