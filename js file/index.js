// UCBUCAGIN TEREFLERI
// let a = 1;
// let b = 2;
// let c = 3;

// if (a + b > c && a + c > b && b + c > a) {
//   console.log("ucbucaqdir");
// } else {
//   console.log("sert odenmir");
// }

//2 BERABER TEREFLI UCBUCAQ *

// let a = 5;
// let b = 7;
// let c = 10;
// if(a==b && b==c){
//     console.log("Beraber tereflidir")
// }else{
//     console.log("Terefler eyni deyil")
// }

//3 bolunen cut ededler
// for (i = 1; i <= 99; i++) {
//   if (i % 6 == 0) {
//     console.log(i);
//   }
// }

//4 son reqemi 4 olan iki reqemli ededler
// for (i = 14; i < 100; i += 10) {
//   console.log(i);
// }

//5 reqemleri eyni olan butun iki reqemli ededler
// for (i = 1; i < 10; i++) {
//   console.log(i * 11);
// }

//6 reqemleri muxtelif olan butun iki reqemli
// for (i = 10; i < 100; i++) {
//   if (i % 11 !== 0) console.log(i);
// }

//7 vurma cedveli
// for (let i = 1; i < 11; i++) {
//   for (let j = 1; j < 11; j++) {
//     console.log(i, "x", j, "=", i * j + " ");
//   }
// }

//8 factorial
let eded = +prompt("daxil et");
let hasil = 1;
for (i = 1; i <= eded; i++) {
  hasil = hasil * 1;
}
console.log(hasil);
