var xhr = new XMLHttpRequest();
var url = "/signmeup";

xhr.open("POST", url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    phoneNumber: document.querySelector("#phoneNumber");
    userName: document.querySelector("#userName");
    password: document.querySelector("#password");
}));
