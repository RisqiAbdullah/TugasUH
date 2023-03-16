// Ada lima macam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2 
// yaitu counted loop and uncounted loop
// perbedaan nya 
// 1. counted loop merupakan perulanagan yang jelas dan sudah tentu banyak perulangannya
// 2. uncounted kali harus mengulang/contyoh 
// function PushUp(){
//     //Code
// }
// for(i = 1; i<=10; i++){
//     PushUp();
// }

// let bosan;
// //contoh
// while(bosan == false){
//     PushUp(); 
// }

// macam perulangan counted loop
// 1. perulangan for
// 2 perulangan foreach
// 3 perulangan repeat

// macam macam perulangan uncounted loop
// 1. perulangan while
// 2. perulangan Do/while

// perulangan for 
// perulangan for merupakan perulangan yang termasuk dlama countes loop, karena sudah jelas berapa kal akan mengulang sebuah perulangan
// contoh

// for (let i = 0; i < 10; i++){
//     document.write(`<p>Perulangan ini berulang ${i } kali</p>`)
// }

// perulagan while
// perulangan while merupakan perulangan yang termasuk kedalam perulangan uncounted loop namu n perulangan while juga dapat masuk atau menjadi perulanga yang counted
// loop dengan memberikan sebuah counter didalamnya

// contoh
// let ulang = confirm("Apakah anda mau mengulang?");
// let counter = 0;

// while(ulang){
//     let jawab = confirm("Apakah anda mau mengulangan?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//    }
// }

// document.write("Perulangan sudah dilakukan sebanyak " + counter + "Kali");


// perulangan do/while
// perulagan do/while sama seperti perulangan whileakan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurung while

// do{
//     //code
// }while(kondisi);

// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("Apakah anda mau mengulang?");
// }while(ulang);


// document.write("Pengulangan yang sudah dilakukan sebanyak " + counter +" kal");

// let sum = "";
//  while(true){
//     for
//     let value = prompt("Masukkan sebuah huruf", '');
//     if(!value) break;

//     sum+= value;
// }

// alert('sum : ' + sum );

// 4.perulangan foreach
// perulanan foreach biasa nya di gunakan untuk mencetak item di dalam array 
// perulangan ini termasuk dalam perulangan counted logo, karena jumlah perulangannya akan ditentukan oleh panjang dari array
// ada dua cara menggunakan perulangan foreach :
// 1. dengan menggunakan operator in
// 2. menggunakan method foreach

// contoh
// let bahasa = ["Javascript", "java", "objektif-c", "python"];
// for (let i = 0; i < bahasa.length; i++){
//     document.write(`${i + 1}.${bahasa[I]}<br/>`);
// }

// let bahasaPemrograman = ["Javascript", "Java", "Objective-c", "python"];
// for (let i in bahasaPemrograman){
//     document.write(`${i}.${bahasaPemrograman[i]}<br/>`);
// }

// let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]; //ini array
// hari.forEach(function (hari) {
//     document.write(`<h1>${hari}</h1>`);
// })

// hari.forEach((hari) => {
//     document.write(`<h1>${hari}</h1>`) 

// });
// perulangan dengan method repeat()
// perulangan dengan menggunakan method atau fungsi repeat() termasuk dalam perulangan counted loop

// fungsi ini khusus digunakan untuk mengulang teks (string);

// for (let i = 0; i < 10; i++){
//     document.write(`ulangi kalimat ini! <br>`);
// }

// document.write(`Ulangi kalimat ini! <br>`.repeat(10));

// 6. perulangan nested (bersarang) 
// NESTED loop adalah perulangan bersarang (perulangan di dalam perulangan)

// for (let i = 0; i < 10; i++){
//     for (let j = 0; j < 10; j++){
//         document.write(`<p>perulangan ke- ${i}, ${j} </p>`)
//     }
// } 

// var ulangi = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while(ulangi){
//     var jawab = confirm("Apakah anda mau mengulang?")
//     counter++;
//     if(jawab == false){
//         ulangi = false;
//     }
// }

// document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");

// var ulangi = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while(ulangi){
//     counter++;
//     ulangi = confirm("Apakah anda mau mengulang?");
// }

// document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");

// var ulangi = confirm("apakah anda ingin mengulang?");
// var counter = 20;

// while (ulangi) {
//     counter--;
//     var bintang = "*".repeat(counter) + "<br>";
//     document.write(counter + ": " + bintang);
//     ulangi = confirm("apakah anda ingin mengulang?");
// }

