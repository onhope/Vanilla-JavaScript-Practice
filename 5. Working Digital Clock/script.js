const display = document.querySelector(".display");

setInterval(() => {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = "AM";

  // 오후 변환
  if (hr > 12) {
    day = "pm";
    hr = hr - 12;
  }
  // 자정인 경우
  if (hr == 0) {
    hr = 12;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  display.textContent = day + " " + hr + ":" + min + ":" + sec;
});


