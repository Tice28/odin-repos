const square = document.querySelector('.square');
const container = document.querySelector('.box-container');
const btn = document.querySelector('.btn');
const colorInput = document.querySelector('input');
let grid = undefined;
let firstClick = true;
let size = 0;

function getGridSize(){
    if(!firstClick){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }

    let dimension = prompt("Enter a grid size (one number under 100)");

    if(dimension > 100){
        let dimension = prompt("Please enter a number less than 101");
    }
    let totalSpace = 360000;
    let totalSquares = dimension**2;
    size = Math.sqrt(totalSpace/totalSquares)/2 ;

    for(let i = 0; i<dimension;i++){
        for(let j = 0; j < dimension;j++){
            let d = document.createElement('div');
            d.setAttribute('class' , 'square');
            d.setAttribute("style", `padding: ${size}px`);
            d.setAttribute('flex', "1");
            container.appendChild(d);
        }
    }

    firstClick = false;
    
}



btn.addEventListener('click' , (e) => {
    getGridSize();

    grid = document.querySelectorAll('.square');

    grid.forEach((square) => {
        square.addEventListener('mouseover', () => {
            let color = colorInput.value;
            square.setAttribute("style", `background-color: ${color};` + `padding: ${size}px`);
        });
    });

    console.log(grid);
})





