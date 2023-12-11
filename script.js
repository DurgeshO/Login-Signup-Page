
const title = document.getElementById('title');
const Namefield = document.getElementById('Namefield');
const signinbtn = document.getElementById('signinbtn');


// for run the signup button 

signupbtn.onclick = function(){
    title.innerHTML = "Sign Up";
    Namefield.style.display = "block";

}

// FOR SIGNIN BUTTON 

signinbtn.onclick = function(){
    title.innerHTML = "Login";
    Namefield.style.display = "none";

}