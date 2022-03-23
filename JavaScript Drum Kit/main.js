const clap = new Audio('./assets/audio/clap.wav');
const hiHat = new Audio('./assets/audio/hi-hat.wav');
const kick = new Audio('./assets/audio/kick.wav');
const snare = new Audio('./assets/audio/snare.wav');
const bass = new Audio('./assets/audio/bass.wav');
const cat = new Audio('./assets/audio/cat.mp3');
const aye = new Audio('./assets/audio/איי.mp3');
const awa = new Audio('./assets/audio/אווה.mp3');
const ach = new Audio('./assets/audio/אך.mp3');
const maniak = new Audio('./assets/audio/מניאק.mp3');

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    document.addEventListener( 'keydown', (e) => {
        switch(e.key) {
            case 'a':
                clap.load();
                clap.play();
                break;
            case 's':
                hiHat.load();
                hiHat.play();
                break;
            case 'd':
                kick.load();
                kick.play();
                break;
            case 'f':
                snare.load();
                snare.play();
                break;
            case 'g':
                bass.load();
                bass.play();
                break;
            case 'h':
                cat.load();
                cat.play();
                break;
            case 'z':
                aye.load();
                aye.play();
                break;
            case 'x':
                awa.load();
                awa.play();
                break;
            case 'c':
                ach.load();
                ach.play();
                break;
            case 'v':
                maniak.load();
                maniak.play();
                break;
        }
        if(key.dataset.key === e.key){
            key.classList.toggle('active');
            setTimeout(() => { key.classList.toggle('active'); }, 200);
        }
    });

    key.addEventListener( 'click', (e) => {
        switch(key.dataset.key) {
            case 'a':
                clap.load();
                clap.play();
                break;
            case 's':
                hiHat.load();
                hiHat.play();
                break;
            case 'd':
                kick.load();
                kick.play();
                break;
            case 'f':
                snare.load();
                snare.play();
                break;
            case 'g':
                bass.load();
                bass.play();
                break;
            case 'h':
                cat.load();
                cat.play();
                break;
            case 'z':
                aye.load();
                aye.play();
                break;
            case 'x':
                awa.load();
                awa.play();
                break;
            case 'c':
                ach.load();
                ach.play();
                break;
            case 'v':
                maniak.load();
                maniak.play();
                break;
        }
            key.classList.toggle('active');
            setTimeout(() => { key.classList.toggle('active'); }, 200);
    });

});