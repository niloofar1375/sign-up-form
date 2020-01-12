function SignupFunc(user) {
  $.ajax({
    type: "POST",
    url: "http://localhost:5000/api/users/signup",
    contentType: "application/json",
    data: JSON.stringify(user),
    success: function(response) {
      alert("Your registration was successfully.");
      setCookie("userInfo", JSON.stringify(user), 10);
      return "Ok";
    },
    error: function(request, error) {
      alert("Please try again later . ");
      return "Nok";
    }
  });
}
function LoginFunc(loginInfo) {
  $.ajax({
    url: "http://localhost:5000/api/users/login",
    type: "POST",
    data: JSON.stringify(loginInfo),
    contentType: "application/json",
    success: function(response) {
      if (response == true) alert("Your registration was successfully.");
      else alert("login failed");
      setCookie("userInfo", JSON.stringify(loginInfo), 10);
      console.log(response);
      return "ok";
    },
    error: function(request, error) {
      alert("Please try again later . ");
      alert(JSON.stringify(error));
      return "Nok";
    }
  });
}
