const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        x: dropdownCoords.x - navCoords.x,
        y: dropdownCoords.y - navCoords.y,
    }

    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('left', `${coords.x}px`);
    background.style.setProperty('top', `${coords.y}px`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', handleEnter);
    trigger.addEventListener('mouseleave', handleLeave);
});



















// My Solution
// const menuItems = document.querySelectorAll('.cool > li');
// const dropdownBackground = document.querySelector('.dropdownBackground');

// function showDropdown() {
//     this.classList.add('trigger-enter', 'trigger-enter-active');
//     let dropdown = this.querySelector('.dropdown').getBoundingClientRect();
//     dropdownBackground.style.width = `${dropdown.width}px`;
//     dropdownBackground.style.height = `${dropdown.height}px`;
//     dropdownBackground.style.top = `${dropdown.y}px`;  
//     dropdownBackground.style.left = `${dropdown.x}px`;  
//     dropdownBackground.classList.add('open');
// }

// function unshowDropdown() {
//     this.classList.remove('trigger-enter', 'trigger-enter-active');
//     dropdownBackground.classList.remove('open');
// }

// menuItems.forEach(item => {
//     item.addEventListener('mouseenter', showDropdown);
//     item.addEventListener('mouseleave', unshowDropdown);
// });