const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
let timeStamp = document.getElementById('timestamp');


function updateProgress(){
    video.currentTime = (progress.value * video.duration) / 100;
}

function updateTimeProgress(){
    progress.value = (video.currentTime / video.duration) * 100;
    

    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }
    timeStamp.innerHTML = `${mins}:${secs}`;
}
//function for toggle on video click for play and click for pause
function toggleUpdate(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//finction for updating icons of play and pause buttons
function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
}

// function for playing video when clicked on  play button 
function videoPlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//finction for stoping video when clicked on stop button and stat video from the beginning after stop.
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}


//eventlistener for pause and play when clicked on screen
video.addEventListener('click' , toggleUpdate);

//event listener for updating the icon of play button when clicked on screen.
video.addEventListener('play' , updateIcon);
//finction for pause buttom
video.addEventListener('pause' , updateIcon);
//function on play button when clicked the play button video will start.
play.addEventListener('click' , videoPlay);
//function on stop button when clicked the stop button video will stop and paused.
stop.addEventListener('click' , stopVideo)
//function for updating progress when time updates/
video.addEventListener('timeupdate' , updateTimeProgress)

progress.addEventListener('change', updateProgress)