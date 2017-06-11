var xhr = new XMLHttpRequest();
var myurl = "/signmeup";

function SubmitMyForm() {
  xhr.open("POST", myurl, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
      phoneNumber: document.querySelector("#phoneNumber"),
      userName: document.querySelector("#userName"),
      password: document.querySelector("#password"),
      userType: "refugee"
  }));
}
