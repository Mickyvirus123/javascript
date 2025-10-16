const name = "ali"
const repoCount = 10

// console.log(name + repoCount + "value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('ali-khan')

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "  alikhan  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ali.com/ali%24khan"
console.log(url.replace('%24', '#'));

console.log(url.includes('com'));
// havcgdvcg