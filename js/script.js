function createGrid(gridSize) {
    // Create blank grid
    let gridDiv = document.createElement("div");
    gridDiv.classList.toggle("grid");
    
    // Create i rows to complete the grid
    for (let i = 0; i < gridSize; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.toggle("row");
        gridDiv.appendChild(rowDiv);

        // Create j elements to complete a row
        for (let j = 0; j < gridSize; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.style["background-color"] = "#D90166";
            squareDiv.style["opacity"] = "0";

            // Change color on hover
            squareDiv.addEventListener("mouseenter", () => {
                let currentOpacity = Number(squareDiv.style["opacity"]);
                squareDiv.style["opacity"] = Math.min(currentOpacity + 0.1, 1)
            });
            rowDiv.appendChild(squareDiv);
        }
    }
    bottomDiv.appendChild(gridDiv);
}

const GRID_SIZE = 16;   // Initial size
let bottomDiv = document.querySelector(".bottom");
let numberInput = document.querySelector("input");
let changeButton = document.querySelector("button");
let squareDivs = document.querySelectorAll(".square");

changeButton.addEventListener("click", () => {
    let gridDiv = document.querySelector(".grid");
    let input = numberInput.value;

    // Reset grid but with the same dimensions
    if (input === ""){
        let numOfChildren = gridDiv.children.length;
        input = numOfChildren;
    }

    // Replace grid with the new dimensions
    if (input > 0 && input <= 100) {
        gridDiv.remove();
        createGrid(Math.floor(input));
        numberInput.value = "";
        numberInput.focus();
    } else {
        console.error("Invalid input. Input must be between 1 and 100.");
    }
});

createGrid(GRID_SIZE);



