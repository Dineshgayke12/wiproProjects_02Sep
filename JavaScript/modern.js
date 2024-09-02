let subject = "Javascript";

console.log(`The template literal: The subject is ${subject}`);

const car = {
    model: '2020',
    make: 'toyota',
    color: 'silver'
};

let { model, make, color } = car;
console.log(model + " " + make + " " + color);

let fruits = ['apple', 'berry', 'cherry'];

let [f1, f2, f3] = fruits;
console.log(f1 + " " + f2 + " " + f3);

function hello(greeting, user = "Everyone") {
    return greeting + " " + user + "!!!";
}

console.log(hello("Good Morning"));

console.log(hello("Good Morning", "Dinesh"));

const numbers =[44,34,56,72,11];

for (let n of numbers)
{
    console.log(n);
}
