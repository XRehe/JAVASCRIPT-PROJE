import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: "Bir hata oluştu." });
  }
}
