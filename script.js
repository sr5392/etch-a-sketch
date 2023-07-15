let mouseHold = false;
document.addEventListener("mousedown", mouseAction);
document.addEventListener("mouseup", mouseAction);

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
   
    for (let i = 0; i < gridSize**2; i++) {
        let tmpGridItem = gridItem.cloneNode();
        tmpGridItem.addEventListener("mouseover", updateGridItem);
        tmpGridItem.addEventListener("mousedown", updateGridItem)
        tmpGridItem.addEventListener("dragstart", preventDragging);

        gridContainer.appendChild(tmpGridItem);
    }

    pGridSize.innerText = gridSize;
}

function mouseAction(event) {
    if (event.type == "mousedown") {
        mouseHold = true;
        return;
    }

    mouseHold = false;
}

function updateGridItem(event) {
    if (event.type == "mouseover") {
        if (mouseHold) {
            this.style.backgroundColor = "black";
        }

        return;
    }
    
    this.style.backgroundColor = "black";     
}

function preventDragging(event) {
    event.preventDefault();
}

updateGrid();

