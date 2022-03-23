const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 75; // 100px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let {offsetX: x, offsetY: y } = e;

    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,0,.5),
    ${xWalk}px ${yWalk * -1}px 0 rgba(0,255,255,.5)
    `;
}

hero.addEventListener('mousemove', shadow);

// My First Attemp
// const text = document.querySelector('h1');

// document.addEventListener('mousemove', e => {
//     xPrecent = Math.round(e.clientX / window.innerWidth * 100);
//     yPrecent = Math.round(e.clientY / window.innerHeight * 100);
//     text.style.textShadow = `${xPrecent - 50}px ${yPrecent - 50}px 0 rgba(0,0,0,.2)` 
// });

// function moveShadow(e) {
//     windowHeight = window.innerHeight;
//     windowWidth = window.innerWidth;
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//     xPrecent = Math.round(mouseX / windowWidth * 100);
//     yPrecent = Math.round(mouseY / windowHeight * 100);
//     text.style.textShadow = `${xPrecent - 50}px ${yPrecent - 50}px 0 rgba(0,0,0,.2)` 
// }