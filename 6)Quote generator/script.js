async function getQuote() {
  try {
    const res = await fetch("/quote");
    const data = await res.json();
    document.getElementById("quote").innerText = `"${data.q}" — ${data.a}`;
  } catch (err) {
    document.getElementById("quote").innerText = "Bir hata oluştu!";
  }
}

document.getElementById("generateBtn").addEventListener("click", getQuote);
