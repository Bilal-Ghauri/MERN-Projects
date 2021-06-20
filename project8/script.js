const searchItem = document.getElementById('search-item')
const search = document.getElementById('search')
const generate = document.getElementById('generate')
const mealHeading = document.getElementById('meal-heading')
const meals = document.getElementById('meals')
const selectedMeal = document.getElementById('selected-meal')

function upperCase(meal){
    return meal.charAt(0).toUpperCase() + meal.slice(1)
}

function searchMeal(e){
    e.preventDefault();
    
    let meal = searchItem.value;

    if(meal.trim()){
        //fetching meals from the API
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data =>{

            mealHeading.innerHTML = `<h2>Search results for ${upperCase(meal)}!`;
            if(data.meals === null){
                mealHeading.innerHTML = `<h2>No result found for ${upperCase(meal)}!`;
                meals.innerHTML = "";
                selectedMeal.innerHTML ="";
            } else{
                meals.innerHTML = data.meals.map( meal => `
                            <div class = "meal">
                                <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                                <div class="meal-info" data-mealID="${meal.idMeal}">
                                    <h3>${meal.strMeal}</h3>
                                </div>
                            </div>
                        `
                )
                .join(' ')
            }
        });
        searchItem.value = "";
    }else{
        meals.innerHTML="";
        alert('Please enter the meal')
    } 
}

function getMealId(mealId){
    let id = mealId;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data =>{
        let meal = data.meals[0];
        console.log(meal);
        let ingredients = [];

        for(let i=1; i<=20 ; i++){
            if(meal[`strIngredient${i}`]){
                ingredients.push(`${meal[`strIngredient${i}`]} : ${meal[`strMeasure${i}`]}`);
            }
        }
        selectedMeal.innerHTML=`
            <h1>${meal.strMeal}</h1>
            <h2>Meal Region : ${meal.strArea} </h2>
            <div class="image">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            </div>
            <div class="instruction">
                <h2>Recipe Instructions:</h2>
                ${meal.strInstructions}
            </div>
            <h2>Ingredients:</h2>
            <div class="ingredients">
                ${ingredients.map(ingredient=> `<li>${ingredient}</li>`).join(' ')}
            </div>
        `
        mealHeading.innerHTML = "";
        meals.innerHTML ="";
    } 
    );
}

search.addEventListener('click', searchMeal)
meals.addEventListener('click', e=>{
    const mealInfo = e.path.find(item =>{
        if(item.classList){
            return item.classList.contains('meal-info')
        }else{
            return false;
        }
    })

    if(mealInfo){
        let mealId = mealInfo.getAttribute('data-mealID')
        getMealId(mealId)
    }
})
