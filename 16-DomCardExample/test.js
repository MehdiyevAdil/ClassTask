// 1) backraundun rengi random
function changeBackground() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

// using inline variable
    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}

// 2) reqemin buttonlarla artirib coxaltmaq
// const h2 = document.getElementById("hidi");

// const bir = document.getElementById("bir");
// bir.addEventListener("click", function () {
//         h2.innerText = + h2.innerText + 1;

// })

// const iki = document.getElementById("iki");
// iki.onclick = function () {
//         if (h2.innerText > 0) {
//                 h2.innerText = + h2.innerText - 1;
//         }
// }

// 3
// const btn = document.getElementById("btn")
// const div = document.getElementById("div")
// div.style.cssText = "border:solid black";
// btn.addEventListener("click", function () {
//         let x = prompt("daxil et: ");
//         let new_element = document.createElement("div");
//         new_element.innerHTML = x;
//         div.append(new_element);
//         new_element.style.cssText = "border:1px solid blue";
//         " margin-bottom:5px";
// });


