var survey = document.querySelectorAll('.jumbotron');
var buttonRef = document.querySelector('.ref');
var buttonVol = document.querySelector('.vol');

survey[0].classList.add('hid');
survey[1].classList.add('hid');


buttonRef.onclick = function() {

       survey[1].classList.add('hid');
       survey[0].classList.remove('hid');
}

buttonVol.onclick = function() {

       survey[0].classList.add('hid');
       survey[1].classList.remove('hid');
}
