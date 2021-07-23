const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('range')
const timestamp = document.getElementById('timeStamp')

function playVideo(){
    if(video.paused){
        video.play()
        play.innerHTML = '<i class="fa fa-pause fa-2x" >';
    }else{
        video.pause()
        play.innerHTML = '<i class="fa fa-play fa-2x" >'
    }
}

function stopVideo(){
    video.currentTime = 0 ; 
    video.pause();
}

function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-pause fa-2x" >';
        video.play()
    }else{
        play.innerHTML = '<i class="fa fa-play fa-2x" >'
        video.pause()
    }
}

function updateTimeProgress(){
    progress.value = (video.currentTime / video.duration) * 100 ;
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}

function progressValue(){
    video.currentTime = (progress.value * video.duration) / 100 ;
}


video.addEventListener('click', playVideo)
play.addEventListener('click', updateIcon)
stop.addEventListener('click', stopVideo)
video.addEventListener('timeupdate', updateTimeProgress);
progress.addEventListener('change', progressValue);