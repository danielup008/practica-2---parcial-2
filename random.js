var nombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Sofía", "Carlos", "Laura", "Diego", "Valentina"];
var apellidos = ["González", "Rodríguez", "Pérez", "Martínez", "López", "Gómez", "Sánchez", "Díaz", "Torres", "Ramírez"];

function crearnombre()
{
    var nombreRandomIndex = Math.floor(Math.random() * nombres.length);
var apellidoRandomIndex = Math.floor(Math.random() * apellidos.length);

var nombreAleatorio = nombres[nombreRandomIndex];
var apellidoAleatorio = apellidos[apellidoRandomIndex];

var nombreApellidoElemento = document.getElementById('nombre-apellido');
nombreApellidoElemento.textContent = nombreAleatorio +' '+ apellidoAleatorio;
}

