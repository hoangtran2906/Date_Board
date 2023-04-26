let is24Hour = true;
let updateTime = function () {
  let currentDate = new Date();
  let cDayofWeek = currentDate.toLocaleString("default", { weekday: "long" });
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth();
  let cYear = currentDate.getFullYear();
  let cHour = currentDate.getHours();
  let cMinute = currentDate.getMinutes();
  let cSecond = currentDate.getSeconds();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let cMonthName = months[cMonth];
  console.log(cDayofWeek);
  console.log(cDay);
  console.log(cMonthName);
  console.log(cYear);
  console.log(cHour);
  console.log(cMinute);
  console.log(cSecond);
  if (!is24Hour) {
    document.getElementById("date").innerHTML =
      cMonthName + " " + cDay + ", " + cYear;
    document.getElementById("day").innerHTML = cDayofWeek;
    document.getElementById("hours").innerHTML = cHour;
    document.getElementById("minutes").innerHTML = cMinute;
    document.getElementById("seconds").innerHTML = cSecond;
  } else {
    document.getElementById("session").innerHTML = cHour >= 12 ? "PM" : "AM";
    let cHour12 = cHour % 12;
    document.getElementById("hours").innerHTML = cHour12;
    document.getElementById("date").innerHTML =
      cMonthName + " " + cDay + ", " + cYear;
    document.getElementById("day").innerHTML = cDayofWeek;
    document.getElementById("minutes").innerHTML = cMinute;
    document.getElementById("seconds").innerHTML = cSecond;
  }
}
setInterval(updateTime, 500);
let toggle = function () {
  is24Hour = !is24Hour;
  if (session.style.display === "none") {
    session.style.display = "block";
  } else {
    session.style.display = "none";
  }
}

document.getElementById("toggle-btn").addEventListener("click", toggle);
