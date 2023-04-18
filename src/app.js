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
  let portlandTime = moment().tz("america/portland");
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

setInterval(updateTime, 1000);
