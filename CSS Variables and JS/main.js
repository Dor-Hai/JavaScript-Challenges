const controllerSpacing = document.querySelector("input[data-type='spacing']");
const controllerBlur = document.querySelector("input[data-type='blur']");
const controllerColor = document.querySelector("input[data-type='color']");

function changeValue() {
    const val = this.value;
    const image = document.querySelector('img');
    switch(this){
        case controllerSpacing:
            image.style.setProperty('--spacing', `translate(${val}%, ${val}%)`);
            break;
        case controllerBlur:
            image.style.setProperty('--blur', `blur(${val}px)`);
            break;
        case controllerColor:
            image.style.setProperty('--color', val);
            break;
    }
}

controllerSpacing.addEventListener('input', changeValue);
controllerBlur.addEventListener('input', changeValue);
controllerColor.addEventListener('input', changeValue);