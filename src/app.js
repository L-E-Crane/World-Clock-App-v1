function updateTime() {
  //tokyo
  let tokyoelement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoelement.querySelector(".date");
  let tokyoTimeElement = tokyoelement.querySelector(".time");
  let tokyoTime = moment().tz("asia/tokyo");
  tokyoDateElement.innerHTML = `${tokyoTime.format("LL")}`;
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
  //portland
  let portlandelement = document.querySelector("#portland");
  let portlandDateElement = portlandelement.querySelector(".date");
  let portlandTimeElement = portlandelement.querySelector(".time");
  let portlandTime = moment().tz("us/pacific");
  portlandDateElement.innerHTML = `${portlandTime.format("LL")}`;
  portlandTimeElement.innerHTML = `${portlandTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
  //honolulu
  let honoluluelement = document.querySelector("#honolulu");
  let honoluluDateElement = honoluluelement.querySelector(".date");
  let honoluluTimeElement = honoluluelement.querySelector(".time");
  let honoluluTime = moment().tz("pacific/honolulu");
  honoluluDateElement.innerHTML = `${honoluluTime.format("LL")}`;
  honoluluTimeElement.innerHTML = `${honoluluTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  )}`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("LL")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}
updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city-selection");

citiesSelectElement.addEventListener("change", updateCity);
