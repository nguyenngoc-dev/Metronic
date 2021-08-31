// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
var main = document.querySelector('.main')
window.onscroll = function(e) {
    const header = document.querySelector('.header')
    if(window.scrollY>0)
    {
        header.style.height = 'var(--heightScroll)';
        header.style.boxShadow = '0px 1px 3px 1px rgb(0 0 0 / 3%)'
        header.style.borderBottom = 'unset';
     
    }
    else{
        header.style.height = 'var(--heightStart)';
        header.style.boxShadow = 'unset'
        header.style.borderBottom = '1px solid rgba(16,16,16,.05)'
   
    }
}
var headerProductItem = document.querySelectorAll('.header-products-sub-menu__item');
var headerProductItemImg = document.querySelector('.header-products-img-visible');
var headerProductItemHeading = document.querySelector('.header-products-heading');
var headerProductItemPg = document.querySelector('.header-products-pg');
// for (var item of headerProductItem) {
//     item.onmouseover = function() {
//         headerProductItemImg.style.display = 'block';
//     }
// }


    
    // đang còn bug chỗ hover vào item ở list
$(document).ready(function(){
    
  // đóng mở menu ở mobile
 window.onresize = function () {

     if(main.clientWidth > 996) {
       
        $('.header-nav-list').removeClass('transform')
        $('.nav-overlay ').css({
            transition:'all linear 0.3s',
            display:'none'
        })
        $('.header-nav-list').css({
            transition:'unset'
     })
   
 }
}
 

      $('.btn-menu-mobile-icon').click(function () {
              $('.header-nav-list').css({
              transition:'all linear 0.3s'
          })
          $('.header-nav-list').addClass('transform')
          $('.nav-overlay ').css({
              transition:'all linear 0.3s',
              display:'block'
          })
      })
    
      $('.nav-overlay').click(function() {
          $('.header-nav-list').css({
              transition:'all linear 0.3s'
          })
          $('.header-nav-list').removeClass('transform')
          $('.nav-overlay ').css({
              transition:'all linear 0.3s',
              display:'none'
          })
      })
      //slide product and learn
      $(".slide-product").click(function(){
          $('.arrow-mobile-product').css({
              transition:'all linear 0.3s'
          },500);
          $('.arrow-mobile-product').toggleClass('rotate')
          $(".header-products-sub-menu").slideToggle(500);
      });
      $("#slide-learn").click(function(){
          $('.arrow-mobile-learn').css({
              transition:'all linear 0.3s'
          },500);
          $('.arrow-mobile-learn').toggleClass('rotate')
          $(".header-learn-sub-menu").slideToggle(500);
          });
  

  
})

    





 