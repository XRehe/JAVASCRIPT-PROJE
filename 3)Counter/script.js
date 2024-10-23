let sayi = 0;
let sk = document.getElementById("sayi");
sk.innerHTML = sayi;
document.getElementById("azalt").addEventListener("click", () => {
  if (sayi < 1) {
    sayi -= 1;
    sk.innerHTML = sayi;
    sk.style.color = "red";
  } else if (sayi > 1) {
    sayi -= 1;
    sk.innerHTML = sayi;
  } else {
    sk.style = "black";
    sayi -= 1;
    sk.innerHTML = sayi;
  }
});
document.getElementById("arttir").addEventListener("click", () => {
  if (sayi > -1) {
    sayi += 1;
    sk.innerHTML = sayi;
    sk.style.color = "green";
  } else if (sayi < 1) {
    sayi += 1;
    sk.innerHTML = sayi;
    if (sayi == 0) {
      sk.style.color = "black";
    }
  }
});
document.getElementById("sifirla").addEventListener("click", () => {
  sayi = 0;
  sk.innerHTML = 0;
  sk.style.color = "black";
});
