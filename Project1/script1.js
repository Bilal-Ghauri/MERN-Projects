const username = document.getElementById('username')
const email = document.getElementById('email')
const form = document.getElementById('form')
const password = document.getElementById('password')
const password1 = document.getElementById('password1')
const formcontrol = document.getElementById('formcontrol')

//function for every input field 
function checkRequired(array){
    array.forEach(function(input){
        if(input.value === ""){
            showError(input , `${capitalInput(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

//function for captalized the first letter of input. 
function capitalInput(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1) ;
}

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
    checkRequired([username , email , password , password1]);
})
