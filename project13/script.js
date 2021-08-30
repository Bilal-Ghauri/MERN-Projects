const addCard = document.getElementById('add-card');
const clearCard = document.getElementById('clear-card');
const cardContainer = document.getElementById('main-container');
const previousBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cancelNewCard = document.getElementById('new-card');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer')
const submitBtn = document.getElementById('submit-btn')
const totalCards = document.getElementById('totalCardsNav')
const addCardContainer = document.getElementById('add-new-card')
let index = 0;

let cards = []
let cardArray = []
populate();

function populate(){
    let data = JSON.parse(localStorage.getItem('cards'))
    if(data !== null){
        cardArray = data;
    }else{
        cardArray = [];
    }
}

function nextCardShow(){
    cards[index].className = 'card left'
    index++; 
    if(index > cards.length - 1){
        index = 0;
    }
    let card = cards[index];
    card.className = 'card active';
    cardContainer.innerHTML ='';
    cardContainer.appendChild(card)
    showCardNav()
}
function addNewCard(){
    addCardContainer.classList.add('active');
}

function previousCardShow(){
    cards[index].className = 'card left'
    index--; 
    if(index < 0){
        index = cards.length - 1;
    }
    let card = cards[index];
    card.className = 'card active';
    cardContainer.innerHTML ='';
    cardContainer.appendChild(card)
    showCardNav()
}


function showCardNav(){
    totalCards.innerHTML = `${index + 1}/${cards.length}`
}

function saveDataCard(array){
    localStorage.setItem('cards' , JSON.stringify(array))
    window.location.reload();
}

function getCard(data , index){
    let card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
                        <div class="inside-card">
                            <div class="card-front">${data.question}</div>
                            <div class="card-back">${data.answer}</div>
                        </div>
    `
    cards.push(card)
    if(index === 0){
        card.classList.add('active')
        cardContainer.appendChild(card)
    }
    showCardNav()
}

function getCards(){
    cardContainer.innerHTML = ''
    if(cardArray !== null){
        cardArray.forEach((data , index)=> getCard(data , index))
    }
}

cardContainer.addEventListener('click', ()=>{
    cardContainer.firstElementChild.classList.toggle('show-answer')
})

getCards();

nextBtn.addEventListener('click', nextCardShow)
previousBtn.addEventListener('click', previousCardShow)
addCard.addEventListener('click', addNewCard)
cancelNewCard.addEventListener('click', ()=>{addCardContainer.classList.remove('active')})
submitBtn.addEventListener('click', e=>{
    let question = questionInput.value;
    let answer = answerInput.value;
    if(question && question.trim() && answer && answer.trim()){
        let cardInput = {
            question,
            answer,
        }
        console.log(cardInput);
        cardArray.push(cardInput)
        
    }else{
        alert('PLease enter Question/Answer')
    }

    questionInput.value = '';
    answerInput.value = ''
    addCardContainer.classList.remove('active')
    saveDataCard(cardArray)
})

clearCard.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.reload();
})