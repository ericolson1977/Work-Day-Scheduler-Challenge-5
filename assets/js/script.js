var currentTime = $("#currentDay")

//function to display current date
function displayDate() {
  var rightNow = dayjs().format("dddd, MMM DD, YYYY");
  currentTime.text(rightNow);
}
// removes past present futre classes and adds appropriate class based on currect time
$(document).ready(function() {
  var currentHour = dayjs().hour();
  $(".time-block").each(function() {
    var hour = parseInt($(this).attr("id").replace("hour-", ""), 10);
    $(this).removeClass("past present future");
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    } 
    // event listener for save button, this also saves task into local storage
    $('.time-block').on('click', '.saveBtn', function(event) {
      event.preventDefault();
      var task = $(this).siblings(".description").val();
      var key = $(this).parent().attr("id");
      localStorage.setItem(key, task);
    });
    //gets task from local storage so that the task persists after page refresh
    var storedTask = localStorage.getItem($(this).attr("id"));
    if (storedTask) {
      $(this).find(".description").val(storedTask);
    }
  });
});
//calls function to disply the current date
displayDate();