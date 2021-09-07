const moviesDropDown  = document.getElementById('movies')
const seatContainer = document.getElementById('seat-container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const video = document.getElementById('movie')
const numberOfSeats = document.getElementById('number')
const priceOfSeats = document.getElementById('price')

let price = +moviesDropDown.value;
let source = moviesDropDown.getAttribute('videoTagSrc')
let index  = 0;
let embededVideo = [    'https://www.youtube.com/embed/FzlWYkckA24' , 
                        'https://www.youtube.com/embed/wPxqcq6Byq0' ,
                        'https://www.youtube.com/embed/jriWMr1rIiM' , 
                        'https://www.youtube.com/embed/TNIB7TEN_aE' ,
                        'https://www.youtube.com/embed/VBM6TxgeIHY' ,
                    ]

populateUI()

function videosSrc(input){
    index = input;
    video.src = embededVideo[index]
}

function populateUI(){
    let localSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if(localSeats !== null && localSeats.length > 0){
        seats.forEach((seat , index) =>{
            if(localSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }
    let localMovieIndex = localStorage.getItem('movieIndex')
    if(localMovieIndex !== null){
        moviesDropDown.selectedIndex = localMovieIndex;
    }

    let movieMoney = localStorage.getItem('moviePrice')
    price = movieMoney;
    videosSrc(localMovieIndex)
    selectedSeats()

}

function populateVideoIndex(value , price){
    localStorage.setItem('movieIndex' , value)
    localStorage.setItem('moviePrice' , price)
}

function selectedSeats(){
    let select = seatContainer.querySelectorAll('.row .seat.selected')
    let seatsIndex = [...select].map(seat=>{
        return [...seats].indexOf(seat)
    })

    console.log(seatsIndex);
    let selectedSeat = seatContainer.querySelectorAll('.seat.selected').length;
    let seatsPrice = selectedSeat * price;
    
    numberOfSeats.innerHTML = selectedSeat;
    priceOfSeats.innerHTML = seatsPrice;

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
}



seatContainer.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !(e.target.classList.contains('occupied'))){
        e.target.classList.toggle('selected')
    }
    selectedSeats()
})
moviesDropDown.addEventListener('change' , (e)=>{
    price = +e.target.value;
    videosSrc(e.target.selectedIndex)
    populateVideoIndex(e.target.selectedIndex, price )
    selectedSeats(e)
})
