// create a 16 x 16 grid of divs inside the gridContainer using JS
// define the container to store the grid
const createGridButton = document.querySelector('button');
const gridContainer = document.querySelector('.gridContainer');

// create initial grid squares
for (let i = 1; i <= (16*16); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.className = 'gridSquare';
    gridContainer.appendChild(gridSquare);
}

// create gridSquare nodelist after creation
let grid = document.querySelectorAll('.gridSquare');

// add sketching effect to grid
grid.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.backgroundColor = 'gray';
    })
});

// create new grid with desired effects on click
// on button click, prompt user for gridSquareNum
    createGridButton.addEventListener('click', () => {
        // accept 100 or less grid squares as input
        let gridSquareNum = prompt('Enter number of desired grid squares (must be less than 100).',0);
        // removes existing grid
        grid.forEach(gridSquare => gridSquare.remove());
        // adds new grid that fills same space
        for (let i = 1; i <= (gridSquareNum*gridSquareNum); i++) {
            gridSquare = document.createElement('div');
            gridSquare.className = 'gridSquare';
            gridContainer.appendChild(gridSquare);
        }
        grid = document.querySelectorAll('.gridSquare');
        grid.forEach((gridSquare) => {
            gridSquare.addEventListener('mouseenter', () => {
                gridSquare.style.backgroundColor = 'gray';
            })
        });
    });

