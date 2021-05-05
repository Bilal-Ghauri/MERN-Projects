const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

//function for checking error if input field is empty
function showError(input , message){
    const formcontrol = input.parentElement; 
    formcontrol.className = 'formcontrol error';

    const small = formcontrol.querySelector('small')
    small.innerText = message;
}

//function if input fileds is not empty
function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formcontrol success'
}
//function for checking all input field using an array
function checkRequired(subarray){
    subarray.forEach ( function (input){
        if(input.value === ""){
            showError(input ,`**${input.id} is required**`)
        }else{
            showSuccess(input)
        }
    }
    )}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired( [firstname,lastname,email,password,password1] );

})