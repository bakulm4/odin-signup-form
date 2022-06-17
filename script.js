const pwdElem = document.querySelector('#pwd');
const confirmPwdElem = document.querySelector('#confirm-pwd');
const errorMessageElem = document.querySelector('.error-message');

function checkPasswordMatch(e){
    if(e.target.value !== pwdElem.value){
        if(!pwdElem.classList.contains('error')){
            pwdElem.classList.add('error');
            confirmPwdElem.classList.add('error');
        }
        errorMessageElem.textContent = '* Passwords do not match';
    }
    else {
        if(pwdElem.classList.contains('error')){
            pwdElem.classList.remove('error');
            confirmPwdElem.classList.remove('error');
        }
        errorMessageElem.textContent = ' ';
    }
}

confirmPwdElem.addEventListener('change',checkPasswordMatch)
