const customTextBtn = document.getElementById('custom-text-btn');
const mainContainer = document.getElementById('main');
const toggleContainerCloseBtn = document.getElementById('close');
const voicesDropDown = document.getElementById('voices');
const textInput = document.getElementById('text');
const textReadBtn = document.getElementById('read');

let data = [
    {
        img: './images/angry.jpeg',
        text: 'I am Angry!'
    },
    {
        img: './images/eating.jpeg',
        text: 'I am Eating!'
    },
    {
        img: './images/grandma.jpeg',
        text: 'I am in grandma House!'
    },
    {
        img: './images/home.jpeg',
        text: 'I am at Home!'
    },
    {
        img: './images/hundting.jpeg',
        text: 'I am angry!'
    },
    {
        img: './images/hungry.jpeg',
        text: 'I am too Hungry!'
    },
    {
        img: './images/playing.jpeg',
        text: 'I am Playing Game!'
    },
    {
        img: './images/sleeping.jpeg',
        text: 'I want to go to sleep!'
    },
    {
        img: './images/reading.jpeg',
        text: 'I am reading a book!'
    },
    {
        img: './images/driving.jpeg',
        text: 'I m driving a Car!'
    },
    {
        img: './images/working.jpeg',
        text: 'I m working in Office!'
    },
    {
        img: './images/listening.jpeg',
        text: 'I m listening a song!'
    },
    {
        img: './images/writing.jpeg',
        text: 'I m writing a Book!'
    },
]

data.forEach(showContent)

function showContent(content){
    let div = document.createElement('div');
    div.classList.add('box')

    div.innerHTML = `
        <img src="${content.img}" alt= " " />    
        <p>${content.text}
    `
    mainContainer.appendChild(div);
}