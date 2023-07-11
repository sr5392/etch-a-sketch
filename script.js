const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

const gridItem = document.createElement("div");
gridItem.classList.add("grid-item");

for (let i = 0; i < 256; i++) {
    gridContainer.appendChild(gridItem.cloneNode());
}

document.body.appendChild(gridContainer);