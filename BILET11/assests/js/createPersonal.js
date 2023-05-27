// createAPIPersonal 
const crudForms = document.querySelector(".crudForms")
crudForms.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        companyName: document.getElementById('TASKname').value,
        contactName: document.getElementById('TASKcompany').value,
        contactTitle: document.getElementById('TASKcontact').value,
        address: {
            street: document.getElementById('TASKstreet').value,
            city: document.getElementById('TASKcity').value,
            region: document.getElementById('TASKregion').value,
            postalCode: document.getElementById('TASKcode').value,
            country: document.getElementById('TASKcountry').value,
            phone: document.getElementById('TASKphone').value,
        }
    };
    console.log((data))

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
// update

