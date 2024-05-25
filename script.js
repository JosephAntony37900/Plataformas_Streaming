// script.js

// Función para registrar al usuario
function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Guardar los datos del usuario en localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Registro exitoso');
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = 'index.html';
    } else {
        alert('Por favor, complete todos los campos');
    }
}

// Función para iniciar sesión
function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Inicio de sesión exitoso');
        // Redirigir al usuario a la página de inicio
        window.location.href = 'inicio.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
}

// Asignar los event listeners a los formularios
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.register-form form');
    const loginForm = document.querySelector('.login-box form');

    if (registerForm) {
        registerForm.addEventListener('submit', registerUser);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', loginUser);
    }
});
