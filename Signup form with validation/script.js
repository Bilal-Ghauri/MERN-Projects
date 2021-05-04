const username = document.getElementById('username')
const email = document.getElementById('email')
const form = document.getElementById('form')
const password = document.getElementById('password')
const password1 = document.getElementById('password1')
const formcontrol = document.getElementById('formcontrol')

function showError (input , message) {
    const former = input.parentElement;
    former.className = "former error";

    const small = former.querySelector('small')
    small.innerHTML = message; 
}

function showSuccess(input){
    const former = input.parentElement;
    former.className= "former success"
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
    }else{
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

