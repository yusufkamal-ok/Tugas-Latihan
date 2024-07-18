// array => kumpulan value yg diurutkan berdasarkan indeks

// array kosong
let arr = [];

let fruits = ["Apple","Banana","Cherry"];

// add elemen di akhir array
fruits.push("new_elemen_1");
console.log("add elemen : ",fruits);

// delete elemen di akhri array
// fruits.pop() => delete elemen
let last_elemen = fruits.pop();
console.log("last elemen : ",last_elemen);
console.log("delete elemen : ",fruits);

console.log(fruits[2]);

// mengubah elemen array
fruits[1] = "elemen_baru";
console.log("ubah elemen : ",fruits);


// method map dan reduce pada array
// map => membuat array baru dgn hasil dari pemanggilan fungsi

let numbers = [1,2,3,4,5];
let double = numbers.map(num => num*2);
console.log("Result Map : ",double);

// reduce => eksekusi pd setiap elemen array untuk menghasilkan hasil tunggal
let sum = numbers.reduce((total, num)=> total + num, 0);
console.log("Result sum : ", sum);