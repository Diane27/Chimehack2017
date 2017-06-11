var ref = document.querySelector('#refugee-survey');
var vol = document.querySelector('#volunteer-survey');
var buttonRef = document.querySelector('#ref');
var buttonVol = document.querySelector('#vol');

ref.classList.add('hid');
//vol.classList.add('hid');


buttonRef.onclick = function() {

       vol.classList.add('hid');
       ref.classList.remove('hid');
}

buttonVol.onclick = function() {

       ref.classList.add('hid');
       vol.classList.remove('hid');
}
