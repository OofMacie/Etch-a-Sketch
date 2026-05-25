const canvas = document.querySelector('.canvas');

let reset = document.querySelector('.clear-canvas');
const history = [];
let isDrawing = false;



function css(element, styles, updateAll) {
    for (let property in styles) {
        element.style[property] = styles[property];
    }
}

// block 1 - create the grid
for (let i = 0; i < 256; i++) {
    let squares = document.createElement('div')
    squares.classList.add('square')
    
const defaultColor = "#000000";
const colorPicker = document.querySelector(".color");
colorPicker.value = defaultColor;
     squares.addEventListener('mousedown', function() {
        isDrawing = true; 
     })
     squares.addEventListener('mouseup', function() {
        isDrawing = false;
     })

squares.addEventListener('mousemove', function() {
    if (isDrawing) {
        if (squares.style.backgroundColor === "") {
            history.push(squares)
        }
        css(squares, { backgroundColor: colorPicker.value })

    }
})
    canvas.appendChild(squares)
}





// block 2 - reset button
reset.addEventListener('click', function() {
    const allSquares = document.querySelectorAll('.square')
    for (let square of allSquares) {
        css(square, {
            backgroundColor: ""
        });
    }
})


document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "z") {
        const lastSquare = history.pop()  
        if (lastSquare) {
            css(lastSquare, { backgroundColor: "" })
        }
    }
})

  

