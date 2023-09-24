let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

// form validation start 
const username = document.getElementById('username');
const emailAddress = document.getElementById('emailAddress');
const passwordCheack = document.getElementById('passwordCheack');
const confirmPassword = document.getElementById('confirmPassword');
const emailAddressLogin = document.getElementById('emailAddressLogin');
const passwordLogin = document.getElementById('passwordLogin');

// username valid part 
username.addEventListener('input', () => {
  checkInput(username);
});
// emailAddress valid part 
emailAddress.addEventListener('input', () =>{
  emailAddressCheckInput(emailAddress);
});
// password valid part 
passwordCheack.addEventListener('input', () =>{
  passwordCheackInput(passwordCheack);
});
// confirm password valid part 
confirmPassword.addEventListener('input', () =>{
  confirmPasswordCheackInput(confirmPassword);
});
// email address login valid part 
emailAddressLogin.addEventListener('input', () =>{
  emailAddressLoginCheckInput(emailAddressLogin);
});
passwordLogin.addEventListener('input', () =>{
  passwordLoginCheckInput(passwordLogin);
});

//  username name valid part 
form.addEventListener('submit', e => {
  e.preventDefault(); 
  checkInput(username);
});
// emailAddress valid part 
form.addEventListener('submit', e =>{
  e.preventDefault();
  emailAddressCheckInput(emailAddress);
});
// password valid part 
form.addEventListener('submit', e =>{
  e.preventDefault();
  passwordCheackInput(passwordCheack);
});
// confirm password valid part 
form.addEventListener('submit', e =>{
  e.preventDefault();
  confirmPasswordCheackInput(confirmPassword);
});
// emailAddress valid part 
form.addEventListener('submit', e =>{
  e.preventDefault();
  emailAddressLoginCheckInput(emailAddressLogin);
});
// passwordLogin valid part 
form.addEventListener('submit', e =>{
  e.preventDefault();
  passwordLoginCheckInput(passwordLogin);
});

          // username cheack input valid part 
   function checkInput(input) {
    const inputValue = input.value.trim();
    if (inputValue === '') {
        setErrorFor(input, 'Username can not be empty.');
    } else if (inputValue.length < 3){
        setErrorFor(input, 'Username must be more than 3 letter.');
    } else if (!isValidUsername(inputValue)) {
        setErrorFor(input, 'Just write English.');
    } else {
        setSuccessFor(input);
    }
  }
  function isValidUsername(username) {
      return /^[a-zA-z ]+$/.test(username);
  }

          // emailAddress cheack input valid part 
  function emailAddressCheckInput(input){
    const emailAddressValue = input.value.trim();
    if(emailAddressValue === ''){
        setErrorFor(input, 'Email can not be empty.');
    } else if (!isValidEmail(emailAddressValue)){
        setErrorFor(input, 'Invalid format email.');
    } else {
        setSuccessFor(input);
    }
}
function isValidEmail(emailAddress) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailAddress);
}

      // password cheack input valid part 
      function passwordCheackInput(input){
  const passwordCheackValue = input.value.trim();
  if(passwordCheackValue === ''){
    setErrorFor(input, 'password can not be null.');
  }else if(passwordCheackValue.length < 3){
    setErrorFor(input, 'password should be more than 3 letter.');
  }else{
    setSuccessFor(input);
  }
}
// confirm password cheack input valid part
function confirmPasswordCheackInput(input){
  const confirmPasswordValue = input.value.trim();
  if(confirmPasswordValue === ''){
    setErrorFor(input, 'confirm password can not be empty.');
  }else if(confirmPasswordValue.length < 3){
    setErrorFor(input, 'confirm password should be more than 3 letter.')
  }
}

// emailAddressLogin cheack input valid part 
  function emailAddressLoginCheckInput(input){
    const emailAddressLoginValue = input.value.trim();
    if(emailAddressLoginValue === ''){
        setErrorFor(input, 'email can not be empty.');
    } else if (!isValidEmailLogin(emailAddressLoginValue)){
        setErrorFor(input, 'Invalid format email');
    } else {
        setSuccessFor(input);
    }
}
function isValidEmailLogin(emailAddressLogin) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailAddressLogin);
}
//   comparing passwords 
function confirmPasswordCheackInput(input){
  const confirmPasswordValue = input.value.trim();
  const passwordCheackValue = passwordCheack.value.trim();

  if(confirmPasswordValue === ''){
      setErrorFor(input, 'confirm password can not be empty.');
  }else if(confirmPasswordValue !== passwordCheackValue){
      setErrorFor(input, 'confirm password is not the same as password.');
  }else{
      setSuccessFor(input);
  }
}
form.addEventListener('submit', e => {
    e.preventDefault();
    passwordCheackInput(passwordCheack);
    confirmPasswordCheackInput(confirmPassword);
});
// password cheack input valid part 
function passwordLoginCheckInput(input){
  const passwordLoginValue = input.value.trim();
  if(passwordLoginValue === ''){
    setErrorFor(input, 'password can not be empty.');
  }else if(passwordLoginValue.length < 3){
    setErrorFor(input, 'password should be more than 3 letter.');
  }else{
    setSuccessFor(input);
  }
}
  // common border color functions 
  function setErrorFor(input, message) {
       const formControl = input.parentElement;
       const small = formControl.querySelector('small');
       formControl.className = 'form-control1 error';
       small.innerText = message;
   }
   function setSuccessFor(input) {
       const formControl = input.parentElement;
       formControl.className = 'form-control1 success';
   }