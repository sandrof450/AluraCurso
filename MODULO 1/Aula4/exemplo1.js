function sayHello(name, age){
    console.log(`Hello ${name}. you have ${age} years`);
}

function sum(x, y){
    const result = x + y;
    return result;
}

const people = [];

people.push({
    name: "Sandro",
    age: 20,
    height: 170,
    job: "Programador",
});

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

const name = "Lucas"
const age = 20;
//Invoka função
sayHello(name, age);
//referencia função
// sayHello;
// console.log(sayHello);

// const result = sum(2, 3);
// console.log("result: ", result);