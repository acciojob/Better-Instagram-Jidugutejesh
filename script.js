let draggedDiv = null;

document.querySelectorAll(".image").forEach(div => {
  // Drag start
  div.addEventListener("dragstart", function () {
    draggedDiv = this;
    this.classList.add("selected");
  });

  // Drag end
  div.addEventListener("dragend", function () {
    this.classList.remove("selected");
  });

  // Allow drop
  div.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  // Swap background images
  div.addEventListener("drop", function (e) {
    e.preventDefault();
    if (draggedDiv !== this) {
      let temp = this.style.backgroundImage;
      this.style.backgroundImage = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = temp;
    }
  });
});
