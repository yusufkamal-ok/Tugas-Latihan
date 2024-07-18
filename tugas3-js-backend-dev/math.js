const prompt = require("prompt-sync")();
let r = prompt("input jari-jari lingkaran : ");
const k = 22/7

function L_circle(x){
    return  k * (x**2);
}
console.log("Luas = ",L_circle(r));

// array
let length = parseInt(prompt("panjang array : "));
let arr = []
for(let i=0;i<length;i++){
    let input = parseInt(prompt(`input nilai array  ke ${i}: `));
    arr.push(input);
}
function square_arr(arr){
    return arr.map(num => num**2);
}

console.log("Kuadrat array : ",square_arr(arr));