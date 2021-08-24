// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
window.onscroll = function(e) {
    const header = document.querySelector('.header')
    if(window.scrollY>0)
    {
        header.style.height = 'var(--heightScroll)';
        header.style.boxShadow = '0px 1px 3px 1px rgb(0 0 0 / 3%)'
        header.style.borderBottom = 'unset';
        header.style.backgroundColor = 'white';
    }
    else{
        header.style.height = 'var(--heightStart)';
        header.style.boxShadow = 'unset'
        header.style.borderBottom = '1px solid rgba(16,16,16,.05)'
        header.style.backgroundColor = '#eaf2ff';
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