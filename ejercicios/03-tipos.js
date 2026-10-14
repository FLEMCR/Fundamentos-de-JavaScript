// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 03
// Identifica tipos
// Declara const precio=29.90, const titulo="JavaScript", const disponible=true y const pendiente=null. Declara tipoPrecio, tipoTitulo y tipoDisponible utilizando typeof.

const precio = 29.9;
const titulo = 'JavaScript';
const disponible = true;
const pendiente = null;

const tipoPrecio = typeof (precio);
const tipoTitulo = typeof (titulo);
const tipoDisponible = typeof (disponible);
const tipoPendiente = typeof (pendiente); // Este ultimo usted no lo pidió, pero lo coloqué para completar.

// Aquí le coloco los console.log (tampoco estaba en lo que se pedía arriba pero he de suponer)
console.log('Tipo de precio:', tipoPrecio);
console.log('Tipo de titulo:', tipoTitulo);
console.log('Tipo de disponible:', tipoDisponible);
console.log('Tipo de pendiente:', tipoPendiente);
