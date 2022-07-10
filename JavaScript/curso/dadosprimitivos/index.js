// String, number, undefined, null, boolean, symbol

const nome = "Dante"; //string
const nome1 = "Dante"; //string
const nome2 = `Dante`; //string

const num = 10; //number
const num1 = 10.52; // number

let nomeAluno; // undefined = don`t apoint in any place in memory
const sobrenomeAluno = null; // Nulo -> don`t apoint in any place in memory, but isn`t the same as undefined

const boolean = true; // Boolean -> just can be true or false (valor logico)

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num, num);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof boolean, boolean);

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

let c = 2;
let d = c;
console.log(c, d);

c = 3;
console.log(c, d);
