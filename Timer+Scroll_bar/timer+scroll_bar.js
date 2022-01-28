var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var scrolled = 0

// store reference to the variable
var startTimer = null;

function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 00;
    m.value = 00;
    s.value = 00;
    stopTimer();
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0 && s.value == 0) {
    m.value = 59;
    s.value = 59;
    h.value--;
  }
  return;
}

function stopTimer() {
  clearInterval(startTimer);
}

start.addEventListener("click", function () {
  //initialize the variable startTimer
  function startInterval() {
    startTimer = setInterval(function () {
      timer();
      
    }, 1000);
    document.getElementById('start').disabled = true;
        
  }
  startInterval();
});

reset.addEventListener("click", function () {
  h.value = 00;
  m.value = 00;
  s.value = 00;
  stopTimer();
});

stop.addEventListener("click", function () {
  h.value;
  m.value;
  s.value;
  stopTimer();
  document.getElementById('start').disabled = false;
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
  var winScroll = document.documentElement.scrollTop || document.documentElement.scrollTop

var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


  scrolled = (winScroll / height) * 100 

document.getElementById('progress-bar').style.width = scrolled + "%";



console.log(scrolled);
console.log(winScroll);
console.log(height);

}