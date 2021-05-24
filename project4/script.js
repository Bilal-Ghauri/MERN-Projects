const countryOne = document.getElementById('countryOne');
const amountOne = document.getElementById('amountOne');
const countryTwo = document.getElementById('countryTwo');
const amountTwo = document.getElementById('amountTwo')
const swap = document.getElementById('swap');
const rate = document.getElementById('rate')

function calculate(){
    const currencyOne = countryOne.value;
    const currencyTwo = countryTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/f2326d33544d9391625f5b32/pair/${currencyOne}/${currencyTwo}`)
    .then(res => res.json())
    .then(data => {
        
        const conversionRate = data.conversion_rate;
        amountTwo.value = (amountOne.value * conversionRate).toFixed(2);
        rate.innerHTML = `${amountOne.value} ${currencyOne} = ${amountTwo.value} ${currencyTwo}`
    }
        
    )

    
}




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