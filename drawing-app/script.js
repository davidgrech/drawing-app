const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colourEl = document.getElementById("colour");
const ctx = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let colour = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {

    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
    
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = colour;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = colour;
    ctx.lineWidth = size;
    ctx.stroke();
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