$(document).ready(function () {
  // console.log("i have a script");
  // console.log(moment().format("h"));
  // console.log(moment().format("a"));
  // console.log(moment().format("MMMM Do YYYY"));

  
  // Dom Variables
  var currentHour = "";
  

  // JS Variables
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
      myStorage = window.localStorage;

  function currentHourPlus() {
    if (moment().format("a") === "pm") {
      currentHour = parseInt(moment().format("h")) + 12;
      // console.log("works: "+currentHour);

    } else {
      currentHour = moment().format("h");
    }
  }
// recall local memory
  function getPlans(){
    for (i = 0; i < 9; i++) {
      time = "";
      hour = "";
      if (9 + i > 12) {
        var hour = 9 + i - 12;
        time = hour + " PM";
        if(localStorage.getItem(time)==null){
          localStorage.setItem(time, "");
          console.log(localStorage);
          console.log(time);
    }
      } else {
        var hour = 9 + i;
        time = hour + " AM";
        if(localStorage.getItem(time)==null){
          localStorage.setItem(time, "");
          console.log(localStorage);
          console.log(time);
    }
      }
  }    }
 

  // Function Calls
  currentHourPlus();
  getPlans();

  for (i = 0; i < 9; i++) {
    time = "";
    timeClass = "";
    hour = "";
    // building the 12 hour time block text
    if (9 + i > 12) {
      var hour = 9 + i - 12;
      time = hour + " PM";
    } else {
      var hour = 9 + i;
      time = hour + " AM";
    }
    // This is were you pick the class
    if(9+i>currentHour){
        timeClass="future";
    } else if (9+i==currentHour){
        timeClass="present";
    } else {
        timeClass="past"
    }
    // 
    // building rows;
    var content = '<form class="row">'
    content += '<div class="col-md-1 hour">' + time + '</div>';
    content += '<div class="col-md-10 description p-0"><textarea  class="'+ timeClass +'" id="'+ time +'">'+ localStorage.getItem(time) +'</textarea></div>';
    content += '<button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button>';
    content += "</form>"
    $('.container').append(content);
  }

  // Event Listeners

  // adding events to local memory
  
  $(".saveBtn").on("click", function () {
    event.preventDefault()
    console.log("you clicked a button");
    var task = $(this).parent().find("textarea").val();
      var hour = $(this).parent().find("textarea").attr("id");
      console.log("task:", task, hour);
      localStorage.setItem(hour,task);

  });

});
