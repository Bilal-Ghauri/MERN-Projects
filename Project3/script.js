const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function toggleUpdate(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}


video.addEventListener('click' , toggleUpdate);
video.addEventListener('play' , updateIcon);
video.addEventListener('stop' , updateIcon);
