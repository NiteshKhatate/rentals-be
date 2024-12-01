import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

router.get("/init", (req, res) => {
  res.json({ status: "OK" });
});

export default router;
