#! usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to Codewithsaad - CLI Number Gussing Game");


let myTasks: any[] = []
let isRunning: boolean = true
while(isRunning) {
const answers = await inquirer.prompt([
  {
    name: "option",
    type: "list",
    message: "Select your option",
    choices: ["Add new task",
      "View Tasks",
      "Exit"]}])
switch(answers.option) {
  case "Add new task":
    const newTask = await inquirer.prompt([
      {
        name: "task",
        type: "input",
        message: "Enter your task"
      }
    ])
    myTasks.push(newTask.task)
    console.log('Added new task:', newTask.task);
    break;
  case "View Tasks":
    console.table(myTasks);
    break;
  case "Exit":
    console.log("Exit");
    isRunning = false;
    break;
  default:
    console.log("Invalid option");
    break;}
}