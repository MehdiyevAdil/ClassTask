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


        const contactTitle = document.querySelector(".contactTitle");
        const contactName = document.querySelector(".contactName");
        const companyName = document.querySelector(".companyName");
        const Street = document.querySelector(".Street");
        const City = document.querySelector(".City");
        const Region = document.querySelector(".Region");
        const PostalCode = document.querySelector(".PostalCode");
        const Coutry = document.querySelector(".Coutry");
        const Phone = document.querySelector(".Phone");

        const getId = document.querySelector(".getId")















        getId.addEventListener("click", function () {

            let requestBody = {
                companyName: companyName.value,
                contactName: contactName.value,
                contactTitle: contactTitle.value,
                address: {
                    street: Street.value,
                    city: City.value,
                    region: Region.value,
                    postalCode: PostalCode.value,
                    country: Coutry.value,
                    phone: Phone.value
                }
            };

            console.log(contactTitle.value)
            fetch(`https://northwind.vercel.app/api/customers/${data.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })







        })
    })
