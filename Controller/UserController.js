function createUser() {
  var user = {
    FirstName: document.getElementById("firstName").value,
    LastName: document.getElementById("lastName").value,
    UserName: document.getElementById("userName").value,
    Password: document.getElementById("password").value,
    Email: document.getElementById("email").value
  };
  SignupFunc(user);
}
function login() {
  var loginInfo = {
    UserName: document.getElementById("userName").value,
    Password: document.getElementById("password").value
  };
  LoginFunc(loginInfo);
}
function Selector() {
  var e = document.getElementById("mySelect");
  var strUser = e.options[e.selectedIndex].value;
  // var strUser = e.options[e.selectedIndex].text

  console.log(strUser);
}
function myFunction() {
  var list = document.getElementById("agreement"); //Client ID of the radiolist
  var inputs = list.getElementsByTagName("input");
  var selected;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      selected = inputs[i];
      break;
    }
  }
  if (selected) {
    alert(selected.value);
  }
}
function myFunction1(id, controlType) {
  document.getElementById("check").checked;
  if (controlType == "radio") {
  } else if (controlType == "checkbox") {
  } else {
  }
  var list = document.getElementById(id); //Client ID of the radiolist
  var inputs = list.getElementsByTagName("input");
  var selected;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      selected = inputs[i];
      break;
    }
  }
  if (selected) {
    alert(selected.value);
  }
}
