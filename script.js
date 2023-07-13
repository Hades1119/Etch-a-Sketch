let boxes = document.querySelectorAll(".grid-rw")
const grid = document.querySelector(".grid")

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

const selectColor = (event) => {

    const selectedColor = event.target.value;

    grid.addEventListener("dragstart", (event) => {
        event.preventDefault();
    });
    

    grid.addEventListener("mousedown", () => {
        event.preventDefault();

        boxes.forEach(box => {
            box.addEventListener("mousemove", (event) => {
                event.preventDefault();
                if (event.buttons == 1) {
                    box.style.backgroundColor = selectedColor;
                }
            })
        });
    })

    grid.addEventListener("mouseup", () => {
        boxes.forEach(box => {
            box.removeEventListener("mousemove", () => {})
        });
    })

    
}

const erasorModeButtonHandler = (event) => {
    grid.addEventListener("dragstart", (event) => {
        event.preventDefault();
    });

    grid.addEventListener("mousedown", () => {
        event.preventDefault();

        boxes.forEach(box => {
            box.addEventListener("mousemove", (event) => {
                event.preventDefault();
                if (event.buttons == 1) {
                    box.style.backgroundColor = "";
                }
            })
        });
    })

    grid.addEventListener("mouseup", () => {
        boxes.forEach(box => {
            box.removeEventListener("mousemove", () => {})
        });
    })
}

const gamerModeButtonHandler = (event) => {

    grid.addEventListener("dragstart", (event) => {
        event.preventDefault();
    });
    

    grid.addEventListener("mousedown", () => {
        event.preventDefault();

        boxes.forEach(box => {
            box.addEventListener("mousemove", (event) => {
                event.preventDefault();
                if (event.buttons == 1) {
                    box.style.backgroundColor = random_hex_color_code();
                }
            })
        });
    })

    grid.addEventListener("mouseup", () => {
        boxes.forEach(box => {
            box.removeEventListener("mousemove", () => {})
        });
    })

}

const changeGridSizeHandler = () => {
    let newSize = parseInt(prompt("New size? EX: enter 15 for 15x15 grid"))

    while (newSize > 100) {
        newSize = parseInt(prompt("Please select a number smaller than or equal to 100"))
    }

    let newGrid = ''
    for (let i = 0; i < newSize; i++) {
        newGrid += "<div class='grid-col'>"
        for (let x = 0; x < newSize; x++) {
            newGrid += "<div class='grid-rw'></div>"
        }
        newGrid += '</div>'
    }

    grid.innerHTML = newGrid;
    boxes = document.querySelectorAll(".grid-rw")
};

const clearGridHandler = () => {

    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    })
}

const pageLoadedHandler = () => {

    let newSize = 16
    let newGrid = ''
    for (let i = 0; i < newSize; i++) {
        newGrid += "<div class='grid-col'>"
        for (let x = 0; x < newSize; x++) {
            newGrid += "<div class='grid-rw'></div>"
        }
        newGrid += '</div>'
    }

    grid.innerHTML = newGrid;
    boxes = document.querySelectorAll(".grid-rw")

    const event = new Event("change")
    colorPicker.dispatchEvent(event);
}

window.addEventListener("DOMContentLoaded", pageLoadedHandler);


const gamerModeColorBtn = document.querySelector(".rgb-btn")
gamerModeColorBtn.addEventListener("click", gamerModeButtonHandler);


const gridSizeBtn = document.querySelector(".change-size-btn")
gridSizeBtn.addEventListener("click", changeGridSizeHandler);

const erasorBtn = document.querySelector(".erasorBtn");
erasorBtn.addEventListener("click", erasorModeButtonHandler);

const colorPicker = document.querySelector("#color-picker")
colorPicker.addEventListener("change", selectColor);

const clearGrid = document.querySelector(".clear-btn")
clearGrid.addEventListener("click", clearGridHandler);
