function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

// My First Attempt

const images = document.querySelectorAll('img');

function slideIn(e) {
    images.forEach(image => {
        if(window.scrollY > image.offsetTop - 500){
            image.classList.add('active');
        }
    })
    
}

window.addEventListener('scroll', debounce(slideIn, 10), {passive: true});

