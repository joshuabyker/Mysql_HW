var mysql = require("mysql");

var inquirer = require("inquirer");
var Electronics = ["Iphone X", "PS4", "Beats By Dre"];
var Housewear = ["Blender", "Toaster", "Pots"];

var connection = mysql.createConnection({
    host: "localhost",

    port:3306,

    user:"root",

    password: "Omfg1234556!",

    database: "Amazon_DB"
});

connection.connect(function(err){
    if(err) throw err;

    start();
});

function start(){
    inquirer
    .prompt({
        name: "Buy",
        type: "list",
        message:"What would you like to buy today?",
        choices: [Electronics,Housewear]
    })
    .then(function(answer){
        if(answer.Buy === Electronics){
            console.log("Which Item would you like to buy today?"+  inquirer
            .prompt({
                name: "Electronics",
                type: "list",
                message:"What would you like to buy today?",
                choices: ["Iphone X", "PS4", "Beats By Dre"]
            }));
        }
        else if(answer.Buy === Housewear){
            console.log("How would you like to spice up the kitchen today?"+inquirer
            .prompt({
                name: "Electronics",
                type: "list",
                message:"What would you like to buy today?",
                choices: ["Blender", "Toaster", "Pots"]
            })); 
        }
        
    })
}