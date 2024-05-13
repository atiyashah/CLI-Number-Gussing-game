#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//print welcome message
console.log(chalk.bold.rgb(284, 284,284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk.bold.rgb(284, 284,284)(`<<<=======>>> ${chalk.bold.hex(`#9999FF`)(`Welcome to \`Atiya Shah \` -CLI number-gussing-game`)}  <<<=========>>>`));
console.log(chalk.bold.rgb(284, 284,284)(`\t\t <<<==============================>>>\n`));

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
{
name: "userGuessedNumber",
type: "number",
message:chalk.yellow("Entre your guess number Number Limit from 1 to 5:\n"),
}
]);

if (answer.userGuessedNumber ===randomNumber){
console.log(chalk.green.bold("congratulation ! you guess a correct number."));

}
else {
console.log(chalk.redBright("sorry, you guess a wrong number"));
}

