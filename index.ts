#! /usr/bin/env node

import inquirer from "inquirer";
let todos=[];
let condition= true;

while(condition){
    let add = await inquirer.prompt([
        {
            name: "todo", type: "input", message:"What do you want to add in your todos?"
        },
        {
            name: "confirm", type: "confirm", message:"Do you want to add more in your todos?", default: "false"
        }
    ])
    todos.push(add.todo);
    condition= add.confirm;
    console.log(todos);
}
