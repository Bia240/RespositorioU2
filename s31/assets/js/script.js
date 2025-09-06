

// let name = prompt("Ingresa tu nombre");

// console.log('Buenas noches ${name}');

//let num1 = parseInt(prompt("Ingresa un numero"));

//let num2 = parseInt(prompt("Ingresa otro numero"));

//console.log(`${num1} + ${num2} = ${num1 + num2}  ´); 


// RETO

// Crea un programa que pida un numero entero al usuario e indique si este numero es par o no.

/*let num = parseInt(prompt("Ingresa un numero"));

if (num % 2 === 0) {

console.log(`${num} es par.`);
} else {

console.log(`${num} es impar.`);

} */

// Aplicando lo aprendido en la clase, crea un programa que pida un número entero al usuario e indique si este número es par o impar.

let numero = parseInt(prompt("Ingresa un número entero:"));

if (numero % 2 === 0) {
  console.log(numero + " es un número par.");
  alert(numero + " es un número par.");
} else {
  console.log(numero + " es un número impar.");
  alert(numero + " es un número impar.");
}