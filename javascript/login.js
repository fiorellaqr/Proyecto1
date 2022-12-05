const $formulario = document.querySelector("#formulario"),
    $email = document.querySelector("#email"),
    $contrasenia = document.querySelector("#contrasenia"),

    $msg_email = document.querySelector("#msgEmail"),
    $msg_contrasenia = document.querySelector("#msgContra"),
    $spanEmail = document.querySelector("#spanEmail"),
    $spanContra = document.querySelector("#spanContra");

let objUsuarios = [
    {
        email: "cliente@gmail.com",
        contrasenia: "cliente"
    },
    {
        email: "usuario@gmail.com",
        contrasenia: "usuario"
    }
]


$formulario.onsubmit = evento => {
    evento.preventDefault();

    const email = $email.value,
        contrasenia = $contrasenia.value;

    for (let i = 0; i < objUsuarios.length; i++) {

        if (email == objUsuarios[i].email && contrasenia !== objUsuarios[i].contrasenia) {
            $msg_email.innerHTML = "El correo electronico que ingresaste es valido";
            $msg_email.style.color = "green";
            $spanEmail.classList.add("correcto");
            $spanEmail.classList.remove("incorrecto");

            $msg_contrasenia.innerHTML = "La contraseña que ingresaste es incorrecta. Vuelve a intentarlo";
            $msg_contrasenia.style.color = "red";
            $spanContra.classList.add("incorrecto");
            $spanContra.classList.remove("correcto");
            return

            
        }else if (email == objUsuarios[i].email && contrasenia == objUsuarios[i].contrasenia) {
            $msg_email.innerHTML = "El correo electronico que ingresaste es valido";
            $msg_email.style.color = "green";
            $spanEmail.classList.add("correcto");
            $spanEmail.classList.remove("incorrecto");

            $msg_contrasenia.innerHTML = "La contraseña es correcta.";
            $msg_contrasenia.style.color = "green";
            $spanContra.classList.add("correcto");
            $spanContra.classList.remove("incorrecto");
            $formulario.submit();
            return
        }  
    }
    
        $msg_email.innerHTML = "El correo electrónico que ingresaste no pertenece a ninguna cuenta.";
        $msg_email.style.color = "red";
        $spanEmail.classList.add("incorrecto");
        $spanEmail.classList.remove("correcto");

        $msg_contrasenia.innerHTML = "La contraseña que ingresaste es incorrecta. Vuelve a intentarlo";
        $msg_contrasenia.style.color = "red";
        $spanContra.classList.add("incorrecto");
        $spanContra.classList.remove("correcto");

}