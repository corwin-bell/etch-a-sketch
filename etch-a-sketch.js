// create a 16 x 16 grid of divs inside the gridContainer using JS
// define the container to store the grid
let gridContainer = document.querySelector('.gridContainer');

// loop creation of squares
for (let i = 1; i <= (16*16); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.className = 'gridSquare';
    gridContainer.appendChild(gridSquare);
}
