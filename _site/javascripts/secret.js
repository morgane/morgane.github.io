$( document ).ready(function() {
  $(".draggable").draggable();

  setInterval('updateClock()', 1000);
});

function updateClock(){
  var now = new Date();
  console.log(now);
  var currentHours = now.getHours();
  var currentMinutes = now.getMinutes();
  var timeOfDay;

  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes : currentMinutes;

  if (currentHours > 12) {
    currentHours = currentHours - 12;
    timeOfDay = "PM";
  } else {
    timeOfDay = "AM";
  }

  var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;

  $(".timestamp").html(currentTimeString);
}

