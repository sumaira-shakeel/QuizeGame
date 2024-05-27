#!/usr/bin/env node
import inquirer from "inquirer";
async function main() {
    const quize = await inquirer.prompt([
        {
            name: "question_1",
            type: "list",
            message: "What is TypeScript?",
            choices: ["A framework", "A programming language", "A superset of JavaScript", "A database"]
        },
        {
            name: "question_2",
            type: "list",
            message: "Q2: Which keyword is used to declare a variable in TypeScript?",
            choices: ["let", "const", "var", "All of the above"]
        },
        {
            name: "question_3",
            type: "list",
            message: "Q3: How do you define a function in TypeScript?",
            choices: ["function myFunction() {}", "def myFunction() {}", "def myFunction() {}", "fn myFunction() {}"]
        },
        {
            name: "question_4",
            type: "list",
            message: "Q4:Which file extension is commonly used for TypeScript files? ",
            choices: [".js", ".ts", ".jsx", ".tsx"]
        },
        {
            name: "question_5",
            type: "list",
            message: "Q5: What does the symbol ? indicate in TypeScript?",
            choices: ["Optional parameter", "Required parameter", "Default parameter", "Rest parameter"]
        }
    ]);
    let score = 0;
    switch (quize.question_1.trim()) {
        case "A superset of JavaScript":
            console.log("1. correct!");
            ++score;
            break;
        default:
            console.log("1. Incorrect!");
    }
    switch (quize.question_2.trim()) {
        case "All of the above":
            console.log("2. correct!");
            ++score;
            break;
        default:
            console.log("2. Incorrect!");
    }
    switch (quize.question_3.trim()) {
        case "function myFunction() {}":
            console.log("3. correct!");
            ++score;
            break;
        default:
            console.log("3. Incorrect!");
    }
    switch (quize.question_4.trim()) {
        case ".ts":
            console.log("4. correct!");
            ++score;
            break;
        default:
            console.log("4. Incorrect!");
    }
    switch (quize.question_5.trim()) {
        case "Optional parameter":
            console.log("5. correct!");
            ++score;
            break;
        default:
            console.log("5. Incorrect!");
    }
    console.log(`Score: ${score}`);
}
main();
