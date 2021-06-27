//balance for showing the total balance in DOM
const balance = document.getElementById('balance');
//credit variable for displaying credit amount
const credit = document.querySelector('.money.credit')
//debit variable for displaying debit amount 
const debit = document.querySelector('.money.debit')
//form for submit the value of description and amount 
const form = document.getElementById('form')
//button to add the value of description and amount 
const transaction = document.getElementById('addTransaction')
//variable for entering the reason of entry
const description = document.getElementById('description')
//variable for entering the amount of entry
const amount = document.getElementById('amount')
//div for showing elements in history
let history = document.getElementById('history')
//Array for all the transactions..
let transactions = [
];


//function to display all the transactions stored in transactions array.
function addTransaction(e){
    e.preventDefault();
    //check if values are empty of description and amount
    if(description.value.trim() && amount.value.trim()){
        //objects for storing user entries for displaying in UI
        let person ={
            id: Math.floor(Math.random()*100000),
            name : description.value,
            money : amount.value,
        }
        //pushing the user entries in transactions arrays.
        transactions.push(person)
        //clear the description and amount values afteer enter the entries
        description.value ="";
        amount.value = "";
    //else for checking if amount and description values are not available then showing an alert as an error
    }else{
        alert("Please enter transaction/Amount")
    }

    //function for displaying all the values. 
    init()
}

//function to delete a transaction from history and update total,credit,debit balance
function deleteTransaction(id){
    //filter the transaction whose id not matched with the id and stored in the transactions array.
    transactions = transactions.filter(transaction => transaction.id !== id)
    init()
}



//function to show transaction in history if credit and debit
function showTransactions(transaction){
    //sign for debit and credit + for credit and null for debit because debit value always lying as negative value
    let sign = transaction.money > 0 ? "+" : "";
    //creating a child List item for history for showing the transaction enter by the user to the history
    let child = document.createElement('li')
    //add class to child element which is li depending on amount of transaction of positive then credit and negative for debit
    child.classList.add(transaction.money > 0 ? "credit" : "debit" )
    //adding the innerHTML for child
    child.innerHTML = `
    ${transaction.name}<span>${sign}${transaction.money}</span>
    <button class="dlt-btn" onclick=deleteTransaction(${transaction.id})>X</button>
    `
    //appending the child element to history
    history.appendChild(child)
}

//main function who display all the data when invoked.
function init(){
    //clear all the elements of history and loop on transactions array to display transaction in the history again
    history.innerHTML = "";
    //loop through all the elements of transactions array
    transactions.forEach(showTransactions)
    localStorage.setItem("transactions" , JSON.stringify(transactions))
    //function for showing all the balance, credit and debit
    showBalance()
}


//function for showing all the balance, credit and debit
function showBalance(){
    //creting an array by mapping the transactions array and all the balance and stored in money array for furthur processing/looping.
    let money = transactions.map(item => item.money);
    //loop through the money array to calculate the whole and stored it in a variable by using arrays reduce method
    let bal = money.reduce((acc , item) => acc+= +item,0).toFixed(2)
    //filter all the positive elements stores in money array 
    let credits = money.filter(item => item >0 ).reduce((acc , item) => acc+= +item,0).toFixed(2)
    //filter all the negative elements stores in money array 
    let debits = money.filter(item => item < 0 ).reduce((acc , item) => acc+= +item,0).toFixed(2);
    //add balance inneraHTML from the bal variable
    balance.innerHTML = `${bal}`
    //add credit innerHTML from the credits variable
    credit.innerHTML = `$+${credits}`
    //add debit innerHTML from the credits variable
    debit.innerHTML =`$${debits}`

}


//event listener for add transaction button to add the value of description and amount
transaction.addEventListener('click', addTransaction)