$(document).ready(function() {
  //using the moment js method to get current time
  $("#currentDay").text(moment().format("MMMM YYYY, h:mm:ss"));
  // Assigning click listening for saving the appropriate event
  $(".saveBtn").on("click", function() {

      var word = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");var time = $(this).parent().attr("id");
  //Assigning local storage
      localStorage.setItem(time, word);
  })

});

// Allocating local storage on click. 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));




$(function timeTracker() {

  var currentTime = moment().hour();
 
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    

// Identifying if time has already past the particular block and adding a past to all hours that have gone by
  if (blockTime < currentTime) {
   $(this).addClass("past"); 
    $(this).removeClass("future");
    $(this).removeClass("present");
  }
  // Identifying if time is current and selecting the block that is present 
  else if (blockTime === currentTime) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  }
 // Identifying that the remaining blocks would be future class
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  } 
})
  timeTracker(); //Re-run the function

});
