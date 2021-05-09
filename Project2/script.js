const container = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count');
let total = document.getElementById('total');
const movie = document.getElementById('movie');

let ticketPrice = +movie.value;

function upDataSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat =>{
        return [...seats].indexOf(seat);
    })
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex) );
}


container.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        upDataSelectedCount();
    }
})

movie.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    upDataSelectedCount();
})

