var SignIn = document.querySelector('.header-nav-sign');
var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-sign-in');
SignIn.onclick = function() {
    modal.style.display = 'flex';
}
// đóng mở modal
$(document).ready(function(){
    $('.modal-btn-close-icon-contain').click(function(e) {
       $('.modal').animate({
        opacity:'toggle',
        top:'-50px'
    },'fast')
    $('.modal').animate({
        top:0
})
})
$('.modal').click(function(e) {
    $('.modal').animate({
     opacity:'toggle',
     top:'-50px'
 },'fast')
 $('.modal').animate({
     top:0
})
})
})
modalContainer.onclick = function(e) {
    e.stopPropagation();
}
// chuyển tab trong modal-body
var signIn = document.querySelector('#sign-in');
var create = document.querySelector('#create-acc');
var forgot = document.querySelector('#forgot');
var cancel = document.querySelector('#cancel');

var form_1 = document.querySelector('#form-1');
var form_2 = document.querySelector('#form-2');
var form_3 = document.querySelector('#form-3');

create.onclick = function () {
    form_2.style.display = 'block';
    form_1.style.display = 'none';
}
signIn.onclick = function () {
    form_2.style.display = 'none';
    form_1.style.display = 'block';
}
forgot.onclick = function () {
    form_3.style.display = 'block';
    form_1.style.display = 'none';
}
cancel.onclick = function () {
    form_3.style.display = 'none';
    form_1.style.display = 'block';
}
