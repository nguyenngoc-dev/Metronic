const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.onscroll = function(e) {
    const header = $('.header')
    if(window.scrollY>0)
    {
        header.style.height = 'var(--heightScroll)';
        header.style.boxShadow = '0px 3px 3px 1px rgb(0 0 0 / 3%)'
        header.style.border = 'unset'
    }
    else{
        header.style.height = 'var(--heightStart)';
        header.style.boxShadow = 'unset'
        header.style.border = '1px solid rgba(16,16,16,.05)'
    }
}