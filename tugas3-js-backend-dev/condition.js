const promt = require("prompt-sync")();
let number = parseInt(promt("input your number : "));

function odd_even(x){
    if(x % 2 == 0){
        return "Genap";
    }
    else{
        return "Ganjil";
    }
}

console.log("result odd or even :",odd_even(number));

// day
let day = parseInt(promt("input the number of day : "));
let day_name;

switch (day){
    case 1:
        day_name = "Sunday";
        break;
    case 2:
        day_name = "Monday";
        break;
    case 3:
        day_name = "Tuesday";
        break;
    case 4:
        day_name = "Wednesday";
        break;
    case 5:
        day_name = "Thursday";
        break;
    case 6:
        day_name = "Friday";
        break;
    case 7:
        day_name = "Saturday";
        break;
    default :
        day_name = "not detected";
}

console.log("Result day : ",day_name);