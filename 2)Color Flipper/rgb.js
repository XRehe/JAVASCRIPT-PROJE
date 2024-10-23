const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const random1 = Math.floor(Math.random() * 256);
  const random2 = Math.floor(Math.random() * 256);
  const random3 = Math.floor(Math.random() * 256);
  let rgbc = `RGB(${random1},${random2},${random3})`;
  document.querySelector("main").style.backgroundColor = rgbc;
  document.querySelector(".color").innerHTML = rgbc;
});
