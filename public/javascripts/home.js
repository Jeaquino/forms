const inputs = document.getElementsByTagName("input");
const nombre = document.getElementById("username");
const form = document.getElementById("registro");
const email = document.getElementById("email");
const password = document.getElementById("password");
const theme = document.getElementById('theme')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{9,20}$/;

function agregarError(elemento){
    const p = elemento.parentNode.lastChild.previousSibling
    p.classList.add('msgError');
}

function removerError(elemento){
    const p = elemento.parentNode.lastChild.previousSibling
    p.classList.remove('msgError');
}

function toogleError(elemento){
    const p = elemento.parentNode.lastChild.previousSibling
    p.classList.toggle('msgError');
}

function validarCorreo(element){
    if(!emailPattern.test(element.value)){
        agregarError(element);
    }else{
        removerError(element)
    }
}

function validarPassword(element){
    if(!passwordPattern.test(element.value)){
        agregarError(element);
    }else{
        removerError(element)
    }
}

nombre.addEventListener("change", function () {

  if (this.value.length <= 6) {     
    agregarError(nombre)
  }else{
    removerError(nombre)
  }
});

email.addEventListener('change',function(){
    validarCorreo(email);
})

password.addEventListener('change', function(){
    validarPassword(password)
})

function changeTheme() {
    document.body.classList.toggle('darkMode');
    
    if (sessionStorage.getItem('theme') == 'darkMode') {
        sessionStorage.removeItem("theme")    
    }else{
        sessionStorage.setItem("theme","darkMode")
        sessionStorage.setItem("nombre","Julian")
        sessionStorage.setItem("edad","34")
    }
}

window.addEventListener("load", function() {
    const theme = sessionStorage.getItem('theme');

    if (theme == 'darkMode') {
        document.body.classList.toggle('darkMode');
    };
})

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Formulario enviado con éxito.");
  form.submit();
});
