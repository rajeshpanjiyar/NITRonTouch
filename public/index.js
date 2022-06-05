//nav bar activity change while scrolling
var navbar = document.querySelector('.mynav')
window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}


//For time and date in front page(index.html)
//time and date code logic
function timeDate() {
  var today = new Date();
  var currentDay = today.getDay();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var timeUnit = "AM";

  var date =
    today.getFullYear() +
    "-" +
    month[today.getMonth()] +
    "-" +
    today.getDate() +
    " ";
    var hour = today.getHours();
    if(hour < 1)
    {
      hour += 12;
    }
    if(hour>12)
    {
      hour = (today.getHours() - 12);
    }
  var minute = today.getMinutes();
  var second = today.getSeconds();

  var time = 
    (hour<10?"0"+hour:hour) + ":" + (minute<10?"0"+minute:minute)+ ":" + (second<10?"0"+second:second);
  // console.log(date, time);

  if (today.getHours() >= 12) {
    timeUnit = "PM";
  } else {
    timeUnit = "AM";
  }

  document.querySelector(".time").innerHTML = "" + time + " " + timeUnit;
  document.querySelector(".date").innerHTML = "" + date + "";
}
timeDate();
var t = setInterval(timeDate, Infinity);


