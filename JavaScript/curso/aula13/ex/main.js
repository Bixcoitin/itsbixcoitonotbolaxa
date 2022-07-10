let nome = prompt("What's your name?");
//document.write("One text"); | windows.document.write();

const nomeR = nome.replace(/ /, '');
const nomeT = nome.trim();
const nameSplited = nome.split(' ');
const lengthR = nomeR.length;
const length = nome.length;
const lengthT = nomeT.length;
const nameSliced = nomeT.slice(-3); // se vc n especificar um final ele seta como a string inteira
const secondLetter = nome[1]; // pode ser tbm nome.charAt(1);
const firstA = nome.indexOf('i');
const lastA = nome.lastIndexOf('i');
const upperCase = nome.toUpperCase();
const lowerCase = nome.toLowerCase();

document.body.innerHTML = `Your name is: ${nome}<br />`;
document.body.innerHTML += `Your name have ${lengthR} letters<br />`;
document.body.innerHTML += `The second letter of your name is: ${secondLetter} <br />`;
document.body.innerHTML += `The first indice of the letter \'i\' on your name: ${firstA} <br />`;
document.body.innerHTML += `The last indice of the letter \'i\' on your name: ${lastA} <br />`;
document.body.innerHTML += `The last 3 letters of your name are: ${nameSliced}<br />`;
document.body.innerHTML += `The words in your name are: ${nameSplited}<br />`;
document.body.innerHTML += `Your name in upper case letters: ${upperCase} <br />`;
document.body.innerHTML += `Your name in lower case letters: ${lowerCase} <br />`;
