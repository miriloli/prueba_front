let requestBody = {};


let requestConfiguration = {
    method: 'POST', // Indica que la solicitud es de tipo POST
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', // Especifica que el cuerpo de la solicitud es JSON
    },
    body: JSON.stringify(requestBody), // Convierte el objeto a JSON
};

function signup(name, email, phone, password) {
    requestBody = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value

    };

    fetch('http://localhost:8000/api/signup', requestConfiguration)
        .then(response => response.json())
        .then(responseJson => {

        })
        .catch(error => console.error('Error:', error));
}

let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPhone = document.getElementById("phone");
let inputPassword = document.getElementById("password");
let inputPassword2 = document.getElementById("password2");
let inputPasswordError = document.getElementById("passwordError");


function passwordCheck() {
    if (inputPassword2.value === inputPassword.value) {
        inputPasswordError.style.display = "none";
    } else {
        inputPasswordError.style.display = "block";
    }
}


let botonSignup = document.getElementById("boton_signup");

inputPassword2.addEventListener("change", passwordCheck);

botonSignup.addEventListener("click", signup(inputName, inputEmail, inputPhone, inputPassword));
