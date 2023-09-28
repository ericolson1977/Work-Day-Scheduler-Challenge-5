var currentTime = $("#currentDay")

// displays current date
function displayTime() {
  var rightNow = dayjs().format("dddd, MMM DD, YYYY");
  currentTime.text(rightNow);
}
// removes past present futre classes and adds appropriate class basedon currect time
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
    
    $('.time-block').on('click', '.saveBtn', function(event) {
      event.preventDefault();
      var task = $(this).siblings(".description").val();
      var key = $(this).parent().attr("id");
      localStorage.setItem(key, task);
      // console.log('Button clicked!');
      // console.log('User input:', task);
      // console.log('Storage key:', key);
    });

    var storedTask = localStorage.getItem($(this).attr("id"));
    if (storedTask) {
      $(this).find(".description").val(storedTask);
    }
  });
});

displayTime();