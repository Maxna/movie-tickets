// business logic
function Ticket(time, movie) {
  this.time = time;
  this.movie = movie;
}

Ticket.prototype.price = function() {
  if (age < 17 && movie === "Blade Runner 2049") {
    return ("No Entry")
  }
}

// user interface logic
$(function() {
  $("#theater").submit(function(event) {
    event.preventDefault();


    var inputTime = $("input:radio[name=time]:checked").val();
    var inputAge = parseInt($("#age").val());
    var inputMovie = $("#movie").val();
    var newTicket = new Ticket (inputTime, inputMovie);
    console.log(newTicket);
    $(".price").text(Ticket.price());
    $("#output").show();
  });
});
