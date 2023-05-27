const link = window.location.hash.slice(1);
const apiDetalisUrl = `https://northwind.vercel.app/api/customers/${link}`;
const cardDetalis = document.querySelector('.cardDetalis');
fetch(apiDetalisUrl).then((res) => res.json())
    .then((data) => {
        const textData = document.createElement('div');
        textData.className = 'textSize';
        cardDetalis.append(textData);
        textData.innerHTML = `
    <p>ID: ${data.id}</p>
    <input class="contactTitle" type="text" placeholder="name" value="${data.contactTitle}" >
    <input class="contactName" type="text" placeholder="name" value="${data.contactName}" >  
    <input class="companyName" type="text" placeholder="name" value="${data.companyName}" >  
    <input class="Street" type="text" placeholder="name" value="${data.address.street}" >  
    <input class="City" type="text" placeholder="name" value="${data.address.city}" >   
    <input class="Region" type="text" placeholder="name" value="${data.address.region}" >   
    <input class="PostalCode" type="text" placeholder="name" value="${data.address.postalCode}" >      
    <input class="Coutry" type="text" placeholder="name" value="${data.address.coutry}" >      
    <input class="Phone" type="text" placeholder="name" value="${data.address.phone}" >      
<button class="getId">update</button>

    `
    const contactTitle=document.querySelector(".contactTitle")
    const getId=document.querySelector(".getId")






    getId.addEventListener("click", function(){

        let data = {
         
            contactTitle: contactTitle.value,
     
        };
        fetch(apiDetalisUrl, {
            method: 'DELETE',
          })

        console.log(contactTitle.value)
        fetch('https://northwind.vercel.app/api/customers', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })






        
    })
    })

  