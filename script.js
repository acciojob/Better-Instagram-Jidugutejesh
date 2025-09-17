const draggables = document.querySelectorAll(".draggable");
let dragged = null;

draggables.forEach(div => {
  div.addEventListener("dragstart", (e) => {
    dragged = div;
  });

  div.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  div.addEventListener("drop", (e) => {
    e.preventDefault();

    if (dragged !== div) {
      let tempBg = dragged.style.backgroundImage;
      dragged.style.backgroundImage = div.style.backgroundImage;
      div.style.backgroundImage = tempBg;

      let tempText = dragged.innerText;
      dragged.innerText = div.innerText;
      div.innerText = tempText;
    }
  });
});
