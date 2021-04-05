// To know the  position of the context menu.
// NOT USED IN DETERMINING THE COORDINATES
var mouseX, mouseY;

// Map object
var map;

var markers = [];

document.addEventListener("contextmenu", (event) => event.preventDefault());

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(14.648678882372693, 121.0686839826772),
    zoom: 50,
    mapTypeId: "satellite",
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  map.addListener("click", (event) => {
    closeContext();
  });
  map.addListener("rightclick", (event) => {
    openContext(event.latLng);
  });

  setTimeout(() => {
    document.querySelector(".dismissButton").click();
  }, 3000);
}

function saveCoords(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function addMarker(latLng, kind) {
  const marker = new google.maps.Marker({
    position: latLng,
    map,
    icon:
      kind == "tree" ? "tree.png" : kind == "shrub" ? "shrub.png" : "plant.png",
  });
  markers.push(marker);
}

function clearMarkers() {
  markers.forEach((marker) => {
    marker.setMap(null);
  });
  markers = [];
}

function addMarkers(rows) {
  clearMarkers();
  rows.forEach((row) => {
    const lat = parseFloat(row[0]);
    const lng = parseFloat(row[1]);
    const kind = row[2];

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map,
      icon:
        kind == "tree"
          ? "tree.png"
          : kind == "shrub"
          ? "shrub.png"
          : "plant.png",
    });
    markers.push(marker);
  });
  if (rows[0]) {
    const lat = parseFloat(rows[0][0]);
    const lng = parseFloat(rows[0][1]);
    map.panTo({ lat, lng });
  }
}

function pan() {
  const lat = parseFloat(document.querySelector("#cx").value);
  const lng = parseFloat(document.querySelector("#cy").value);
  map.panTo({ lat, lng });
}
