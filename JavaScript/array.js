const arrayFromString=Array.from("This is my String");

console.log(arrayFromString);

let fruits= ['apple','berry','cherry'];

const f = fruits.entries();

for(let i of f){
    console.log(i);
}