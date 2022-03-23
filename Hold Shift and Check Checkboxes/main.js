const items = document.querySelectorAll('input');
const arr = [...items]; 
let clickNum = 0;
let firstClicked, secondClicked;

function click(that){
    firstClicked = that;
    clickNum = 1;
}

function shiftClick(that){
    if(firstClicked && clickNum === 1){
        secondClicked = that;
        firstIndex = arr.indexOf(firstClicked);
        secondIndex = arr.indexOf(secondClicked);
        const checked = (firstIndex < secondIndex) ? arr.slice(firstIndex, secondIndex+1) : arr.slice(secondIndex+1, firstIndex) ;
        checked.forEach(check => {
            check.checked = true;
        })
        clickNum = 0;
    } else {
        firstClicked = that;
        clickNum = 1;
    }
}

function anyClick(e){   
    if(this.checked){
        (e.shiftKey === false) ? click(this) : shiftClick(this);
    }
}

items.forEach(item => {
    item.addEventListener('click', anyClick);
})