function createUser() {
  var list = {
    button: document.getElementById("button").value
  };
  $.ajax({
    url: "http://localhost:5000/api/users/getusers",
    type: "Get",
    contentType: "application/json",
    success: function(response) {
      var table = document.getElementById("tbl");
      $.each(response, function(idx, elem) {
        table.innerHTML+=
          "<tr><td>" +
          elem.firstName +
          "</td><td>" +
          elem.lastName +
          "</td><td>" +
          elem.userName +
          "</td><td>" +
          elem.password +
          "</td><td>" +
          elem.email +
          "</td></tr>";
      });
    },
    error: function(request, error) {
      alert("Please try again later . ");
      alert(JSON.stringify(error));
    }
  });
}
