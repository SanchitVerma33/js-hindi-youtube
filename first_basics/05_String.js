const name = "Sanchit"
const repoCount = 50

// console.log ( name + repoCount + "Value");

console.log('hello my name is ${name} and my repo count is ${repocount}');

const gameName = new String('Sanchit-tc-com')

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString =gameName.slice(-9,5)
console.log(anotherString);

const newStringOne ="   Sanchit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Sanchit.com/sanchit%10Verma"

console.log(url.replace('%10','-'))

console.log(url.includes('varun'))

console.log(gameName.split('-'));