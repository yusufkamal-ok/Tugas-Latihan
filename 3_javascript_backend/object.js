// object => tipe data untuk menyimpan pasangan kunci-nilai
// setiap nilai(value) di akses berdasarkan kuncinya (key)

// object kosong
let obj = {};

let person = {
    name : 'John',
    age : 30,
    // pekerjaan
    occupation : 'Developer'
};

// add properti object
// object.key
person.country = 'USA'
console.log('add properti : ',person);

// delete properti object
delete person.age;
console.log("delete properti : ", person);

// akses properti
console.log(person.name);

// ubah properti
person.occupation = "senior Developer";
console.log("ubah properti : ", person)


// map dan reduce pada object
// map dan reduce => methode pd array
// mengubah object ke array => Object.keys(), Object.values(), Object.entries()

// map
let salaries = {
    john : 1000,
    jane : 2000,
    jani : 3000
};

// array value dari object
let salary_value = Object.values(salaries);
console.log(salary_value);

// meningkatkan salary sebesar 10%
let increase_salary = salary_value.map(sal => (sal*0.1) + sal);
console.log("result + 10% : ",increase_salary);

// reduce
// total salary keseluruhan
let salary_sum = salary_value.reduce((total, sal) => total + sal, 0);
console.log("result sum : ",salary_sum);


// studi kasus E-commerce
// object dengan lebih dari 1
// products => array berisi objek
let products = [
    {id : 1, name:"Laptop", price : 10000},
    {id : 2, name:"phone", price : 1000},
    {id : 3, name: "tablet", price : 1500}
];

// ...item akan mengumpulkan objek yg ada di dlm array products
// harga => akan diisi oleh item.price (object.key)
let discount_product = products.map(item =>({
    ...item, harga : item.price - (item.price *0.1)
}));

console.log("Result discount 10% : ",discount_product)

console.log("result ...products",...products);

// reduce
// menghitung total semua harga produk
let total_price = products.reduce((total, item)=> total + item.price,0);
console.log("result sum price : ",total_price);
