$(document).ready(function () {
  console.log("i have a script");
  console.log(moment().format("h"));
  console.log(moment().format("a"));
  console.log(moment().format("MMMM Do YYYY"));

  
  // Dom Variables
  var currentHour = "";
  

  // JS Variables
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
      myStorage = window.localStorage;

  function currentHourPlus() {
    if (moment().format("a") === "pm") {
      currentHour = parseInt(moment().format("h")) + 12;
      console.log("works: "+currentHour);

    } else {
      currentHour = moment().format("h");
    }
  }
 

  // Function Calls
  currentHourPlus()

  for (i = 0; i < 9; i++) {
    time = "";
    timeClass = "";
    hour = "";
    if (9 + i > 12) {
      var hour = 9 + i - 12;
      time = hour + " PM";
    } else {
      var hour = 9 + i;
      time = hour + " AM";
    }
    if(hour>currentHour){
        timeClass="future";
    } else if (hour==currentHour){
        timeClass="present";
    } else {
        timeClass="present"
    }
    var content = '<form class="row">'
    content += '<div class="col-md-1 hour">' + time + '</div>';
    content += '<div class="col-md-10 description p-0"><textarea  class="'+ timeClass +'" id="'+ time +'">'+ hour +'</textarea></div>';
    content += '<button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button>';
    content += "</form>"
    $('.container').append(content);
  }

  // Event Listeners

  console.log("The current hour is: " + currentHour);
  
  $(".saveBtn").click(function(){
      preventDefault();
      console.log("you clicked a button");
      localStorage.setItem("",get                  )
  })

});
