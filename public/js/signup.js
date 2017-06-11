var xhr = new XMLHttpRequest();
var myurl = "/signmeup";

function SubmitMyForm() {
  var phoneNumber = document.querySelector("#phoneNumber").value;
  var userName = document.querySelector("#userName").value;
  var password = document.querySelector("#password").value;

  var refRadio = document.querySelector("#refButton").checked;
  var userType = "";
  if (refRadio)
  {
    userType = "refugee";
  }
  else {
    userType = "volunteer";
  }

  var language = document.querySelector("#languageInput").value;

  xhr.open("POST", myurl);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
      "phoneNumber": phoneNumber,
      "userName": userName,
      "password": password,
      "userType": userType,
      "language": language
  }));
  xhr.open("GET", "/main");
}
