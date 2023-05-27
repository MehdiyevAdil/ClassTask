const link = window.location.hash.slice(1);
const apiDetalisUrl = `https://northwind.vercel.app/api/customers/${link}`;
// Sayfa yüklendiğinde yapılacak işlemler
window.onload = function() {
    // Formu yakalayın
    var form = document.querySelector('.crudForm');

    // Update butonuna tıklandığında yapılacak işlemler
    document.getElementById('update').addEventListener('click', function(event) {
      event.preventDefault(); // Formun otomatik gönderimini engellemek için

      // Formdaki değerleri alın
      var name = document.getElementById('TASKname').value;
      var companyName = document.getElementById('TASKcompany').value;
      var contactName = document.getElementById('TASKcontact').value;
      var contactTitle = document.getElementById('TASKtitle').value;
      var street = document.getElementById('TASKstreet').value;
      var city = document.getElementById('TASKcity').value;
      var region = document.getElementById('TASKregion').value;
      var code = document.getElementById('TASKcode').value;
      var country = document.getElementById('TASKcountry').value;
      var phone = document.getElementById('TASKphone').value;

      // API'ye güncelleme isteği gönderin
      // Bu adımda API'nin URL'sini ve isteği nasıl yapacağınızı belirlemeniz gerekecektir.
      // Örneğin, Ajax veya fetch API'sini kullanarak güncelleme isteği gönderebilirsiniz.
      // Burada bir örnek göstereceğim:
      fetch(apiDetalisUrl, {
        method: 'PUT',
        body: JSON.stringify({
          name: name,
          companyName: companyName,
          contactName: contactName,
          contactTitle: contactTitle,
          street: street,
          city: city,
          region: region,
          code: code,
          country: country,
          phone: phone
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function(response) {
          if (response.ok) {
            // Güncelleme başarılı olduğunda yapılacak işlemler
            console.log('Güncelleme başarılı.');
          } else {
            // Güncelleme başarısız olduğunda yapılacak işlemler
            console.log('Güncelleme başarısız.');
          }
        })
        .catch(function(error) {
          console.log('Bir hata oluştu:', error);
        });
    });
  };
