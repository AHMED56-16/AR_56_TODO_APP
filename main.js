// import inquirer from 'inquirer'
// import Choice from 'inquirer/lib/objects/choice.js';
// import Choices from 'inquirer/lib/objects/choices.js';
// //interface
// interface TodoList{
//     task:string;
//     completed:boolean;
// }
// //array
// const todeList:TodoList[]=[];
// //FUNCTION
// async function mainMenu() {
//     let action= await inquirer.prompt({
//         type:"list",
//         name:"action",
//         message:"What would you like to do?",
//         choices:["Add task","View task","Mark as complete","Delete task","Exit"]
//     });
//     switch(action) {
//         case 'Add task':
//             await addTask();
//             break;
//         case 'View task':
//             await viewTask();
//             break;
//         case 'Mark as complete':
//             await markCompleted();
//             break;
//         case 'Exit':
//             console.log("Good Bye")
//             return;
// }
// mainMenu();
// }
// let addTask= async () => {
//     let {task} = await inquirer.prompt({
//         type:"input",
//         name:"task",
//         message:"Enter the task"
//     });
//     todeList.push({task,completed:false});
//     console.log("Task addad successfully");
//     };
// let viewTask= async () => {
//     console.log("**** To Do List ****");
//     todeList.forEach((item,index) => {
//         console.log(`${index + 1}.[${item.completed ? 'x' : ''}]${item.task}`);
//      });
//      console.log("********************");
//     };
//     let markCompleted= async () => {
//         let {index} = await inquirer.prompt({
//             type:"number",
//             name:"index",
//             message:"Which function do you want to mark as completed?",
//             });
//             if(index<1 ||index>todeList.length){
//             console.log("Invalid task number.Please try again.");
//             return
//         }   
//         todeList[index-1].completed=true;
//         console.log("Task marked as completed");
//         };
//         mainMenu();
import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an Operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete", "Exit"]
        });
        if (ans.select === "Add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list!"
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select === "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "What you want to update in the list?",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list!"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select === "View") {
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select === "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "What you want to delete in the list?",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select === "Exit") {
            console.log("Thanks for using this todo app");
            break;
        }
    } while (true);
}
createTodo(todos);
