import express from "express";
import fetch from "node-fetch";

const app = express();

// public klasörünü sun
app.use(express.static("public"));

// API endpoint (local test)
app.get("/api/quote", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: "Bir hata oluştu." });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
