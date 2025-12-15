// Turn subtask type "canvas-container" into actual html canvas element to draw simple shapes on to predict python turtle results, include a color picker for the eight basic colours
function createCanvasElement(containerId) {
  const container = document.getElementById(containerId);
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 400;
  canvas.style.border = "1px solid black";
  container.appendChild(canvas);
  return canvas;
}

function createColorPicker(containerId) {
  const container = document.getElementById(containerId);
  const colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.value = "#000000";
  container.appendChild(colorPicker);
  return colorPicker;
}

// for each .canvas-container element, create a canvas and a color picker
function initializeCanvasElements() {
  const canvasContainers = document.querySelectorAll(".canvas-container");
  canvasContainers.forEach((container) => {
    const containerId = container.id;
    const canvas = createCanvasElement(containerId);
    const colorPicker = createColorPicker(containerId);

    const ctx = canvas.getContext("2d");

    // Draw on canvas when color picker value changes
    colorPicker.addEventListener("input", (event) => {
      const color = event.target.value;
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  });
}

// Initialize canvas elements when the window loads
window.addEventListener("load", initializeCanvasElements);
