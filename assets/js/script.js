//pseudocode

//Display the current day and date in the top of the calendar section.
//use moment.js for date and time.
$("#currentDay").text(moment().format("dddd, MMMM Do"));

///each time block for that day is color-coded to indicate whether it is in the past, present, or future.

var currentTime = moment().format("HH");
console.log(currentTime);

//var calendarTime=document.getElementById("9");
/*do(){
  if (calendarTime===currentTime){
    calendarTime.style.color. #ff6961;
  } else if(calendarTime<=currentTime){
    calendarTime.style.color. #d3d3d3;
  } else
  if(calendarTime>=currentTime){
    calendarTime.style.color. #77dd77;
  }
},while(calendarTime<=9 && calendarTime>=17);

*/

//when clicked into a time block, an event can be entered.
//event is written in a html text area in the time block.

//When clicked on the save button for that time block ,the text for that event is saved in local storage.
//use AddeventListener for the button click and localstorage.setitem for storing the event.

//When the page is refreshed the page ,the saved events should persist.
//localstorage.getitem
