const settingsContainer = document.getElementById('settingsContainer');
const time = document.getElementById('time')
const score = document.getElementById('score')
const word = document.getElementById('word')
const inputWord = document.getElementById('inputWord')
const status = document.getElementById('status')
const finalScore = document.getElementById('finalScore')
const playBtn = document.getElementById('playBtn')
const gameOver = document.getElementById('gameOver')
const settingsBtn = document.getElementById('settingsBtn')
const settingsDropDown = document.getElementsByClassName('settingsDropDown')[0];

console.log(settingsDropDown);
inputWord.focus()
let timer = 5;
let scored= 0;
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';
settingsContainer.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';


let timerInterval = setInterval(timerValue , 1000)

function timerValue(){
    timer--; 
    if(timer === 0){
        clearInterval(timerInterval);
        gameOver.classList.add('hide');
        finalScore.innerHTML = scored;
    }
    time.innerHTML = timer;
}

async function fetchWord(){
    resp = await fetch(`https://random-words-api.vercel.app/word`)
    data = await resp.json();
    return data[0].word.toLowerCase(); 
}

async function renderWord(){
    let renderingWord = await fetchWord();
    word.innerHTML = renderingWord;
    localStorage.getItem('difficulty')
    if(difficulty === 'fast'){
        time.innerHTML = 2;
        timer = 2;
    }else if(difficulty === 'medium'){
        time.innerHTML = 3;
        timer = 3;
    }else{
        timer= 5;
    }
    status.innerHTML = ''
}

renderWord()

inputWord.addEventListener('input', e=> {
    if(e.target.value === word.innerHTML){
        status.innerHTML = 'Correct!'
        timer = 5;
        inputWord.value = '';
        renderWord()
        scored++;
        score.innerHTML = scored;
    }
})

settingsContainer.addEventListener('change' , e=>{
    
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty)
    gameOver.classList.contains('hide') ? gameOver.classList.remove('hide') : null;
    clearInterval(timerInterval)
    renderWord()
    setInterval(timerValue , 1000);
    if(difficulty === 'fast'){
        time.innerHTML = 2;
        timer = 2;
    }else if(difficulty === 'medium'){
        time.innerHTML = 3;
        timer = 3;
    }else if(difficulty === 'easy'){
        time.innerHTML = 5;
        timer= 5;
    }
    
})

settingsBtn.addEventListener('click', ()=>{
    settingsDropDown.classList.toggle('gone');
} );