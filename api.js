const host = "https://cwts-pin-server.herokuapp.com/api/v1/sheets";
// const host = "http://localhost:3000/api/v1/sheets";

function sendToSheets(lat, long, kind, remark, done) {
  fetch(host, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sheet_id: document.querySelector("#sheetID").value,
      lat,
      long,
      kind,
      remark,
    }),
  })
    .then((data) => {
      if (data.status !== 200) {
        console.error(data);
        alert("Error occured. Can't save :(");
      }
      done();
    })
    .catch((err) => {
      console.error(err);
      alert("Error occured. Can't save :(");
    });
}

function loadMarkers() {
  fetch(host + "/markers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sheet_id: document.querySelector("#sheetID").value,
    }),
  })
    .then(async (data) => {
      try {
        if (data.status !== 200) {
          console.error(data);
          alert("Error occured. Can't save :(");
        }
        addMarkers((await data.json()).body);
      } catch (err) {
        console.error(err);
        alert("Error occured. Can't save :(");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Error occured. Can't save :(");
    });
}

function sendRequest(event, kind, remark) {
  const lat = event.lat();
  const long = event.lng();
  sendToSheets(lat, long, kind, remark, () => {
    addMarker(event, kind);
  });
}
