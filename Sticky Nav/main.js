const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

const stickyNav = () => {
    console.log(window.scrollY, navTop);
    if (window.scrollY > navTop) {
        nav.classList.add('sticky');
        document.querySelector('.container').style.marginTop = nav.offsetHeight + 'px';
    } else {
        nav.classList.remove('sticky');
        document.querySelector('.container').style.marginTop = 0;
    }
}

window.addEventListener('scroll', stickyNav);