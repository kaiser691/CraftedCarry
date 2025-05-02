let canvas;
let currentColor;
let currentTool = 'brush';
let strokeWeightValue;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - document.getElementById('toolbar').offsetHeight);
  canvas.parent('canvasContainer'); // Attach the canvas to the container
  background(255); // Start with a white background
  currentColor = color(0); // Default color is black
  strokeWeightValue = 5;

  // Get references to the toolbar elements
  const brushButton = select('#brush');
  const eraserButton = select('#eraser');
  const colorPicker = select('#colorPicker');
  const weightInput = select('#strokeWeight');
  const clearButton = select('#clearCanvas');

  // Add event listeners to the toolbar buttons
  brushButton.mousePressed(() => currentTool = 'brush');
  eraserButton.mousePressed(() => currentTool = 'eraser');
  colorPicker.input(() => currentColor = color(colorPicker.value()));
  weightInput.input(() => strokeWeightValue = parseInt(weightInput.value()));
  clearButton.mousePressed(() => background(255));
}

function draw() {
  if (mouseIsPressed) {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      strokeWeight(strokeWeightValue);
      if (currentTool === 'brush') {
        stroke(currentColor);
        line(pmouseX, pmouseY, mouseX, mouseY);
      } else if (currentTool === 'eraser') {
        stroke(255); // Set stroke to white for erasing
        line(pmouseX, pmouseY, mouseX, mouseY);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - document.getElementById('toolbar').offsetHeight);
}