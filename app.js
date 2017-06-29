$(document).ready(function() {
  for(var x = 0; x < 16; x++) {
    for(var y = 0; y < 16; y++) {
      $("<div class='squares'></div>").appendTo('#main');
    }
  }
  $(".squares").hover(function(){
    $(this).css("background-color", "yellow"); },
    function(){
      $(this).css("background-color", "blue");
    });

  $("#button").click(function() {
    $(".squares").remove();
    var txt;
    var number = prompt("Please enter # of squares");
    if (number != null) {
      var a = parseInt(number);
      for(var t = 0; t < a; t++) {
        for(var m = 0; m < a; m++) {
          $("<div class='squares'></div>").appendTo('#main');
        };
      };
        //txt = "Hello " + number + "! How are you today?";
        //document.getElementById("demo").innerHTML = txt;
  }
  });
});
