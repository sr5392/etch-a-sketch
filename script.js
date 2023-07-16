let mouseHold = false;

document.addEventListener("mousedown", mouseAction);
document.addEventListener("mouseup", mouseAction);

const colorPicker = document.querySelector("#color-picker");

const slider = document.querySelector("#slider");
slider.addEventListener("input", updateGrid);

const pGridSize = document.querySelector("#grid-size");
const gridContainer = document.querySelector("#grid-container");

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");
gridItem.style.backgroundColor = "white";

const buttonResetGrid = document.querySelector("#button-reset-grid");
buttonResetGrid.addEventListener("click", resetGrid);

function updateGrid() {
    gridContainer.innerHTML = "";

    const gridSize = slider.value;
    const gridItemSize = 64 / gridSize;

    gridItem.style.height = gridItemSize + "vmin";
    gridItem.style.width = gridItemSize + "vmin";
   
    for (let i = 0; i < gridSize**2; i++) {
        let tmpGridItem = gridItem.cloneNode();
        tmpGridItem.addEventListener("mouseover", updateGridItem);
        tmpGridItem.addEventListener("mousedown", updateGridItem)
        tmpGridItem.addEventListener("dragstart", preventDragging);

        gridContainer.appendChild(tmpGridItem);
    }
    pGridSize.innerText = gridSize;
}

function resetGrid() {
    const gridItems = gridContainer.childNodes;
    for (const gridItem of gridItems) {
        gridItem.style.backgroundColor = "white";
    }
}

function mouseAction(event) {
    if (event.type == "mousedown") {
        mouseHold = true;
        return;
    }
    mouseHold = false;
}

function updateGridItem(event) {
    const color = colorPicker.value;

    if (event.type == "mouseover") {
        if (mouseHold) {
            this.style.backgroundColor = color;
        }
        return;
    }
    this.style.backgroundColor = color;     
}

function preventDragging(event) {
    event.preventDefault();
}

updateGrid();

