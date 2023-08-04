// defined here for global scope
let date;
let sec;
let min;
let hr;

// second, minute and hour hands
let secHand = document.getElementById("sec");
let minHand = document.getElementById("min");
let hrHand = document.getElementById("hr");

// text for digital display
let clockText = document.getElementById("text");

// pointing a hand by a certain degree:
function point(hand, deg) {
  hand.style.rotate = `${deg}deg`;
}

// ticking:
function tick() {
  // set new date, and get the seconds, minutes and hours from it
  date = new Date();

  sec = date.getSeconds();
  min = date.getMinutes();
  hr = date.getHours();

  // point each hand by corresponding values...
  point(secHand, sec * 6); // seconds * 6, so that 30 seconds, will be 30*6; 180 degrees
  point(minHand, (min + sec / 60) * 6); // (minutes + seconds / 60) * 6, so that (30 minutes + 15 seconds/60) * 6, will be (30+0.25) * 6;  181.5 degrees
  point(hrHand, (hr + min / 60) * 30); // (hours + minutes / 60) * 30, so that (6 hours + 15 minutes/60) * 30, will be (6+0.25) * 30;  187.5 degrees

  // note in the above, we add seconds/60 to minutes, and  minutes/60 to hours, for gradual/analogue hand movement 

  setText();
}

// setting the text for the digital clock:
function setText() {
  // display seconds, minutes, and hours
  let dsec;
  let dmin;
  let dhr;
  // simple if statement that adds "0" if sec, min, or hr is less than 10(eg: "04" instead of "4" seconds)
  if (sec < 10) {
    dsec = "0" + sec;
  } else {
    dsec = sec;
  }
  if (min < 10) {
    dmin = "0" + min;
  } else {
    dmin = min;
  }
  if (hr < 10) {
    dhr = "0" + hr;
  } else {
    dhr = hr;
  }

  clockText.innerText = `${dhr}:${dmin}:${dsec}`;
}

// run tick() every second
setInterval(tick, 1000);
