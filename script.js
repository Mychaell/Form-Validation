var nameError = document.getElementById('name-error');
var eError = document.getElementById('email-error');
var sError = document.getElementById('submit-error');
var ageError = document.getElementById('age-error');
var cError = document.getElementById('cword-error');
var pError = document.getElementById('pword-error');

function validateName(){
    var name = document.getElementById('name').value;
    
    if(name.length == 0) {
        nameError.innerHTML = 'Firstname is required';
        return false;

    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'enter fullname';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}

function validateAge(){
    var age = document.getElementById('age');
    
    if(age.value > 80){
        ageError.innerHTML = 'age must be below 80';
        return false;
    }
    if(age.value < 1){
        ageError.innerHTML = 'enter a valid age';
        return false;
    }
    ageError.innerHTML = 'valid';
    return true;

}

function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        eError.innerHTML = 'email is required';
        return false;
    }

    if(!email.match (/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        eError.innerHTML = 'invalid email';
        return false;
    }
    eError.innerHTML = 'valid';
    return true;
}

function validatePassword(){
    var password = document.getElementById('password').value;

    if(password.length < 10){
        
        pError.innerHTML = 'password must be greater than 10 characters';
        return false;
    }

    if(!password.match (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
        
        pError.innerHTML = 'enter a valid password';
        return false;
    }

    pError.innerHTML = 'valid';
    return true;
}

function validateCPword(){
    var cPassword = document.getElementById('c-password').value;
    var password = document.getElementById('password').value;

    if(cPassword !== password){
        
        cError.innerHTML = 'password do not match';
        return false;
    }
    cError.innerHTML = 'valid';
    return true;
}

function validateForm(){
    if(!validateName() || !validateAge() || !validateEmail() || !validatePassword() || !validateCPword()){
        sError.style.display = 'block';
        sError.innerHTML = 'fill in all fields';
        setTimeout(function(){sError.style.display = 'none';}, 3000);
        return false;   
    }
}