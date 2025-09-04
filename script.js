const boxes = document.querySelectorAll(".box");
let draggedBox = null;

boxes.forEach(box => {
  box.addEventListener("dragstart", e => {
    draggedBox = box;
    e.dataTransfer.effectAllowed = "move";

    const ghost = document.createElement("div");
    ghost.style.width = "120px";
    ghost.style.height = "250px";
    ghost.style.backgroundImage = box.style.backgroundImage;
    ghost.style.backgroundSize = "cover";
    ghost.style.backgroundPosition = "center";
    ghost.style.borderRadius = "10px";
    ghost.style.opacity = "0.8";

    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 60, 125); 
    setTimeout(() => document.body.removeChild(ghost), 0);
  });

  box.addEventListener("dragover", e => {
    e.preventDefault();
  });

  box.addEventListener("drop", () => {
    if (draggedBox && draggedBox !== box) {
      let tempBg = box.style.backgroundImage;
      box.style.backgroundImage = draggedBox.style.backgroundImage;
      draggedBox.style.backgroundImage = tempBg;

      let tempText = box.textContent;
      box.textContent = draggedBox.textContent;
      draggedBox.textContent = tempText;
    }
  });
});
