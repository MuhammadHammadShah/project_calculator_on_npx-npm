#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
let sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("lets start calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(` _____________________
|  _________________  |
| |Welcome Community| |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);
}
async function askQuestion() {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "which operation do you want to perform?\n",
            choices: ["addition", "substraction", "multiplication", "division"],
        },
        {
            type: "number",
            name: "num1",
            message: "enter number 1",
        },
        {
            type: "number",
            name: "num2",
            message: "enter number 2 ",
        },
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.operator == "addition") {
            console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.operator == "substraction") {
            console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if (answers.operator == "multiplication") {
            console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.operator == "division") {
            console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
    });
    // .catch((error) => {
    //   if (error.isTtyError) {
    //     // Prompt couldn't be rendered in the current environment
    //   } else {
    //     // Something else went wrong
    //   }
    // });
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you want to continue? Press y/n",
        });
    } while (again.restart == "y");
}
await welcome();
startAgain();
