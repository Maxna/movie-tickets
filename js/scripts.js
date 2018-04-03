// business logic
function Ticket(time, age) {
  this.time = time;
  this.age = age;
}

// user interface logic
$(function() {
  $("#movies").submit(function(event) {
    event.preventDefault();

    var inputTime = $("input:radio[name=time]:checked").val();
    var inputAge = parseInt($("#age").val());
    var newTicket = new Ticket (inputTime, inputAge);

    if (inputTime === ("br3" || "br7" || "br11") && inputAge < 17) {
      $(".price").text("No Entry")
    }
    else if (inputTime === "tommy3" || "ready3" || "br3") {
      $(".price").text("Price is $6")
    }
    else if (inputTime === "tommy7" || "tommy11" && inputAge > 65) {
      $(".price").text("Price is $8")
    }
    else if (inputTime === "tommy7" || "tommy11" && inputAge < 65) {
      $(".price").text("Price is $10")
    }
    else {
      $(".price").text("Price is $12")
    }
    $("#output").show();
  });
});
