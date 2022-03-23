const video = document.querySelector('video');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const back = document.querySelector('button[data-skip="-10"]');
const forward = document.querySelector('button[data-skip="25"]');

function toggleVideo(){
    video.paused ? video.play() : video.pause();
    video.paused ? toggle.innerHTML = '►' : toggle.innerHTML = '| |';
}

function changeVolume(){
    video.volume = this.value;
}

function changePlaybackRate(){
    video.playbackRate = this.value;
}

function moveTimeline(e){
    const width = progress.offsetWidth;
    const current = e.offsetX;
    const progressBarPercentage = current / width * 100;
    progressFilled.style.flexBasis = `${Math.round(progressBarPercentage)}%`;
    const videoDuration = video.duration;
    const videoCurrentTime = videoDuration * progressBarPercentage / 100;
    video.currentTime = videoCurrentTime;
}

function moveProgressBar(){
    if(video.paused === false){
        const videoDuration = video.duration;
        const videoCurrentTime = video.currentTime;
        const videoCurrentPercentage = videoCurrentTime / videoDuration * 100;
        progressFilled.style.flexBasis = `${videoCurrentPercentage}%`;
    } 
}

function skip(){
    video.currentTime = video.currentTime + Number(this.dataset.skip);
}

function mute(e) {
    if(e.key === 'm'){
        video.muted = video.muted ? false : true;
    }
}

function videoInt(){
    video.addEventListener('click', toggleVideo);
    toggle.addEventListener('click', toggleVideo);
    volume.addEventListener('input', changeVolume);
    playbackRate.addEventListener('input', changePlaybackRate);
    progress.addEventListener('click', moveTimeline);
    back.addEventListener('click', skip);
    forward.addEventListener('click', skip);
    document.addEventListener('keydown', mute);
    setInterval(moveProgressBar, 500);
}

videoInt();

