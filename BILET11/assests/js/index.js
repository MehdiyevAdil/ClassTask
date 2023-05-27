
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// ---------------------------------------------------
const apiBaseUrl = 'https://northwind.vercel.app/api/customers';
const cardApi = document.querySelector('.cardApi');


fetch(apiBaseUrl)
    .then((res) => res.json())
    .then((data) => {
      // .slice(0,3)
        data.forEach(element => {
            const cardText = document.createElement('div');
            const idText = document.createElement('p');
            cardText.className = "cardText";
            const ID = element.id;
            idText.append(ID);
            cardText.append(idText)
            cardApi.append(cardText);
            console.log(cardApi);
            const detalis=document.createElement('a');
            cardText.append(detalis);
            detalis.innerText="Detalis";
            detalis.target="_blank";
            detalis.href='detalisCard.html#'+element.id
        });
    })