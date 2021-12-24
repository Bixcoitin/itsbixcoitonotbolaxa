let wantOrNot = confirm("Do you want to calculate something?");

if (wantOrNot == false) {
  alert("Ok than");
  stop();
} else {
  let num1 = prompt("Type one number: ");
  let num2 = prompt("Type another one: ");

  num1 = Number(num1);
  num2 = Number(num2);

  let plus = num1 + num2;

  alert(`The operation result is: ${plus}`);
}
