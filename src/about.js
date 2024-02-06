import './style.css';
import removeContentChild from './display';

export default function displayAbout(){
  removeContentChild();
    console.log("display about")
    const content = document.getElementById("content");
    const about = document.createElement('div');
    about.classList.add("about-us");
    about.innerHTML = `
    <h1>About Us</h1>
    <p>
      We are a small, family owned, restaurant that has been making simple,
      yet perfected dishes for over 10 years! We look forward to serving you
      and your family any chance we get. The menu may be small, but the
      flavors are huge.
    </p>
    <h2>Meet the team</h2>
    <div class="employee-container">
      <div class="employee">
        <div>Chef: John Doe</div>
        <img src="../src/Images/user-solid.svg" />
      </div>
      <div class="employee">
        <div>Waitress: Jane Doe</div>
        <img src="../src/Images/user-solid.svg" />
      </div>
      <div class="employee">
        <div>Owner: Trisston Icenhower</div>
        <img src="../src/Images/user-solid.svg" />
      </div>
    </div>`;
    content.appendChild(about);

}