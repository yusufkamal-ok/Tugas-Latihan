// versi 1 menggunakan for
console.log("versi 1 menggunakan for");
for (let i =0; i< 5 ;i++){
    console.log(i);
}

console.log()
// versi 2 menggunakan while
console.log("versi 2 menggunakan while");
let j = 0;

while(j < 5){
    console.log(j)
    j++;
}

console.log()
console.log("versi 3 do while")
// versi 3 do while
let k = 0;
// eksekusi dulu baru di cek
do {
    console.log(k);
    k++
} while(k < 5);

// versi foreach
// sytax => array.forEach(function(currentValue, index, arr), thisValue)
// ouput 1-10
[ ...Array(10) ].forEach((e, i) => console.log(++i));
