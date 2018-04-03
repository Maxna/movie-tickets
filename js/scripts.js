// business logic
function Ticket(time, movie, age) {
  this.time = time;
  this.movie = movie;
  this.age = age;
}

Ticket.prototype.price = function() {
  var price = "";
  if (this.movie === "Blade Runner 2049" && this.age < 17) {
    return price = "unavailable due to your age, kiddo"
  } else if (this.time === "3:00pm" || this.age >= 65) {
    return price = "$6";
  } else if (this.movie === "Tommy Boy") {
    return price = "$8";
  } else {
    return price = "$12";
  }
  return price;
}

// user interface logic
$(function() {
  $("#theater").submit(function(event) {
    event.preventDefault();


    var inputTime = $("input:radio[name=time]:checked").val();
    var inputAge = parseInt($("#age").val());
    var inputMovie = $("#movie").val();
    var newTicket = new Ticket (inputTime, inputMovie, inputAge);
    var prices = newTicket.price();
    $(".price").text(newTicket.movie + " at " + newTicket.time + " will be " + prices + ".");
    $("#output").show();
  });
});
