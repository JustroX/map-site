var currCoords;

function openContext(coords) {
  currCoords = coords;
  const lat = coords.lat();
  const lng = coords.lng();
  const modal = document.querySelector(".modal");
  modal.style.left = mouseX + "px";
  modal.style.top = mouseY + "px";
  modal.style.display = "block";

  const display = document.querySelector(".coordinate");
  display.innerHTML = lat + " " + lng;

  document.querySelector("#remark").value = "";
}

function closeContext() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function selectMarker(kind) {
  sendRequest(currCoords, kind, document.querySelector("#remark").value);
  closeContext();
}
