const card = document.querySelector('#card');
let url = 'https://northwind.vercel.app/api/customers';
let loadedCards = 4; // Counter for tracking the number of cards loaded

function getApi(filter = '') {
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      const filteredData = data.filter(element => element.name.includes(filter)); // Apply filter criteria
      
      const batch = filteredData.slice(loadedCards, loadedCards + 4); // Get the next 4 cards
      
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

      if (loadedCards >= filteredData.length) {
        // Hide the "Load More" button if all filtered cards have been loaded
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'block';
      }
    })
}

function loadMore() {
  getApi();
}

function applyFilter() {
  const filterInput = document.querySelector('#filterInput');
  const filterValue = filterInput.value.trim();
  loadedCards = 0; // Reset the loaded cards counter
  card.innerHTML = ''; // Clear the existing cards
  getApi(filterValue);
}

// Create the filter input element
const filterInput = document.createElement('input');
filterInput.id = 'filterInput';
filterInput.placeholder = 'Enter filter criteria...';

// Create the apply filter button
const applyFilterBtn = document.createElement('button');
applyFilterBtn.innerText = 'Apply Filter';
applyFilterBtn.addEventListener('click', applyFilter);

// Add the filter input and apply filter button to the card div
card.append(filterInput);
card.append(applyFilterBtn);

// Create the "Load More" button dynamically
const loadMoreBtn = document.createElement('button');
card.append(loadMoreBtn)
loadMoreBtn.id = 'loadMoreBtn';
loadMoreBtn.innerText = 'Load More';
loadMoreBtn.addEventListener('click', loadMore);

// Add the button to the document
document.body.appendChild(loadMoreBtn);
