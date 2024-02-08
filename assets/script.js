
var userName = document.querySelector('#username');
var password = document.querySelector('#password');
function login() {
    if (userName.value === 'admin' && password.value === 'admin') {
        document.querySelector("#title").innerHTML = 'successful login';
        document.querySelector("#title").style.color = 'green';

    }
    else {
        document.querySelector("#title").innerHTML = 'failed login';
        document.querySelector("#title").style.color = 'red';
    }
}

