const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let hexc = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    hexc += hex[random];
  }
  document.querySelector("main").style.backgroundColor = hexc;
  document.querySelector(".color").innerHTML = hexc;
});
