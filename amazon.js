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
        choices: ["Electronics","Housewear"]
    })
    .then(function(answer){
        if(answer.Buy === "Electronics"){
            BuyItem();
           
        }
        else if(answer.Buy === "Housewear"){
            BuyItem();
        }
        });
        
        function BuyItem(){
            console.log("Which Item would make you more stylish today?"+
            inquirer
            .prompt([{
                name:"Electronics",
                type: "list",
                message:"Which of these item's captures your eyes?",
                choices:["IphoneX", "PS4", "Beats By Dre"]
                
            },
        {
            name:"Purchase",
            type:"list",
            message:"which version would you like?",
            choices:["New:$900", "Used: $700"]

        }
        ]),
        inquirer
        .prompt([{
            name:"Housewear",
            type:"list",
            message:"How can we spice up your house today?",
            choices:["Blender", "Toaster", "Pots"]
        }]),
        {
            name:"Purchase",
            type:"list",
            message:"Great Item, we have that!",
            choices:["$300"]

        }
    
        // function ShippinInfo(){
           
        //             inquirer
        //             .prompt([{
        //                 name:"state",
        //                 type:"input",
        //                 message:"What is your postal address?"
        //             }])
                
        //     }

        
      

            )}}
