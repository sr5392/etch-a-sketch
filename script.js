let mouseHold = false;

document.addEventListener("mousedown", mouseAction);
document.addEventListener("mouseup", mouseAction);

const radioRandomColor = document.querySelector("#radio-random-color");
const colorPicker = document.querySelector("#color-picker");

const slider = document.querySelector("#slider-grid-size");
slider.addEventListener("input", updateGrid);

const labelSliderGridSize = document.querySelector("label[for=slider-grid-size");
const gridContainer = document.querySelector("#grid-container");

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");
gridItem.style.backgroundColor = "white";

const checkboxShowGrid = document.querySelector("#checkbox-show-grid");
checkboxShowGrid.addEventListener("change", toggleShowGrid);

const buttonResetGrid = document.querySelector("#button-reset-grid");
buttonResetGrid.addEventListener("click", resetGrid);

function updateGrid() {
    gridContainer.innerHTML = "";

    const gridSize = slider.value;
    const gridItemSize = 64 / gridSize;

    gridItem.style.height = gridItemSize + "vmin";
    gridItem.style.width = gridItemSize + "vmin";
   
    if (checkboxShowGrid.checked) {
        gridItem.classList.add("show-border");
    }

    for (let i = 0; i < gridSize**2; i++) {
        let tmpGridItem = gridItem.cloneNode();
        tmpGridItem.addEventListener("mouseover", updateGridItem);
        tmpGridItem.addEventListener("mousedown", updateGridItem)
        tmpGridItem.addEventListener("dragstart", preventDragging);

        gridContainer.appendChild(tmpGridItem);
    }
    labelSliderGridSize.innerText = `Grid size: ${gridSize}`;
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
    if (event.type == "mouseover" && !mouseHold) {
        return;
    }

    let color = colorPicker.value;
    if(radioRandomColor.checked) {
        color = getRandomColor();
    } 
    this.style.backgroundColor = color;     
}

function preventDragging(event) {
    event.preventDefault();
}

function getRandomColor() {
    const r = getRandomNumber(0, 255);
    const g = getRandomNumber(0, 255);
    const b = getRandomNumber(0, 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleShowGrid () {
    const gridItems = gridContainer.childNodes;
    for (const gridItem of gridItems) {
        gridItem.classList.toggle("show-border");
    }
}

updateGrid();

