// moment.js to  display current day at the top of calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(currentDay);
// time blocks for standard business hours
// - columns inside rows

// time blocks color coded to indicate whether past, present or future
// click into time block to enter an event
// click the save button for that time block > text for event is saved in localstorage
// refresh page > saved events persist