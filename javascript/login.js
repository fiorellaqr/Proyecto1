const $formulario = document.querySelector("#formulario"),
$email = document.querySelector("#email"),
$contrasenia = document.querySelector("#contrasenia"),

$msg_email=document.querySelector("#msgEmail"),
$msg_contrasenia=document.querySelector("#msgContra"),
$spanEmail=document.querySelector("#spanEmail"),
$spanContra=document.querySelector("#spanContra");

$formulario.onsubmit = evento => {
    evento.preventDefault();

    const email = $email.value,
    contrasenia = $contrasenia.value;

    if (email == "admin@gmail.com") {
        $msg_email.innerHTML = "El correo electronico que ingresaste es valido";
        $msg_email.style.color = "green";
        $spanEmail.classList.add("correcto") ;
        $spanEmail.classList.remove("incorrecto") ;
    } else {
        $msg_email.innerHTML = "El correo electrónico que ingresaste no pertenece a ninguna cuenta.";
        $msg_email.style.color = "red";
        $spanEmail.classList.add("incorrecto") ;
        $spanEmail.classList.remove("correcto") ;
    }

    if (contrasenia !== "admin") {
        $msg_contrasenia.innerHTML = "La contraseña que ingresaste es incorrecta.";
        $msg_contrasenia.style.color = "red";
        $spanContra.classList.add("incorrecto") ;
        $spanContra.classList.remove("correcto") ;

    } else{
        $msg_contrasenia.innerHTML = "La contraseña es correcta.";
        $msg_contrasenia.style.color = "green";
        $spanContra.classList.add("correcto") ;
        $spanContra.classList.remove("incorrecto") ;
    }
    if (email == "admin@gmail.com" && contrasenia == "admin") {
        $formulario.submit();
    }
    
}