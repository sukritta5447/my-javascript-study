// Exercise Level 2

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'); // The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""); // "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(typeof '10'); // string --not a number so, we have to change it into number
let num = '10';
let numInt = parseInt(num);
console.log(numInt); // 10 --and now we got a number

console.log(parseFloat('9.8')); // 9.8 --not equal to 10
console.log(parseInt('9.8')); // 9

let py = 'python';
let ja = 'jargon';
console.log(py.includes('on')); // true
console.log(ja.includes('on')); // true

let sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon')); // true

let randomNum = Math.random() *100;
console.log(randomNum); // random number between 0 and 100

let randomNum = Math.floor((Math.random() * 100) + 50);
console.log(randomNum); // random number between 50 and 100

let randomNum = Math.random() * 255; // random number between 0 and 255

let string = 'JavaScript';
let randomJs = Math.random(string);
console.log(randomJs); // not sure about formula for this one and don't know the exact answer

