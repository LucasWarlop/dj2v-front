console.log("test");
const sticky = document.querySelector('.menu-sticky');
const posYNav = sticky.offsetTop;
console.log(posYNav);//796

window.addEventListener('scroll', () => {
    console.log(window.scrollY);s
})