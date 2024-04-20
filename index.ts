#! /usr/bin/env node


import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 112233;

const pinAnswer = await inquirer.prompt([{
    name: "pin",
    type: "number",
    message: "Enter your pin..",
}]);
if (pinAnswer.pin == myPin) {
    console.log("correct pin code");

    let operationAns = await inquirer.prompt(
        [{
            name: "operation",
            type: "list",
            message: "please select options",
            choices: ["check balance","withdraw","fast cash"]
        }]
    )
   
    if (operationAns.operation === "withdraw") {
    
        let amountAnswer = await inquirer.prompt([{
                 name: "amount",
                 message: "Enter the amount..",
                 type: "number"
        }])
           if(amountAnswer.amount === myBalance || amountAnswer.amount <= myBalance)
       { myBalance -= amountAnswer.amount;
        console.log(`your remainig balance is: ${myBalance}`);}
        else {
            console.log(`insufficent balance`);
            
        }
        
    }
    else if(operationAns.operation ==="check balance"){
        console.log(`your current balance is ${myBalance}`);
        
    }
    else if (operationAns.operation === "fast cash") {
        let f_cash = await inquirer.prompt([{
            name: "fastCashAamount",
            message:"select fast cash amount..",
            type: "list",
            choices:["3000","5000","10000","15000"]
        }])
        myBalance -= f_cash.fastCashAamount;
        console.log(`your remaining amount is ${myBalance}`);
        
    }
}

else{console.log("incorrect pin code ");
}
