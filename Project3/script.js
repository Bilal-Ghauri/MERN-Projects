const video = document.getElementById('video')
const nav = document.getElementById('nav')
const playVideo = document.getElementById('play')
const stopVideo = document.getElementById('stop')
const timeStamp = document.getElementById('timeStamp')
const fullScreen = document.getElementById('fullScreen')
const navStatus = document.getElementById('status');

function updateNav(){
    let {duration , currentTime} = video;
    let percentage  = (currentTime / duration) * 100;
    nav.style.width = `${percentage}%`
}

function updateTimeStamp(){
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

function navClicker(e){
    let width = this.clientWidth;
    let total = e.offsetX;
    let duration = video.duration;

    video.currentTime = total / width * duration;
}

playVideo.addEventListener('click', (e)=>{
    e.preventDefault();
    if(video.paused){
        video.play()
        playVideo.innerHTML = '<i class="fas fa-pause"></i>'
    }else{
        video.pause()
        playVideo.innerHTML = '<i class="fas fa-play"></i>'
    }
})
video.addEventListener('click', (e)=>{
    e.preventDefault();
    if(video.paused){
        video.play()
        playVideo.innerHTML = '<i class="fas fa-pause" ></i>'
    }else{
        video.pause()
        playVideo.innerHTML = '<i class="fas fa-play" ></i>'
    }
})

stopVideo.addEventListener('click', ()=>{
    video.currentTime = 0;
    video.pause()
    playVideo.innerHTML = '<i class="fas fa-play"></i>';
})

video.addEventListener('timeupdate' , ()=>{
    updateNav();
    updateTimeStamp();
})

navStatus.addEventListener('click', navClicker)

