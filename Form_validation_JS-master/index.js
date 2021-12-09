function validate(){
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var cpassword = document.getElementById("cpassword").value

    checkUsername(username)
    checkEmail(email)
    checkPassword(password)
    checkPasswordMatches(password, cpassword)
}

function checkUsername(username){
    if(username.length > 7) {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
    }
    else {
        document.getElementById('username').classList.add('error')
    }
}
function checkUsername(username){
    if(username.length > 7) {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML=''
    }
    else {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerHTML='Username Invalid'
    }
}

function checkEmail(email){
    if(email.includes('@') && email.includes('.')) {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email_error').innerHTML=''
    }
    else {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerHTML='Email Invalid'
    }
}
function checkPassword(password){
    if(password.length > 7 ) {
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('password_error').innerHTML=''
    }
    else {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerHTML='Password Invalid'
    }
}
function checkPasswordMatches(password, cpassword){
    if(cpassword === password) {
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error', 'success')
        document.getElementById('cpassword_error').innerHTML=''
    }
    else {
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerHTML='Password does\' matches'
    }
}