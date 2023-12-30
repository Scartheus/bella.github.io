const signInBtnLink = document.querySelector('signInBtn-link');
const signUpBtnLink = document.querySelector('signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})

function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value

    if(login == "Bella" && senha == "2812"){
        alert('Sucesso, bem vinda gatinha!!');
        location.href = "/main/index.html"
    }else{
        alert('Usuario ou senha incorretos');
    }
}