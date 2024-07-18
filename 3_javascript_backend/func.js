// function => blok kode yg dirancang untuk melakukan tgs tertentu
function halo(name){
    return `Hello ${name}`;
}

function arit(x){
    hasil = x**x;
    return hasil
}

// function disimpan  dlm variabel
const halo_aja = function(name){
    return `Hello ${name}`;
};

//function parameter default
function halo_2 (name="guest"){
    return `Hello ${name}`;
}


console.log(halo("oke"));
console.log(arit(2));
console.log(halo_aja("okee2"));

// tanppa input
console.log(halo_2());
// menggunakan input
console.log(halo_2("okeee3"));

// rest parameter => mengumpulkan argumen(elemen) dalam array
// ...numbers => input array (1,2,3,4)
function sum(...numbers){
    // reduce() => metode eksekusi array
    // total => nilai yg dihasilkan dari (total + num)
    // num => nilai saat ini
    // 0 => inisiasi nilai awal
    // misal array (1, 2 ,3, 4), eksekusi pertama : 
    // total = inisiasi nilai awal, 
    // num = 0(inisiasi nilai awal) jika tdk ada inisiasi nilai awal makan num = 1 (array pertama)
    // eksekusi kedua:
    // total = 1, num=2
    return numbers.reduce((total,num)=> total + num,0);
}

console.log("Result Sum : ",sum(1,2,3,4));

// spread operator => menyebarkan elemen array
const arr1 = [1,2,3,4];
// ...arr1 => input array
const arr2 = [...arr1,4,5,6,7];

console.log("result merge array : ",arr2);