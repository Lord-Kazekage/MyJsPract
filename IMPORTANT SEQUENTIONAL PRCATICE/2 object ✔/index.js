const person = {
  firstname: "Adnan",
  lastname: "Khan",
  age: 25,
  eyecolor: "black",
};
console.log(person);
console.log(person.eyecolor);
console.log(person["firstname"]);
// object methd or function and this keyword
// this keyword refers to the object
const record = {
  name: "Adnan khan",
  payed: 12000,
  dues: 20000,
  allrecord: function () {
    console.log(typeof this.dues, typeof this.payed);
    return `total is : ${this.dues + this.payed}, remaining Balance : ${this.dues - this.payed}`;
  },
};
console.log(record.allrecord());
const total_ramain = record.allrecord();
console.log(total_ramain);
