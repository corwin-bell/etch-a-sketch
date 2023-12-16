// create a 16 x 16 grid of divs inside the gridContainer using JS
// define the container to store the grid
const createGridButton = document.querySelector('button');
const gridContainer = document.querySelector('.gridContainer');
let gridSquareNum = 16;
let grid = document.querySelectorAll('.gridSquare');
// create initial grid squares
function createGrid (gridSquareNum) {
    for (let i = 1; i <= (gridSquareNum*gridSquareNum); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.className = 'gridSquare';
        gridContainer.appendChild(gridSquare);
    }
    // create gridSquare nodelist after creation
    grid = document.querySelectorAll('.gridSquare');
    let gridContainerSize = 960;
    let squareBorder = 1;
    let squareSize = gridContainerSize/gridSquareNum - (2*squareBorder);
    grid.forEach((gridSquare) => { 
        gridSquare.style.cssText = `height: ${squareSize}px; width: ${squareSize}px; `
    });    
}
createGrid(16);

function addSketchEffect () {
    // add sketching effect to grid
    grid.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.style.backgroundColor = 'gray';
        })
    });
}
addSketchEffect();

// create new grid with desired effects on click
// on button click, prompt user for gridSquareNum
    createGridButton.addEventListener('click', () => {
        // accept 100 or less grid squares as input
        let gridSquareNum = prompt('Enter number of desired grid squares (must be less than 100).',0);
        // removes existing grid
        grid.forEach(gridSquare => gridSquare.remove());
        // adds new grid that fills same space
        createGrid(gridSquareNum);
        addSketchEffect();
    });

