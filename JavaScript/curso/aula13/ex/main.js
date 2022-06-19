const nome = prompt("What's your name?");
//document.write("One text"); | windows.document.write();

const nameSplited = nome.split(' ');
const lenth = nome.length
const secondLetter = nome.charAt(1);
const firstA = nome.search('a');
const lastA = nome.lastIndexOf('a');

document.body.innerHTML = `Your name is: ${nome}<br />`;
document.body.innerHTML += `Your name have ${lenth} letters<br />`;
document.body.innerHTML += `The second letter of your name is: ${secondLetter} <br />`;
document.body.innerHTML += `The first indice of the letter \'a\' on your name: ${firstA} <br />`;
document.body.innerHTML += `The last indice of the letter \'a\' on your name: ${lastA} <br />`;
document.body.innerHTML += `The last 3 letters of your name are: <br />`;
document.body.innerHTML += `The words in your name are: ${nameSplited}<br />`;
document.body.innerHTML += `Your name in upper case letters: <br />`;
document.body.innerHTML += `Your name in lower case letters: <br />`;
