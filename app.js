// inquirer install
import inquirer from "inquirer";
// currency conversion object
let currencyConversion = {
    PKR: {
        PKR: 1,
        GBP: 0.0028,
        USD: 0.0036,
    },
    GBP: {
        PKR: 350.76,
        GBP: 1,
        USD: 1.26,
    },
    USD: {
        PKR: 277.54,
        GBP: 0.79,
        USD: 1,
    },
};
// promptt user for input
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Pleace select your currency?",
        choices: ["PKR", "GBP", "USD"],
        default: "USD",
    },
    {
        type: "list",
        name: "to",
        message: "Pleace select your conversion rate?",
        choices: ["PKR", "GBP", "USD"],
        default: "USD",
    },
    {
        type: "number",
        name: "amount",
        message: "Pleace enter your amount?",
    },
]);
// Destructuring User Input
const { from, to, amount } = answer;
// perform curreny conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid conversion");
}
