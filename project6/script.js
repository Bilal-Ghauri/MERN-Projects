const navLogo = document.querySelector('.navlogo')
const signUp = document.getElementById('signup')
const signUpContainer = document.querySelector('.signupContainer')
const closeSignUp = document.getElementById('close')



//event listener for navbar logo if clicked then show tha navbar on toggle
navLogo.addEventListener('click', e=>{
    document.body.classList.toggle('show-nav')
})

//event lsitener for signup button when clicked show the signup container
signUp.addEventListener('click', e=>{
    signUpContainer.classList.add('show')
})

//event listener for closing the signup form.
closeSignUp.addEventListener('click', e=>{
    signUpContainer.classList.remove('show')
})










