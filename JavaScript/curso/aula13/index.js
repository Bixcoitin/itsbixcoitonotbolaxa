//            -11234567
let text = "One text";
let theRat = "O rato roeu a roupa do rei de roma.";

console.log(text[4]);
console.log(text.charAt(2));

console.log(text.concat(" in", " a", " beautiful day"));
console.log(text + " in a beautiful day");
console.log(`${text} in a beautiful day`); //that's the better one

console.log(text.indexOf("text")); //where the "text" starts
console.log(text.indexOf("t", 3));
console.log(text.lastIndexOf("text"));
console.log(text.lastIndexOf("t", 3));

console.log(text.match(/[a-z]/g));
console.log(text.match(/[a-z]/));

console.log(text.search("n"));

console.log(text.replace(/One/, "A"));

console.log(theRat.replace(/r/, "s"));
console.log(theRat.replace(/r/g, "s"));

console.log(theRat.length);
console.log(theRat.slice(2, 6));
console.log(theRat.split(" ", 3));

console.log(theRat.toUpperCase());
console.log(theRat.toLowerCase());

let oneString = 'One \\ "string"';
console.log(oneString);
