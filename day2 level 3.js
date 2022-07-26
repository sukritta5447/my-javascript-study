// Exercise level 3

let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let love = /love/gi;
console.log(string.match(love)); // (3) ['Love', 'love', 'love']

let string = 'You cannot end a sentence with because because because is a conjunction';
let because = /because/gi;
console.log(string.match(because)); // (3) ['because', 'because', 'because']

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let result = sentence.replace(/\W/g, "");
console.log(result); // IamateacherandIloveteachingThereisnothingasmorerewardingaseducatingandempoweringpeopleIfoundteachingmoreinterestingthananyotherjobsDoesthismotivateyoutobeateacherThis30DaysOfJavaScriptisalsotheresultofloveofteaching

let monthSalary = 20000;
let bonus = 10000;
console.log(monthSalary*12+bonus); // 250000
