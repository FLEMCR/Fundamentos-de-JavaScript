// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 05
// Boleta de compra
// Declara const producto="Cuaderno", const precioUnitario=12.5, const cantidad=3. Calcula subtotal y crea mensajeBoleta que incluya producto y total.

const producto = "Cuaderno";
const precioUnitario = 12.5;
const cantidad = 3;

const subtotal = precioUnitario * cantidad;
const mensajeBoleta = `El producto es : ${producto} y el total de la compra es : S/ ${subtotal}`;

console.log(mensajeBoleta);