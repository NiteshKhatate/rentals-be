import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Express with TypeScript!");
});

export default app;
