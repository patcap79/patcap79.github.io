$(document).ready(function () {

  var clicked = $(.'button').val 

  $('.celsius').click(function() {
    total = (total  - 32) / 1.8;

$('#answer').html(total)
   if (total == > 37) {
    $('body').css("background-color", "red");
  }
   else if (total < 0) {
    $('body').css("background-color", "blue"); 
  }
   
})
})