const panels = document.querySelectorAll('.panels');

function toggleActive(){
    this.classList.toggle('active');
    panels.forEach(p => {
        if(p !== this){
            p.classList.remove('active');
        }
    })
}

panels.forEach(panel => panel.addEventListener('click', toggleActive));
