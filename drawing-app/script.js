const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colourEl = document.getElementById("colour");
const ctx = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let colour = "black";

canvas.addEventListener('mousedown', () => {
    isPressed = true;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {

    if(isPressed){
        const x = e.offsetX;
        const y = e.offsetY;

        drawCircle(x, y);
    }
    
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = colour;
    ctx.fill();
}

//drawCircle(50, 50);

increaseBtn.addEventListener('click', () => {
    size += 5;

    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if(size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

colourEl.addEventListener('change', (e) => {
    colour = e.target.value;
});

function updateSizeOnScreen() {
    sizeEl.innerText = size;
};

//function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle(x++, y);

//     requestAnimationFrame(draw);
// }

// draw();