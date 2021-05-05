const username = document.getElementById('username')
const email = document.getElementById('email')
const form = document.getElementById('form')
const password = document.getElementById('password')
const password1 = document.getElementById('password1')
const formcontrol = document.getElementById('formcontrol')

//checking if input fields are empty.
function showError (input , message) {
    const former = input.parentElement;
    former.className = "former error";

    const small = former.querySelector('small')
    small.innerHTML = message; 
}
//checking if input field are not empty.
function showSuccess(input){
    const former = input.parentElement;
    former.className= "former success"
}

//function for checking the email is valid.
function isEmailValid(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ""){
        showError(username , "**Username is required**")
    }else{
        showSuccess(username)
    }
    if(email.value === ""){
        showError(email , "**Email is required**")
    }else if(!isEmailValid(email.value)){
        showError(email , "**Please put a valid E-mail**")
    }
    else{
        showSuccess(email)
    }
    if(password.value === ""){
        showError(password , "**Password is required**")
    }else{
        showSuccess(password)
    }
    if(password1.value === ""){
        showError(password1 , "**Confirm Password is required**")
    }else{
        showSuccess(password1)
    }
})

