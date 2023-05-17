const btn2 = document.querySelector(".btn2");
const yoxla
  = document.querySelector(".yoxla");

yoxla
btn2.addEventListener('click', function () {
  fetch("http://localhost:3000/imtahanSuallari", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      "A": {
        "sual": "verilen sual7",
        "a": "cavab",
        "b": "cavab",
        "c": "cavab",
        "d": "cavab"
      }
    })
  }).then(res => res.json()).then(data => console.log(data))


})
let arr = [];
const table = document.querySelector('.fullQuestion');
const btn = document.querySelector(".btn");
let truecount = 0;
let falsecount = 0;
let dogru = document.createElement('p');
btn.addEventListener('click', function (e) {
  fetch("http://localhost:3000/imtahanSuallari")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, i) => {
        let h3 = document.createElement('h3');
        question = element.A.sual;
        h3.append(question);
        // console.log(h3)
        table.append(h3);
        let a = document.createElement('button');
        a.className = "answer";
        questionOne = element.A.a;
        a.append(questionOne);
        // console.log(a)
        table.append(a);
        let b = document.createElement('button');
        b.className = "answer";
        questiontwo = element.A.b;
        b.append(questiontwo);
        // console.log(b)
        table.append(b);
        let c = document.createElement('button');
        c.className = "answer";
        questionTree = element.A.c;
        c.append(questionTree);
        // console.log(c)
        table.append(c);

        let d = document.createElement('button');
        d.className = "answer";
        questionFour = element.A.d;
        d.append(questionFour);
        // console.log(d)
        table.append(d);
        let answerOne = element.A.answer;
        // console.log("cavab:", answerOne);


        e.preventDefault();
      });

      // yoxlanis

      const answerButtons = document.querySelectorAll('.answer');
      answerButtons.forEach((button, i) => {
        button.addEventListener('click', function (e) {
          console.log("target", e.target)
          e.target.style.backgroundColor = "yellow";
          arr.push(e.target.textContent);
          console.log("son arr", arr)            // if (e.target.textContent === data[i].answer) {
          //   console.log("Doğru cavap");
          //   e.target.style.backgroundColor = "green";
          //   arr.push(e.target.textContent);
          //   for(let i=0;i<arr.length;i++){
          //    if( arr[i]===answerOne){
          //     truecount++;
          //     console.log(arr);
          //    }
          //   }
          //   console.log(arr);
          // } else {
          //   arr.push(e.target.textContent);

          //   // return;
          // }
        });

      });



      // burada sade for qur

      yoxla.addEventListener("click", function () {
        console.log(arr)
        for (let j = 0; j < data.length; j++) {
          if (data[j].A.answer === arr[j]) {
            console.log(data[j].A.answer)
            console.log(arr[j])
            truecount++;
          } 
          
         
        }
        console.log("son netice", truecount)

      })

    })

  dogru.append(truecount);
  table.append(dogru);
  let yalnis = document.createElement('p');
  table.append(yalnis);
  yalnis.append(falsecount);
});
