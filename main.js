document.getElementById("pageReg").style.display = 'none';
document.getElementById("box").style.display = 'none';

function daftar(params) {

    if (params == 'daftar') {
        document.getElementById("pageReg").style.display = 'block';
        document.getElementById("pageLogin").style.display = 'none';
    }
    else if (params == 'masuk') {
        document.getElementById("pageLogin").style.display = 'block';
        document.getElementById("pageReg").style.display = 'none';
    }
}

function onRegister(){
    let usernameRegister = document.getElementById("usernameRegister");
    let passwordRegister = document.getElementById("passwordRegister");

    if (usernameRegister.value == "" && passwordRegister.value == "") {
        alert("Masukan Username dan Password!");
    }
    else {
        localStorage.setItem("username", usernameRegister.value);
        localStorage.setItem("password", passwordRegister.value);
        alert("Akun Berhasil Dibuat!")
        document.getElementById("pageLogin").style.display = 'block';
        document.getElementById("pageReg").style.display = 'none';
    }
}

function onLogin(){
    let usernameInput = document.getElementById("usernameInput").value;
    let passwordInput = document.getElementById("passwordInput").value;

    if (usernameInput == localStorage.getItem("username") && passwordInput == localStorage.getItem("password")){
        document.getElementById("box").style.display = 'block';
        document.getElementById("pageLogin").style.display = 'none';
        document.querySelector("#name").innerHTML = localStorage.getItem("username");
    }
    else {
        alert("Akun kamu belum terdaftar!");
        location.reload();
    }
}

function onLogout(){
    localStorage.clear();
    location.reload();
}