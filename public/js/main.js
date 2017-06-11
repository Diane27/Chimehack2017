var activeTab = document.querySelector('.active');
var inactiveTab = document.querySelectorAll('.inactive');


inactiveTab[0].onclick = function() {

       inactiveTab[0].classList.add('active');
       activeTab.classList.remove('active');
       inactiveTab[1].classList.remove('active');
}

inactiveTab[1].onclick = function() {

       inactiveTab[1].classList.add('active');
       activeTab.classList.remove('active');
       inactiveTab[0].classList.remove('active');
}

activeTab.onclick = function() {

       inactiveTab[0].classList.remove('active');
       activeTab.classList.add('active');
       inactiveTab[1].classList.remove('active');
}

$(document).ready(function(){
   $('[data-toggle="offcanvas"]').click(function(){
       $("#navigation").toggleClass("hidden-xs");
   });
});
