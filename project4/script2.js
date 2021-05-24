const country = document.getElementById('country')




function conversion(){
    const countryVal = country.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/f2326d33544d9391625f5b32/latest/${countryVal}`)
    .then(res => res.json())
    .then(data => {
        const currencyRate = data.conversion_rates;
        const rates = JSON.stringify(currencyRate);
        const coRates = document.getElementById('coRates');
        coRates.innerHTML = rates;
    })
}



country.addEventListener('change', conversion)
conversion()