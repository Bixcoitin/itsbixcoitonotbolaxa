// aritimeticos + - * /
// + faz a adição e a concatenação

let num1 = 5;
const num2 = 10;
console.log(num1 + num2);

num1 = "5";
console.log(num1 + num2);

// ** potenciação

let a = 2;
let b = 10;
console.log(a ** b);

// % retorna o resto da divisao

console.log(a % b);

/**
 *  first be executed the
 * ()
 * **
 * * / %
 * + -
 */

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
++contador; //5 nao da pra usar com uma const
console.log(contador);

let decremento = 10;
--decremento; //9
decremento--; //8
console.log(decremento);

// operadores de atribuicao

const passo = 50;
let deuQuantos = 0;
deuQuantos += passo; // deuQuantos = deuQuantos + passo; Vale para todas as expreções
console.log(deuQuantos);

// problemas com concatenacao

const concatete = parseInt("10");
const concatate2 = 10;
console.log(concatete + concatate2);
console.log(typeof concatete);

const nAN = Number("Dante");
console.log(concatate2 + nAN);
console.log(typeof nAN);
