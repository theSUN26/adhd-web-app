import express from "express";
const router = express.Router();

router.get("/timer", (req, res) => {
  res.send("Timer route is working!");
});

export default router;
