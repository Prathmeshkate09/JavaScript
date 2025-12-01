function greet() {
    console.log("Welcome to JavaScript!");
}

greet();


function add(a, b) {
    return a + b;
}

console.log(add(5, 10));


let marks = 75;

if (marks >= 60) {
    console.log("Passed");
} else {
    console.log("Failed");
}


for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

let fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
    console.log(fruit);
});


let student = {
    name: "Prathmesh",
    age: 22,
    course: "AI & Data Science"
};

console.log(student.name);
