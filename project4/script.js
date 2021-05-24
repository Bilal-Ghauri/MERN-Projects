//for first dropdown of countries
const countryOne = document.getElementById('countryOne');
//for total amount
const amountOne = document.getElementById('amountOne');
const countryTwo = document.getElementById('countryTwo');
const amountTwo = document.getElementById('amountTwo')
const swap = document.getElementById('swap');
const rate = document.getElementById('rate')

//function for checking countries values and fetching currencies from api changing the conversion rate of currencies
function calculate(){
    //getting the value of first country from dropdown
    const currencyOne = countryOne.value;
    //getting the value of seccond country from dropdown
    const currencyTwo = countryTwo.value;
    //fetching data from APIs
    fetch(`https://v6.exchangerate-api.com/v6/f2326d33544d9391625f5b32/pair/${currencyOne}/${currencyTwo}`)
    .then(res => res.json())
    .then(data => {
       //for conversion rate  
        const conversionRate = data.conversion_rate;
        //changing the value of amount two
        amountTwo.value = (amountOne.value * conversionRate).toFixed(2);
        rate.innerHTML = `${amountOne.value} ${currencyOne} = ${amountTwo.value} ${currencyTwo}`
    }
        
    )  
}

//
countryOne.addEventListener('change', calculate);
countryTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);
swap.addEventListener('click', function(){
    let temp = countryOne.value;
    countryOne.value = countryTwo.value;
    countryTwo.value = temp;
    calculate();
})


calculate()