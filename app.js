let fullName = prompt("Lutfen adinizi giriniz:");

let userName = document.querySelector("#userName");

userName.innerHTML = fullName.toUpperCase();

setInterval(myTimer, 1);

function myTimer() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}

var week = [
  "Pazar",
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "Cumartesi",
];

const date = new Date();
var weekDay = date.getDay();
/* if (weekDay > 0) {
  weekDay = weekDay - 1;
} */

document.getElementById("day").innerHTML = week[weekDay];
