const nav = document.querySelector('nav');
const navLink = nav.querySelector('.nav-link');
const navCollapse = nav.querySelector('.navbar-collapse');

navLink.addEventListener('click', function(){
    navCollapse.classList.remove('show');
})