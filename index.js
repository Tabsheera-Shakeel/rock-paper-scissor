#! /usr/bin/env node
import inquirer from "inquirer";
let player = await inquirer.prompt([
    {
        name: "player1Name",
        type: "input",
        message: "player1, Enter Your Name",
    },
    {
        name: "player2Name",
        type: "input",
        message: "player2, Enter Yuour Name",
    }
]);
let game = await inquirer.prompt([{
        name: "player1",
        type: "list",
        message: `${player.player1Name} \t\n CHOOSE ONE, PLAYER 1 \t\n`,
        choices: ["ROCK", "PAPER", "SCISSORS"],
    },
    {
        name: "player2",
        type: "list",
        message: `${player.player2Name}  \t\nCHOOSE ONE, PLAYER 2\t\n`,
        choices: ["ROCK", "PAPER", "SCISSORS"],
    }
]);
if (game.player1 === game.player2) {
    console.log("\t\n its a tie!!!\t\n");
}
else if ((game.player1 === "ROCK" && game.player2 === "SCISSORS") ||
    (game.player1 === "PAPER" && game.player2 === "ROCK") ||
    (game.player1 === "SCISSORS" && game.player2 === "PAPER")) {
    console.log(`${player.player1Name}\t\n YOU WIN !!!\t\n `);
}
else {
    console.log(`${player.player2Name} \t\n YOU WIN!!! \t\n `);
}
