const addUser = document.getElementById('add-user')
const doubleBalance = document.getElementById('double')
const millionire = document.getElementById('millionire')
const sortByWealth = document.getElementById('sort')
const totalWealth = document.getElementById('total')
const user = document.getElementById('user')

let data = [];
async function getRandomUser(){
    let res = await fetch('https://randomuser.me/api/');
    let data =await res.json();
    let user = data.results[0].name;

    let userName = {
        name:`${user.title} ${user.first} ${user.last}`,
        balance: (Math.random()*1000000).toFixed(2),
    }
    addTheUser(userName)
}
function addTheUser(userName){
    data.push(userName);
    updateDOM()
}
function updateDOM(userName = data){;
    user.innerHTML = '<h2><strong>User</strong>Wealth</h2>';

    userName.forEach(userid =>{
        let child = document.createElement('div');
        child.classList.add('user')
        child.innerHTML = `<strong>${userid.name}</strong>${userid.balance} `;
        user.appendChild(child)
    })
}
function doubleMoney(){
    data = data.map(bal =>{
        return {...bal, balance: bal.balance*2}
    })
    updateDOM()
}
function filterMillionires(){
    data = data.filter(use => use.balance>=1000000)
    updateDOM()
}
function sortWealth(){
    data = data.sort((a,b) => b.balance - a.balance)
    updateDOM()
}
function totalMoney(){
    updateDOM();
    let sum = (data.reduce((acc , users)=> (acc+= +users.balance),0)).toFixed(2)
    let child = document.createElement('div');
    child.classList.add('totalMoney');
    child.innerHTML = `<h3>Total Wealth: ${sum}</h3>`;
    user.appendChild(child)
}


addUser.addEventListener('click', getRandomUser);
doubleBalance.addEventListener('click' , doubleMoney)
millionire.addEventListener('click', filterMillionires)
sortByWealth.addEventListener('click', sortWealth);
totalWealth.addEventListener('click', totalMoney)
