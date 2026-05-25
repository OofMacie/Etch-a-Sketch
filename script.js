 let canvas = document.querySelector('.canvas');
let reset = document.querySelector('.clear-canvas');

 

function css(element, styles) {
    for (let property in styles) {
        element.style[property] = styles[property];
    }
}

// block 1 - create the grid
for (let i = 0; i < 256; i++) {
    let squares = document.createElement('div')
    squares.classList.add('square')
    squares.addEventListener('click', function(e) {
        css(squares,{
            backgroundColor: "black"
        });
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
  

