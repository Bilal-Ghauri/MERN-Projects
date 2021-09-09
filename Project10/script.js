const songTitle = document.getElementById('songTitle')
const image = document.querySelector('img')
const previousSong = document.getElementById('backward')
const songPlay = document.getElementById('play')
const nextSong = document.getElementById('forward')
const range = document.getElementById('range')
const container = document.getElementById('container')
const rangeClass = document.getElementById('range-class')
let gaana = document.getElementById('audio')


let songs = ['Billian Billian','Ertugrul','Na Na Na Na','National Anthem','Tera Bina']

let songIndex = 0;
loadTrack(songs[songIndex])

function loadTrack(song){
    songTitle.innerHTML = `${song}`;
    image.src = `images/${song}.jpg`
    gaana.src = `songs/${song}.mp3`

}

function playSong(){
    if(gaana.paused){
        songPlay.innerHTML = `<i class="fas fa-pause"></i>`;
        gaana.play()
        container.classList.add('play')
    }else{
        songPlay.innerHTML = `<i class="fas fa-play"></i>`
        gaana.pause()
        container.classList.remove('play')
        
    }
}

function updateTime(e){
    const width = this.clientWidth;
    const clickLocation = e.offsetX;
    const duration = gaana.duration;

    gaana.currentTime = clickLocation / width * duration;
}

function timeUpdate(e){
    let {duration , currentTime} = e.srcElement;
     
    let percentageTime = (currentTime / duration )*100;
    range.style.width = `${percentageTime}%`
}

function songNext(){
    songIndex++;
    if(songIndex > songs.length-1){
        songIndex = 0;
    }
    loadTrack(songs[songIndex])
    playSong()
}

function songPrevious(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length-1
    }
    loadTrack(songs[songIndex])
    playSong()
}


songPlay.addEventListener('click', playSong)
nextSong.addEventListener('click', songNext)
previousSong.addEventListener('click', songPrevious)
gaana.addEventListener('timeupdate', timeUpdate)
rangeClass.addEventListener('click', updateTime)
gaana.addEventListener("ended", ()=>{
    songIndex++;
    songNext()
})