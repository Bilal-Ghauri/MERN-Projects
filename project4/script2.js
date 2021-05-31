const country = document.getElementById('country')




function conversion(){
    const countryVal = country.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/98f86149850e2234a78d914f/latest/${countryVal}`)
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