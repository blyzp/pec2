/* Luxon */
const { DateTime } = require("luxon");

function showTime() {
  const date = DateTime.local();

  document.getElementById("la").innerHTML = date
    .setZone("America/Los_Angeles")
    .toFormat("HH:mm:ss");

  document.getElementById("bcn").innerHTML = date
    .setZone("Europe/Madrid")
    .toFormat("HH:mm:ss");

  document.getElementById("osk").innerHTML = date
    .setZone("Asia/Tokyo")
    .toFormat("HH:mm:ss");
}

setInterval(showTime, 1000);
