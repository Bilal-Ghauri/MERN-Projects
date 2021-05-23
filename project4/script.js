const countryOne = document.getElementById('countryOne');
const amountOne = document.getElementById('amountOne');
const countryTwo = document.getElementById('countryTwo');
const amountTwo = document.getElementById('amountTwo')
const swap = document.getElementById('swap');
const rate = document.getElementById('rate')

function calculate(){
    const currencyOne = countryOne.value;
    const currencyTwo = countryTwo.value;

    
}




countryOne.addEventListener('change', calculate);
countryTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate)
amountTwo.addEventListener('input', calculate)
