const str = "Yes I'm Orochimaru One Of The Legendary Saninn ";
const indexof = str.indexOf("The");
console.log("index of ", indexof);
// const indf = str.indexOf(/the/i); wrong cannot take regular expression.
// console.log(indf);
let text = "Please locate where 'locate' occurs!";
const lastindexof = text.lastIndexOf("locate");
console.log("last index of ", lastindexof);
const lastindexof2 = text.lastIndexOf("locate", 15);
console.log(lastindexof2);
const search = text.search("locate");
console.log(search);
const search2 = text.search(/LOCATE/i);
console.log(search2);
const match = text.match("locate");
console.log(match);
const matchsg = text.match(/WHERE/gi);
console.log(matchsg);

const tet = "Hello this is my dog i also have a cat my cat name is lotd";
const mall = tet.matchAll("is");
console.log(Array.from(mall));
const includes = tet.includes("my");
console.log(includes);
const Swith = tet.startsWith("a");
console.log(Swith);
const Ewith = tet.endsWith("lotd");
console.log(Ewith);
