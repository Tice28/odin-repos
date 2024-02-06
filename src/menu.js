import './style.css'
import removeContentChild from './display';

export default function displayMenu(){
    removeContentChild();
    console.log("Display menu");
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = `
    <h1>Menu</h1>
        <div class="menu-container">
          <h2>Drinks</h2>
          <div class="menu-item">Water: <span>Free</span></div>
          <div class="menu-item">Soda: <span>$1.75</span></div>
          <div class="menu-item">Juice: <span>$1:00</span></div>
          <h2>Food</h2>
          <div class="menu-item">Potato Soup: <span>$7:60</span></div>
          <div class="menu-item">French Toast: <span>$9.89</span></div>
          <div class="menu-item">Steak and Eggs: <span>$18.99</span></div>
          <h2>Dessert</h2>
          <div class="menu-item">Strawberry Shortcake: <span>$8:99</span></div>
          <div class="menu-item">Fried Icecream: <span>$5:99</span></div>
          <div class="menu-item">Apple Pie Slice: <span>$2.99</span></div>
        </div>
    `;

    content.appendChild(menu);

}