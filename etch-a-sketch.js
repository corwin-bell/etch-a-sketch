// create a 16 x 16 grid of divs inside the gridContainer using JS

// DEFINE CONSTANTS AND VARIABLES
const createGridButton = document.querySelector('button');
const gridContainer = document.querySelector('.gridContainer');
let gridContainerSize = 960;
let gridSquareNum = 16;
let squareBorder = 1;
let grid = document.querySelectorAll('.gridSquare');

// DEFINE FUNCTIONS
function createGrid (gridSquareNum) {
    for (let i = 1; i <= (gridSquareNum*gridSquareNum); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.className = 'gridSquare';
        gridContainer.appendChild(gridSquare);
    }
    grid = document.querySelectorAll('.gridSquare');
    let squareSize = gridContainerSize/gridSquareNum - (2*squareBorder);
    grid.forEach((gridSquare) => { 
        gridSquare.style.cssText = `height: ${squareSize}px; width: ${squareSize}px; `
    });    
}

function addSketchEffect () {
    // add sketching effect to grid
    grid.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.style.backgroundColor = 'gray';
        })
    });
}

// CALL FUNCTIONS
createGrid(16);
addSketchEffect();

// on button click, prompt user for gridSquareNum
    createGridButton.addEventListener('click', () => {
        // accept 100 or less grid squares as input
        while (true) {
            gridSquareNum = prompt(`Enter number of desired grid squares height/width (must be between 1 and 100).`,0);
            if (gridSquareNum <= 100 && gridSquareNum > 0) {
                break;
            }
            else {
                alert('please enter a valid number');
            }
        }
        // removes existing grid
        grid.forEach(gridSquare => gridSquare.remove());
        // adds new grid that fills same space
        createGrid(gridSquareNum);
        addSketchEffect();
    });

