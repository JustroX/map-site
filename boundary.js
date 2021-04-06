var path;

function showBoundary() {
  if (path) path.setMap(null);

  const textarea = document.querySelector("#boundary");
  const json = textarea.value;
  try {
    const obj = JSON.parse(json);
    const center = obj.centroid.coordinates;
    const boundary = obj.geometry.coordinates[0];
    path = new google.maps.Polyline({
      path: boundary.map((x) => ({
        lat: x[1],
        lng: x[0],
      })),
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    path.setMap(map);

    map.panTo({ lat: center[1], lng: center[0] });
  } catch (err) {
    console.error(err);
  }
}
