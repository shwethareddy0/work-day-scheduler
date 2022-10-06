//pseudocode

//Display the current day and date in the top of the calendar section.
//use moment.js for date and time.
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var currentTime = moment().format("HH");
//currentTime =9;
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

//when clicked into a time block, an event can be entered.
//event is written in a html text area in the time block.

//When clicked on the save button for that time block ,the text for that event is saved in local storage.
//use AddeventListener for the button click and localstorage.setitem for storing the event.

//When the page is refreshed the page ,the saved events should persist.
//localstorage.getitem
