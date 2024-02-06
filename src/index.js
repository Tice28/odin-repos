import displayMain from './home.js';
import displayMenu from './menu.js';
import displayAbout from './about.js';

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click" , displayMain);
menuButton.addEventListener("click", displayMenu);
aboutButton.addEventListener("click", displayAbout);