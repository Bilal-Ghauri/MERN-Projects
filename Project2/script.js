const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat');
let count = document.getElementById('count');
let total = document.getElementById('total');
let movie = document.getElementById('movie');

//function for getting the value from the local storage,
populateUI();
let ticketPrice = +movie.value;
//function for selectedseats and index of seats to be store in localstorage and changing the value of count and total price of movies.
function upDataSelectedCount(){
    //for selected seats
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //map function for the index of selected seats from the array of seats.
    const seatsIndex = [...selectedSeats].map(seat =>{
        return [...seats].indexOf(seat);
    })
    //count the selectedseats which is selected by the user and cahnge the count for seats [how much seats are selected].
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;
    //for set the items in localstorage 
    //json stringify convert an array into comma separated values.
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex) );
}

//conainer for selecting seats when the event 'click' occurs.
container.addEventListener('click', function(e){
    e.preventDefault();
    //for seats which is not occupied when click on it it will change to selected seats and toggle element used for deselect it if click again on it.
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        //funtion for counting the selected seats and seatsindexes and change the count of seats and total price for seats.
        upDataSelectedCount();
    }
})
//function for set the movie data in localstorage
function setMovieData(movieIndex , moviePrice){
    localStorage.setItem('selectedmovieIndex' , movieIndex);
    localStorage.setItem('selectedmovieprice' , moviePrice);
}
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat , index) =>{
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }
    const selectedmovieIndex = localStorage.getItem('selectedmovieIndex');
    if(selectedmovieIndex !== null){
        movie.selectedIndex = selectedmovieIndex;
    }
}

//function for selecting the price for movie when the movie changes for the list
movie.addEventListener('change', e=>{
    //ticketprice shows the price for each movie which is selected.
    ticketPrice = +e.target.value;
    //selectIndex is a default function for check the index of element in a 'option' of html element.
    setMovieData(e.target.selectedIndex, e.target.value);
    //funtion for changing the price of movie when the user select a movie.
    upDataSelectedCount();
})
//for changing the seats number and the total price of seats.
upDataSelectedCount();

