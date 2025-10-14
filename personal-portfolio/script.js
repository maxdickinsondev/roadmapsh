const element = document.getElementById("copyrights");
const year = new Date().getFullYear();
element.innerText = element.innerText + " " + year;

const html = document.documentElement;
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  const current = html.dataset.theme;
  const next = current === "light" ? "dark" : "light";
  btn.innerText = next === "light" ? "Dark Mode" : "Light Mode";
  html.dataset.theme = next;
});
