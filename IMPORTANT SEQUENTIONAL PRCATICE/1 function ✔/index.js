// function is a block of code that only run when it is called. resuability
function func1(p1, p2) {
  return p1 * p2;
}

document.body.innerHTML = func1(10, 20);
function tocelulios(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

const value = tocelulios(77);
document.body.innerHTML += "<br><br>" + "Temprature is : " + value;
