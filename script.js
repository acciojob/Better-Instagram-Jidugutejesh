//your code here
const images = document.querySelectorAll(".image");
let draggedDiv = null;

images.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    draggedDiv = e.target;
  });

  img.addEventListener("dragover", (e) => {
    e.preventDefault();
    img.classList.add("over");
  });

  img.addEventListener("dragleave", () => {
    img.classList.remove("over");
  });

  img.addEventListener("drop", (e) => {
    e.preventDefault();
    img.classList.remove("over");

    if (draggedDiv && draggedDiv !== img) {
      // Swap background images
      const temp = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = img.style.backgroundImage;
      img.style.backgroundImage = temp;
    }
  });
});

