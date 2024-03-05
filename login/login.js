let requestBody={}; 

let requestConfiguration = {
    method: 'POST', // Indica que la solicitud es de tipo POST
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', // Especifica que el cuerpo de la solicitud es JSON
    },
    body: JSON.stringify(requestBody), // Convierte el objeto a JSON
};

function login(email, password) {
    requestBody = {
        email: email.value,
        password: password.value
    };


    fetch('http://localhost:8000/api/login', requestConfiguration)// la combinacion de esta linea se convierte en una response
        .then(response => response.json())
        .then(responseJson => {
            let user = responseJson.user;
            localStorage.setItem('userID', user.id);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userName', user.name);
            localStorage.setItem('userPhone', user.phone);

        })
        .catch(error => console.error('Error:', error));

}

let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let botonLogin = document.getElementById('boton_login');
let a_password = document.getElementById('a_password')

botonLogin.addEventListener('click', requestservice.login(inputEmail,inputPassword));
a_password.addEventListener('click', requestservice.forgot(inputEmail));