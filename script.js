// Assign drag IDs to match Cypress expectations
document.querySelectorAll(".image").forEach((div, index) => {
  div.setAttribute("id", `drag${index + 1}`);
});

// Add event listeners
let draggedDiv = null;

document.querySelectorAll(".image").forEach(div => {
  div.addEventListener("dragstart", function () {
    draggedDiv = this;
    this.classList.add("selected");
  });

  div.addEventListener("dragend", function () {
    this.classList.remove("selected");
  });

  div.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  div.addEventListener("drop", function (e) {
    e.preventDefault();
    if (draggedDiv !== this) {
      let temp = this.style.backgroundImage;
      this.style.backgroundImage = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = temp;
    }
  });
});
