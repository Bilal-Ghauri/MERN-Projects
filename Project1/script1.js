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
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test ( input.value.trim() ) ) {
        showSuccess(email);
    }else{
        showError(email,"Please put a valid E-mail.");
    }
}
//checking the length of username,
function checkLength(input){
    if(input.value.length < 3){
        showError(username , "Username contains at least 3 character");
    }else if(input.value.length > 15){
        showError(username , "Username must be within 15 character.")
    }else{
        showSuccess(input)
    }
}
//for checking the length of email.
function checkEmailLength(input){
    if(input.value.length < 8 ){
        showError(password , "**Password must contains 8 characters or more!")
    }
    else{
        showSuccess(password)
    }
}

function checkPasswordMatch(input , input1){
    if(input1.value !== input.value){
        showError(password1 , "**Password must be match**")
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username , email , password , password1]);
    checkEmail(email);
    checkLength(username);
    checkEmailLength(password);
    checkPasswordMatch(password , password1)
})
