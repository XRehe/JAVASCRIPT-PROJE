import express from "express";
import fetch from "node-fetch"; // Node 22+ kullanıyorsan bunu kaldırıp global fetch kullanabilirsin

const app = express();

// public klasörünü sun
app.use(express.static("public"));

// API endpoint
app.get("/api/quote", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: "Bir hata oluştu." });
  }
});

// Port ayarı: Ortam değişkeni varsa onu kullan, yoksa 8080
const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
