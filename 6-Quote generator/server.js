import express from "express";

const app = express();

app.use(express.static("."));

app.get("/quote", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: "Bir hata oluştu." });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
