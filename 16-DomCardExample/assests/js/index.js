//images startr
const main_box_colors__blue = document.getElementById('main_box_colors__blue');
const main_box_colors__red = document.getElementById('main_box_colors__red');

const main_Box1__img3 = document.getElementById("main_Box1__img3");
const main_Box1__img2 = document.getElementById("main_Box1__img2");
const main_Box2__Price = document.getElementById('main_Box2__Price');

main_box_colors__blue.addEventListener('click', function () {
        main__Box1.classList.add("change");
});
main_box_colors__red.addEventListener("click", function () {
        main__Box1.classList.remove("change");
});




//images end

// sizes start
let main_Box2__Buttons = document.getElementById('main_Box2__Buttons');
for (let i = 0; i < main_Box2__Buttons.children.length; i++) {
        main_Box2__Buttons.children[i].addEventListener("click", function () {
                for (let j = 0; j < main_Box2__Buttons.children.length; j++) {
                        main_Box2__Buttons.children[j].style.cssText = "";
                }
                main_Box2__Buttons.children[i].style.cssText = `
              width: 2rem;
              height: 2rem;
              background-color: #25d393;
              color: #fff;
              border-radius: 50%;
              display: grid;
              place-items: center;
            `;
        });
}
//       sizes end

//       stars start
let main_Box__Stars = document.getElementById('main_Box__Stars');
for (let i = 0; i < main_Box__Stars.children.length; i++) {
        main_Box__Stars.children[i].addEventListener("click", function () {
                for (let j = 0; j < main_Box__Stars.children.length; j++) {
                        main_Box__Stars.children[j].style.cssText;
                }
                main_Box__Stars.children[i].style.cssText = `
              color: black;
              
            `;
        });
}
// stars end


// ==================================================================
main_box_colors__blue.addEventListener('click', function () {
        main__Box1.classList.add("colorPrice");

});

 //  main__Box1.classList.add("colorPrice");

// main_box_colors__blue.addEventListener('click', function () {
// main__Box1 = main__Box1.style.backgroundColor = '#b40020';
// main_Box2__Price= main_Box2__Price .style.backgroundColor="#b40020";
// main_Box2__Price= main_Box2__Price.innerText='USD 450,00';
// });

// document.querySelector('#main_Box__Stars').addEventListener('click', function (e) {
//         let action = 'add';
//         for (const main_Box__Stars of this.children) {
//             main_Box__Stars.classList[action]('active');
//             if (main_Box__Stars === e.target) action = 'remove';
//         }
//     });
   