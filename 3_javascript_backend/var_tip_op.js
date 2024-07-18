// deklarasi variabel => let atau const
// let => variabel yg nilainya dpt berubah
// const =>  variabel yg nilainya tdk dpt berubah
// var => cara lama mendeklarasikan variabel dn memiliki scope yg berbeda

// tipe data
let text = "hello";
let number = 45;
// boolean
let isValid = true;
// null
let data = null;
// undefined
let notDefined;
// object => strutuktur data yg kompleks
let person = {name: "jane", age:"80"};
// arrray
let numbers = [1,2,3,4,5];

// operator
let a = 3;
let b = 5;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quantient = a /b;
let remainder = a % b;
let pangkat = a**b;

console.log(person);

// perbandingan
let x = 10;
// string
let y = "10";

// loose equality (tdk membandingkan tipe data)
console.log("x==y",x==y);
// strict equality (sampai membandingkan tipe data)
console.log("x===y", x===y);

// loose equality (tdk membandingkan tipe data)
console.log("x!=y",x != y);
// strict equality
console.log("x!==y", x!==y);

console.log("x > 10",x>10);
console.log("x <=10", x <= 10);

// logika 
// && (and), || (atau), !(negasi)
let isTrue = true;
let isFalse = false;

console.log("isTrue && isFalse", isTrue && isFalse);
console.log("isTrue || isFalse", isTrue || isFalse);
console.log("isTrue != isFalse", isTrue != isFalse);
