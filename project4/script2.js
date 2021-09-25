const country = document.getElementById('country')
const coRates = document.getElementById('coRates')
const heading  = document.getElementById('h2')

function conversion(){
    const countryVal = country.value;
    heading.innerHTML = `1 ${countryVal} Is Equals to :`
    fetch(`https://v6.exchangerate-api.com/v6/98f86149850e2234a78d914f/latest/${countryVal}`)
    .then(res => res.json())
    .then(data => {
        const currencyRate = data.conversion_rates;
        coRates.innerHTML = ''
        for(let key in currencyRate){
            let child = document.createElement('h4')
            for(let i=0 ; i<country.length ; i++){
                if(country[i].value === key){
                    child.innerHTML = `${country[i].innerHTML} : ${currencyRate[key]} ${key}`
                }
            }
            coRates.appendChild(child)
            
        }
    })
}

country.addEventListener('change', conversion)
conversion()
