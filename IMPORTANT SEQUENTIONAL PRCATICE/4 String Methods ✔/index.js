// inside quote and backteck
let t1 = "hello my name is adnan khan ";
let t2 = "i'm a professional web devloper";
let soft = "Asonica Software House Matta";
let tampletstr = `i worked five years with ${soft}`;

console.log(t1);
console.log(t2);
console.log(tampletstr);
// string Methods .
let length = soft.length;
console.log("the length is : ", length);
// charAt
console.log(t2.charAt(4));
// charcodeAt
console.log("charcodeat ", t2.charCodeAt(3));
console.log("charcodepointat ", t1.codePointAt(12));
// at method
console.log("at method : ", t1.at(-7));
console.log(t1[2]);
// Extracting String Parts there are three methods (slice,substring,substr)
let slicem = t2.slice(7, 9);
console.log(slicem);
let slicem2 = t2.slice(8);
console.log(slicem2);
let slicem3 = t2.slice(-3);
console.log(slicem3);
let slicem4 = t2.slice(-12, -3);
console.log(slicem4);
let substring1 = t2.substring(-2, 8);
console.log(substring1);
let substring2 = t2.substring(3, -3);
console.log(substring2);
// substr second parameter defines the lenght.
let substr = tampletstr.substr(3, 6);
console.log(substr);
let upperc = t1.toLocaleUpperCase();
console.log(upperc);
let lowerc = t2.toLocaleLowerCase();
console.log(lowerc);
let conc = t1.concat(t2);
console.log(conc);
let trmstr = "        Hello There Im   ... Adnan Khan   ";
let trm = trmstr.trim();
console.log(trmstr);
console.log(trm);
let trms = trmstr.trimStart();
console.log(trms);
let trme = trmstr.trimEnd();
console.log(trme);
let text = "6";
let pads = text.padStart(4, "0");
console.log(pads);
let padend = text.padEnd(4, "4");
console.log(padend);
let text1 = "Hellow World!";
let repeat = text1.repeat(2);
console.log(repeat);
let text2 = "Please visit Microsoft and Microsoft!";
// replace are case sensitive
// let replace = text2.replace("VISIT", "Go to"); wrong case sensitive
let replace = text2.replace("visit", "Go to");
console.log(replace);
let replacesen = replace.replace(/GO TO/i, "VISIT");
console.log(replacesen);
// global replace all occurance
let repAll = text2.replace(/Microsoft/g, "Open AI");
console.log(repAll);
let repAllsg = repAll.replace(/open ai/gi, "MICROSOFT");
console.log(repAllsg);
let All = repAllsg.replaceAll(/microsoft/gi, "Kali Linux");
console.log(All);
// split return Array

let splt = text2.split(" ");
console.log(splt);
let tt = "Hello! There! My Name! is adnan khan! im a! webdevlper";
let sp = tt.split("!");
console.log(sp);
