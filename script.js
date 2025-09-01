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
      let parent = this.parentNode;
      let draggedNext = draggedDiv.nextSibling;
      let droppedNext = this.nextSibling;

      parent.insertBefore(draggedDiv, droppedNext);
      parent.insertBefore(this, draggedNext);
    }
  });
});