// function kali(a, b) {
//     // parameter
//     console.log(`Nilai Inputan pertama ${a}`);
//     console.log(`Nilai Inputan kedua ${b}`);
//     return a * b;
// }

// nilai1 = parseInt(prompt("Masukan nilai 1"));
// nilai2 = parseInt(prompt("Masukan nilai 2"));
// var coba = tambah(nilai1, nilai2);
// console.log(coba);

// var tampilPesan = function (nama) {
//     alert("halo" + nama);
// };


// tampilPesan(" Risqi");

// let arr = ["Dani", "Juhaeni", 10, 1];

// arr.push("danendra", 10);

// console.log(arr.join(" - "));

// Array.splice(2, 2, "saddam", "Nicolas");
// console.log(arr)

//Method filter berfungsi untuk menyaring data di array.
//parameter yang harus diberikan pada method filter() sama seperti method foreach(), yaitu sebuah fungsi callback

// const angka = [1,2,3,4,5,6,7,8,9,];

// const filterArr = angka.filter((item) => {
//     return item % 2 == 0
// });
// console.log(filterArr);

// var mobil = [{
//     merek: 'toyota',
//     nama: 'supra',
//     pintu: '2'
// },
// {
//     merek: 'nissan',
//     nama: 'gt-r 34',
//     pintu: '2'
// },
// {
//     merek: 'toyota',
//     nama: 'alphard',
//     pintu: '4'
// },                                                                 
// {
//     merek: 'mazda',
//     nama: 'rx-7',
//     pintu: '4'
// },
// {
//     merek: 'toyota',
//     nama: 'supra',
//     pintu: '2'
// }
// ];

// let Nama = prompt("Jumlah pintu? : ", "2"); 
// const pintu = mobil.filter((mobil) => mobil.pintu === Nama)
// console.log(Nama)

//METHOD INCLUDES
//INNI BERFUNGSI UNTUK MENGECEK APAKAH SEBUAH DATA ADA DI DALAM ARRAY ATAU TIDAK BIASANYA DIGUNAKAN UNTUK MELSKUKAN PENCARIAN UNTUK MEMASTIKAN DATA SUDAH ADA DI DALAM ARRAY
// let tanaman = ["padi", "kacang", "jagung", "genjer", "toge"];

// let isTheNuts = tanaman.includes("Kacang")
// console.log(isThereNuts);


//method sort
//berfungsi untuk mengurutkan data pada array

// var sortAlfabet = ['a', 'b', 'c', 'e', 'z', 'g'];
// var sortAngka = [3,2,4,5,6,7,8,9,10];

// console.log(sortAlfabet.sort());
// console.log(sortAngka.sort());

// function tambah (a)

// function  tambah (a,b){
//     return a + b;
// }
// function  kurang (a,b){
//     return a - b;
// }
// function  bagi (a,b){
//     return a / b;
// }
// function  kali (a,b){
//     return a * b;
// }

// let operator = prompt("masukan operator");
// var a= parseInt(prompt(`masukan nilai 1:`));
// var b= parseInt(prompt(`masukan nilai 2:`));

// if(operator == '+'){
//     var hasil= tambah(a,b);
//     document.write(hasil);
// }
// if(operator == '-'){
//     var hasil= kurang(a,b);
//     document.write(hasil);
// }
// if(operator == '/'){
//     var hasil= bagi(a,b);
//     document.write(hasil);
// }
// if(operator == '*'){
//     var hasil= kali(a,b);
//     document.write(hasil);
// }

// function cetakFunction(){
//     return `Hallo Nama saya` + a
// }

// console.log(cetakFunction("Zero"));

// let myFunction(a,b){
//     return a + b
// }






//  let objDaftarPeserta = {
//      nama: 'john',
//      gender: '2',
//      hobi: 'badminton',
//      tahun: '2000',
//      bahasa: 'indonesia'
//  }

// console.log(obbjDaftarPeserta)

// //6 
const adaBijinya = [
{
    nama: 'nanas',
    warna: 'kuning',
    adabijinya: 'tidak',
    harga: '11000'
},
{
    nama: 'jeruk',
    warna: 'oranye',
    adabijnya: 'ada',
    harga: '10000'
},
{
    nama: 'semangka',
    warna: 'hijau & merah',
    adabijinya: 'ada',
    harga: '30000'
},
{
    nama: 'pisang',
    warna: 'kuning',
    adabijinya: 'tidak',
    harga: '6000'
},
];

const cekBiji = buah.filter((buah) => buah.adaBijinya === 'tidak');

console.log(cekBiji);