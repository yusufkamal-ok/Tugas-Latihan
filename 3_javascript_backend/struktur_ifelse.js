const promt = require("prompt-sync")();

let age = parseInt(promt("input your age : "));

if (age >= 18){
    console.log("Adult");
} 
else {
    console.log("Young");
}

let score = parseInt(promt("Input your score : "));

if (score>=90){
    console.log("A");
}
else if (score >=80){
    console.log("B");
}
else if (score>=70){
    console.log("C");
}
else{
    console.log("D");
}

// days
let day = parseInt(promt("input the number of day : "));
let day_name;
let two_day_yesterday

switch (day){
    // day = 1, dan nilai case "1", maka case 1 akan di eksekusi
    case 1:
        day_name = "Sunday";
        two_day_yesterday = ["Friday", "Saturday"];
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
    // tdk dapat di buat menjadi operasi seperti IF Else
    // hasilnya tdk terdetsi (day > 7)
    // case day > 7:
    //     day = day / 7;
    //     day_name = day;

    // else selain case di atas
    default :
        day_name = "tidak terdeteksi";
}

console.log(day_name);
console.log(two_day_yesterday);