// const card=document.querySelector('#card');
// let url=('https://northwind.vercel.app/api/customers');

// function getApi(){
// fetch(url)
// .then(res=>res.json())
// .then((data)=>{
//     data.forEach(element => {
//         const cardContent=document.createElement('div');
//         cardContent.className='sizeClass';
//         card.append(cardContent);
//         console.log(card)
//         const ID=element.id;
//         const p=document.createElement('p');
//         p.append(ID)
//         cardContent.append(p);
//         const detalis=document.createElement('a');
//         cardContent.append(detalis)
//         detalis.innerText='DETALIS';
//         detalis.target='_blank';
//         detalis.href='loadMore.html#'+element.id
//     });
// })
// }
// getApi();
// -------------
const card = document.querySelector('#card');
const mainContent=document.querySelector('.mainContent');
let url = 'https://northwind.vercel.app/api/customers';
let loadedCards = 4; // Counter for tracking the number of cards loaded

function getApi() {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      const batch = data.slice(loadedCards, loadedCards + 4); // Get the next 4 cards
      
      batch.forEach(element => {
        const cardContent = document.createElement('div');
        cardContent.className = 'sizeClass';
        card.append(cardContent);
        
        const ID = element.id;
        const p = document.createElement('p');
        p.append(ID)
        cardContent.append(p);
        
        const details = document.createElement('a');
        cardContent.append(details);
        details.innerText = 'DETAILS';
        details.target = '_blank';
        details.href = 'loadMore.html#' + element.id;
      });

      loadedCards += batch.length; // Increment the counter by the number of loaded cards

      if (loadedCards >= data.length) {
        // Hide the "Load More" button if all cards have been loaded
        loadMoreBtn.style.display = 'none';
      }
    })
}

function loadMore() {
  getApi();
}

// Create the "Load More" button dynamically
const loadMoreBtn = document.createElement('button');
card.append(loadMoreBtn)
loadMoreBtn.id = 'loadMoreBtn';
loadMoreBtn.innerText = 'Load More';
loadMoreBtn.addEventListener('click', loadMore);

// Add the button to the document
mainContent.appendChild(loadMoreBtn);
