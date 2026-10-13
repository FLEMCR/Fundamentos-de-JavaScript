// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 01
// Perfil del estudiante
// Declara const nombre (texto), let edad (número), const instituto (texto) y let matriculado (booleano). Muestra una oración con console.log.

const nombre = 'Pedro';
let edad = 23;
const instituto = 'IDAT';
let matriculado = true;

const color_verde = '\033[32m';
const color_reset = '\033[0m';

const divisor = () => {
  console.log('-'.repeat(30));
};

if (matriculado == true) {
  matriculado = 'Si';
} else {
  matriculado = 'No';
}

const mensaje = `El estudiante ${nombre}, tiene ${edad} años y esta matriculado en el instituto ${instituto}? \n ${color_verde}${matriculado}${color_reset}`;

divisor();
console.log(mensaje);
divisor();
