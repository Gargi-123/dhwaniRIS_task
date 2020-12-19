window.onload = function () {
  let mainContainer = document.getElementById("Container");
  mainContainer.addEventListener("click", getClickedDiv);
};

function getClickedDiv() {
  if (event.target.textContent === "1") {
    let elementZIndex = event.target.style.zIndex;

    if (elementZIndex === "1") {
      event.target.style.zIndex = 3;
    } else {
      event.target.style.zIndex = 1;
    }
  } else if (event.target.textContent === "2") {
    let elementZIndex = event.target.style.zIndex;
    if (elementZIndex === "1") {
      event.target.style.zIndex = 3;
    } else {
      event.target.style.zIndex = 1;
    }
  } else if (event.target.textContent === "3") {
    let elementZIndex = event.target.style.zIndex;

    if (elementZIndex === "1") {
      event.target.style.zIndex = 3;
    } else {
      event.target.style.zIndex = 1;
    }
  } else if (event.target.textContent === "4") {
    let elementZIndex = event.target.style.zIndex;
    if (elementZIndex === "1") {
      event.target.style.zIndex = 3;
    } else {
      event.target.style.zIndex = 1;
    }
  }
}

function handlebox5() {
  document.getElementById("focus1").style.zIndex = 1;
  document.getElementById("focus5").style.zIndex = 2;
  document.getElementById("focus2").style.zIndex = 1;
  document.getElementById("focus3").style.zIndex = 1;
  document.getElementById("focus4").style.zIndex = 1;
}
