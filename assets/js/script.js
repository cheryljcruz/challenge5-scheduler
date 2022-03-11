// moment.js to  display current day at the top of calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// time blocks for standard business hours
// - columns inside rows
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");
var hourBlock = $(".hour");
var textArea = $(".description");
// time blocks color coded to indicate whether past, present or future

function colorBlock() {
    // get hours from current time
    var setTime = moment().hours();
$(timeBlock).each(function(){
    var currentTime = parseInt($(this).attr("id"));

    if (timeBlock > setTime) {
        $(this).addClass(".future");
    } else if 
        (timeBlock === setTime) {
            $(this).addClass(".present");
        } else {
            $(this).addClass(".past");

        }
    })
};
console.log(this);
// click into time block to enter an event
// click the save button for that time block > text for event is saved in localstorage
saveBtn.on("click", function() {
    
})
console.log(saveBtn);
// refresh page > saved events persist
