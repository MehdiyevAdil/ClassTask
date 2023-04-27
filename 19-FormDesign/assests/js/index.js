
let named=document.getElementById('name');
let button = document.querySelector(".login");
let forms = document.querySelector(".forms");
let mails=document.querySelector(".mailes");
let password = document.querySelector(".password");
let repPasw = document.querySelector(".repPasw");



console.log(password);
console.log(repPasw);
console.log(mails);



// ad soyad caph etme
// forms.addEventListener("submit",function(e){
//     console.log(named.value);
//     e.preventDefault();
// });

// password tekrarlansin
// password.addEventListener("keyup",function(e){
//     repPasw.value=password.value;
// })

// 3,4.5,6 object kimi consola cixsin
let arr=[];
forms.addEventListener("submit",function(e){
let human={
    full_name:"",
    myMail:""
}
human.full_name=named.value;
human.myMail=mails.value;
arr.push(human);
console.log(human)
localStorage.setItem("arr", JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem("arr")));
let human2={
    full_name:"",
    myMail:""
}
e.preventDefault();
})

// 7







// function getevents(a) {
    
//     console.log(a);
// }
// function getevents(a, b) {
//    console.log( 5 + 6);
// }
// function getevents() {
//     console.log("adil");
// }
