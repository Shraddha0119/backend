import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// ✅ ROOT ROUTE (FOR BROWSER)
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

app.use("/api", userRoutes);

const PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
