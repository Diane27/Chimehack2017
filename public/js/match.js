var xhr = new XMLHttpRequest();
var myurl = "/matchme";

xhr.open("POST", myurl);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
  "language": "german"
}));
