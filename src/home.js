import homeimage from "./home-image.jpeg";

export function loadHome() {
  const content = document.getElementById("content");
  const header = document.createElement("div");
  header.textContent = "Wraps and Kabobs";
  content.appendChild(header);

  const image = document.createElement("img");
  image.src = homeimage;
  content.appendChild(image);
}
