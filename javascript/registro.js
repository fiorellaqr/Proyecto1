const $formulario = document.querySelector("#formulario");
$nombre = document.querySelector("#nombre");
$apellidos = document.querySelector("#apellidos");
$email = document.querySelector("#email");
$telefono = document.querySelector("#telefono");
$contrasenia = document.querySelector("#contrasenia");
$contrasenia2 = document.querySelector("#contrasenia2");

$msg_nombre = document.querySelector("#msg_nombre");
$msg_apellidos = document.querySelector("#msg_apellidos");
$msg_email = document.querySelector("#msg_email");
$msg_telefono = document.querySelector("#msg_telefono");
$msg_contrasenia = document.querySelector("#msg_contrasenia");
$msg_contrasenia2 = document.querySelector("#msg_contrasenia2");

$spanNom = document.querySelector("#spanNom");
$spanApe = document.querySelector("#spanApe");
$spanEmail = document.querySelector("#spanEmail");
$spanTlf = document.querySelector("#spanTlf");
$spanContra = document.querySelector("#spanContra");
$spanContra2 = document.querySelector("#spanContra2");

$formulario.onsubmit = evento => {
    evento.preventDefault();
    const nombre = $nombre.value,
        apellidos = $apellidos.value,
        email = $email.value,
        telefono = $telefono.value,
        contrasenia = $contrasenia.value,
        contrasenia2 = $contrasenia2.value;

    let validarNom = /^[a-zA-Z\s]{2,100}$/;
    let validarTlf = /^\d{9}$/;
    let validarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let validarPass = /^.{4,16}$/;

    if (validarNom.test(nombre)) {
        $msg_nombre.innerHTML = "El nombre es valido";
        $msg_nombre.style.color = "green";
        $spanNom.classList.add("correcto") ;
        $spanNom.classList.remove("incorrecto") ;

    } else {
        $msg_nombre.innerHTML = "El nombre solo debe contener letras";
        $msg_nombre.style.color = "red";
        $spanNom.classList.add("incorrecto") ;
        $spanNom.classList.remove("correcto") ;
    }

    if (validarNom.test(apellidos)) {
        $msg_apellidos.innerHTML = "El apellido es valido";
        $msg_apellidos.style.color = "green";
        $spanApe.classList.add("correcto") ;
        $spanApe.classList.remove("incorrecto") ;
    } else {
        $msg_apellidos.innerHTML = "El apellido solo debe contener letras";
        $msg_apellidos.style.color = "red";
        $spanApe.classList.add("incorrecto") ;
        $spanApe.classList.remove("correcto") ;
    }

    if (validarTlf.test(telefono)) {
        $msg_telefono.innerHTML = "El numero de telefono es valido";
        $msg_telefono.style.color = "green";
        $spanTlf.classList.add("correcto") ;
        $spanTlf.classList.remove("incorrecto") ;
    } else {
        $msg_telefono.innerHTML = "El numero de telefono solo debe 9 digitos";
        $msg_telefono.style.color = "red";
        $spanTlf.classList.add("incorrecto") ;
        $spanTlf.classList.remove("correcto") ;
    }

    if (validarEmail.test(email)) {
        $msg_email.innerHTML = "El correo es valido";
        $msg_email.style.color = "green";
        $spanEmail.classList.add("correcto") ;
        $spanEmail.classList.remove("incorrecto") ;
    } else {
        $msg_email.innerHTML = "Ingresar un correo valido";
        $msg_email.style.color = "red";
        $spanEmail.classList.add("incorrecto") ;
        $spanEmail.classList.remove("correcto") ;
    }

    if (validarPass.test(contrasenia)) {
        $msg_contrasenia.innerHTML = "La contraseña es valida";
        $msg_contrasenia.style.color = "green";
        $spanContra.classList.add("correcto") ;
        $spanContra.classList.remove("incorrecto") ;
    } else {
        $msg_contrasenia.innerHTML = "La contraseña debe tener de 4 a 16 digitos";
        $msg_contrasenia.style.color = "red";
        $spanContra.classList.add("incorrecto") ;
        $spanContra.classList.remove("correcto") ;
    }
    if (contrasenia !== contrasenia2) {
        $msg_contrasenia2.innerHTML = "Ambas contraseñas deben ser iguales";
        $msg_contrasenia2.style.color = "red";
        $spanContra2.classList.add("incorrecto") ;
        $spanContra2.classList.remove("correcto") ;
    } else {
        $msg_contrasenia2.innerHTML = "Las contraseñas coinciden";
        $msg_contrasenia2.style.color = "green";
        $spanContra2.classList.add("correcto") ;
        $spanContra2.classList.remove("incorrecto") ;
    }
    $formulario.submit();
}