const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    const text = this.item.value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], plateList){
    plateList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
        <button type="button" data-index="${i}" class="delete">X</button>
        </li>
        `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function deleteItem(e){
    if(!e.target.matches('button')) return;
    const index = e.target.dataset.index;
        items.splice(index, 1);
        populateList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
itemsList.addEventListener('click', deleteItem);
populateList(items, itemsList);



// My Solution
// const addItems = document.querySelector('.add-items');
// const itemsList = document.querySelector('.plates');
// const items = [];

// function getItems(){
//     const storageItems = localStorage.getItem('foodList').split(',');
//     storageItems.forEach(i => {
//         items.push(i);
//         itemsList.innerHTML += `<li>${i}</li>`
//     })
// }

// function addItem(e){
//     e.preventDefault();
//     items.push(this.item.value);
//     itemsList.innerHTML += `<li>${this.item.value}</li>`
//     localStorage.setItem('foodList', items);
//     this.reset();
// }

// getItems();
// addItems.addEventListener('submit', addItem)