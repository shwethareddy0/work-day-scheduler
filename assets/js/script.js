//pseudocode

//Display the current day and date in the top of the calendar section.
//use moment.js for date and time.
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var currentTime = moment().format("HH");
// currentTime = 12;
console.log(currentTime);

//Each time block for that day is color-coded to indicate whether it is in the past, present, or future.

for (i = 9; i <= 17; i++) {
  if (i == currentTime) {
    $("#" + i).addClass("present");
  } else if (i < currentTime) {
    $("#" + i).addClass("past");
  } else if (i > currentTime) {
    $("#" + i).addClass("future");
  }
}

//When clicked on the save button for that time block ,the text for that event is saved in local storage.

var notification = $("#notification");

function handleSaveButton(timeBlock) {
  //Once the event is saved, a notification appears on top of the time-blocks
  notification.show();
  var userInput = $("#" + timeBlock + " textarea").val();
  //When clicked on save button, button color changes to black.
  var saveIcon = $("#" + timeBlock)
    .parent()
    .find("i");
  saveIcon.css("color", "black");
  var workDaySchedule = JSON.parse(localStorage.getItem("work-day-schedule"));
  if (workDaySchedule == null) {
    workDaySchedule = { [timeBlock]: userInput };
  } else {
    //adding the next user input to the existing entry.
    workDaySchedule[timeBlock] = userInput;
  }
  localStorage.setItem("work-day-schedule", JSON.stringify(workDaySchedule));
  notification.fadeOut(3000);
  setTimeout(function () {
    saveIcon.css("color", "white");
  }, 500);
}

//When the page is refreshed,the saved events should persist.
//localstorage.getitem
var workDayScheduleFromLocalStorage = JSON.parse(
  localStorage.getItem("work-day-schedule")
);
if (workDayScheduleFromLocalStorage !== null) {
  for (i = 9; i <= 17; i++) {
    $("#" + i + " textarea").val(workDayScheduleFromLocalStorage[i]);
  }
}
//When clicked on save button, button color changes to black.
