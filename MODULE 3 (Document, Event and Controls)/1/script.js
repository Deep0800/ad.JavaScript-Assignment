let eyeIcon = document.getElementById('eyeIcon')
let password = document.getElementById('password')
let msg = document.getElementById('message')
let str = document.getElementById('strength')

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "./eye-open.png"
    } else {
        password.type = "password";
        eyeIcon.src = "./eye-close.png"
    }
}

password.addEventListener('input', () =>{
    if (password.value.length > 0) {
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }
    if (password.value.length < 4) {
        str.innerHTML = "Weak";
        str.style.color = "#ff5925"
    }
    else if(password.value.length >= 4 && password.value.length < 8){
        str.innerHTML = "Medium";
        str.style.color = "yellow"
    }
    else{
        str.innerHTML = "Strong";
        str.style.color = "#26d730"
    }
})