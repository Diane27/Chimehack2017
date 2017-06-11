var xhr = new XMLHttpRequest();
var myurl = "/signmeup";

function SubmitMyForm() {
  var phoneNumber = document.querySelector("#phoneNumber").value;
  var userName = document.querySelector("#userName").value;
  var password = document.querySelector("#password").value;

  xhr.open("POST", myurl, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
      "phoneNumber": phoneNumber,
      "userName": userName,
      "password": password,
      "userType": "refugee"
  }));
}
