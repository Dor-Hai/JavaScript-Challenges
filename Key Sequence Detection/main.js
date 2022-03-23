// My Solution
const password = 'iddqd';
let letterCount = 0;

const fireUnicorn = () => {
    if(letterCount === password.length){
        cornify_add();
        letterCount = 0;
    }
}

const checkPassword = e => {
    if(e.key === password[letterCount]){
        letterCount++;
        fireUnicorn();
        return;
    }
    if(e.key !== password[letterCount]){
        letterCount = 0;
    }
}

document.addEventListener('keyup', checkPassword)