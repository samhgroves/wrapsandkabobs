import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";
import "./style.scss";

const container = document.querySelector("#container");

function tabs() {
  const content = document.getElementById("content");
  const navBar = document.getElementById("nav");
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", function () {
    removeAllChildNodes(content);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", function () {
    removeAllChildNodes(content);
    loadMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", function () {
    removeAllChildNodes(content);
    loadContact();
  });

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

tabs();
loadHome();
