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
//checking length for firstname.
function checkLength(input){
    if(input.value.length < 3){
        showError(input , `**${capitalId(input)} must contains at least 3 characters**`);
    }else if(input.value.length >8 ){
        showError(input , `**${input.id} should be within 8 characters**`)
    }
}
//function for capitailized the first character of input fields.
function capitalId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//function for check if the email is valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(email , `**${capitalId(input)} must be valid!**`)
    }
}
//function for checking the length of password
function passwordLength(input){
    if(input.value.length < 8){
        showError(password , `**${capitalId(input)} should be at least 8 character**`)
    }
}
//function for checking password and confirm password are same. 
function checkPasswordsMatch(input, input1){
    if(input1.value !== input.value){
        showError(input1 , `**${capitalId(input)} must be same**`);
    }else if(input1.value === ""){
        showError(input1 , `**${capitalId(input)} must be same**`);
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired( [firstname,lastname,email,password,password1] );
    checkLength(firstname);
    checkLength(lastname);
    checkEmail(email);
    passwordLength(password);
    checkPasswordsMatch(password, password1);
})