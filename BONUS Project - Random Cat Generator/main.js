const endpoint = 'https://aws.random.cat/meow';
const body = document.querySelector('body');
const hidden = document.querySelector('.hidden');
const button = document.querySelector('input')

let catImage;

const getCat = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

const intCat = async () => {
    await getCat().then(data => { catImage = data.file });
    hidden.style.backgroundImage = `url('${catImage}')`;
}

const updateCat = async () => {
    body.style.backgroundImage = `url('${catImage}')`;
    await getCat().then(data => { catImage = data.file });
    console.log(catImage);
    hidden.style.backgroundImage = `url('${catImage}')`;
}

function randomCat(e){
    e.preventDefault();
    updateCat();
}

button.addEventListener('click', randomCat);

intCat();