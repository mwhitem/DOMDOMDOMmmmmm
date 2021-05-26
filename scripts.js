let squareContainer = document.createElement("div");
let button = document.createElement("button");
button.innerText = "Add Square";
document.body.appendChild(button);
document.body.appendChild(squareContainer);

let i = 1;
button.addEventListener("click", newSquare);
function newSquare() {
  let div = document.createElement("div");
  div.className = "blackSquare";
  div.id = 1;
  let text = document.createTextNode(i);
  div.appendChild(text);
  let span = document.createElement("SPAN");
  span.appendChild(text);
  span.addEventListener("mouseenter", mouseEnter);
  span.addEventListener("mouseleave", mouseLeave);
  function mouseEnter() {
    span.style.visibility = "visible";
  }
  function mouseLeave() {
    span.style.visibility = "hidden";
  }
  div.appendChild(span);

  if ((div.id = i)) {
    ++i;
  }

  let colors = [
    "brick",
    "cadetblue",
    "lightgreen",
    "coral",
    "darkorange",
    "purple",
    "lavender",
    "chocolate",
  ];

  div.addEventListener("click", function (e) {
    div.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  });

  div.addEventListener("dblclick", function () {
    if (div.nextSibling && div.id % 2 == 0) {
      div.nextSibling.remove();
    } else if (!div.nextSibling && div.id % 2 == 0) {
      alert("no square left");
    } else if (div.previousSibling && div.id % 2 !== 0) {
      div.previousSibling.remove();
    } else if (!div.previousSibling && div.id % 2 !== 0) {
      alert("square no more");
    }
  });

  squareContainer.appendChild(div);
}
