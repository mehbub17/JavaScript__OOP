function greet(name = "Guest", age = "Unknown") {
    console.log(`Hello, ${name}. Your age is ${age}.`);
}

greet("John", 25);
greet("Sarah");
greet();
