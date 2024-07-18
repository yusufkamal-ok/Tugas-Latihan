// tipe data primitif
let text = "123";
const a = 60;
const b = 80;
var data = null;
var isTrue = true;
var isFalse = false;
let notDefined;

// tipe data non primitif
let product = {name : "laptop", price : 1000, quantity : 80};
let numbers = [1,2,3,4,5,6,7,8];

// arimatika
let c = 4;
let sum_number = numbers.reduce((total,sum)=> total + sum, 0);
console.log("result ke 1 : ",((a/b)+(b**c)-(b%c))*c - (numbers[3] * product.price) + (sum_number / product.quantity));

// perbandingan
let x = 123;
console.log("result ke 2 : ",(text==x || text===x) && (data==notDefined || isTrue != isFalse) && (a<=b || x!==text) &&(product.name == text || numbers[2] > b));
