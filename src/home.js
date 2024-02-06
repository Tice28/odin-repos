    import './style.css';
    import removeContentChild from './display';

    export default function displayMain(){
      removeContentChild();
        console.log("display main")
        const content = document.getElementById("content");
        const hero = document.createElement('div');
        hero.classList.add("hero");
        hero.innerHTML = `<h1>Trisston's Tavern</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
          placerat duis ultricies lacus sed turpis. Mi tempus imperdiet nulla
          malesuada. Mus mauris vitae ultricies leo. Porttitor eget dolor morbi
          non arcu. Varius sit amet mattis vulputate enim nulla aliquet. Dolor
          sed viverra ipsum nunc aliquet. Et tortor consequat id porta nibh
          venenatis cras. Nibh cras pulvinar mattis nunc sed blandit libero. Ac
          feugiat sed lectus vestibulum. Amet nisl purus in mollis nunc sed. At
          augue eget arcu dictum varius duis at. Pharetra vel turpis nunc eget
          lorem dolor.
        </p>
        <ul class="business-hours">
          <li>Monday-Friday: 6AM-8PM</li>
          <li>Saturday & Sunday: 12PM-6PM</li>
          <li>Holidays: Closed</li>
        </ul>`;
        content.appendChild(hero);

    }