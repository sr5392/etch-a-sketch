const slider = document.querySelector("#slider");
slider.addEventListener("input", updateGrid);

const pGridSize = document.querySelector("#grid-size");
const gridContainer = document.querySelector("#grid-container");

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

function updateGrid() {
    gridContainer.innerHTML = "";

    const gridSize = slider.value;
    const gridItemSize = 64 / gridSize;

    gridItem.style.height = gridItemSize + "vmin";
    gridItem.style.width = gridItemSize + "vmin";
   
    for(let i = 0; i < gridSize**2; i++) {
        gridContainer.appendChild(gridItem.cloneNode());
    }
}

updateGrid();

