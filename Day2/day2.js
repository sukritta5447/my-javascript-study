// Exercise day 2

let challenge = '30 days of JavaSript';
console.log(challenge); // result: 30 days of JavaSript
console.log(challenge.length); // result: 21
console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase()); // 30 days of javascript
console.log(challenge.substr(0,2)); // 30
console.log(challenge.substring(3,21)); // days of JavaScript
console.log(challenge.includes('Script')); // true 
console.log(challenge.split()); // ['30 days of JavaScript']
console.log(challenge.split(' ')); // ['30', 'days', 'of', 'JavaScript']

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(companies.split(',')); // ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

console.log(challenge.replace('JavaScript', 'Python')); // 30 days of Python
console.log(challenge.charAt(15)); // S
console.log(challenge.charCodeAt('J')); // 51
console.log(challenge.indexOf('a')); // 4
console.log(challenge.lastIndexOf('a')); // 14

let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because')); // 31
console.log(sentence.lastIndexOf('because')); // 47
console.log(sentence.search('because')); // 31

let challenges = ' 30 days of JavaScript ';
console.log(challenge.trim()); // '30 days of JavaScript'

console.log(challenge.startsWith(3)); // true
console.log(challenge.endsWith('t')); // true

let challenge = '30 days of JavaScript';
let findA = /a/gi; // g-means to search in the whole text, i - case insensitive
console.log(challenge.match(findA)); // (3) ['a', 'a', 'a']

let txtOne = '30 Days of';
console.log(txtOne.concat(" JavaScript")); // 30 Days of JavaScript

console.log(challenge.repeat(2)); // 30 days of JavaScript30 days of JavaScript



