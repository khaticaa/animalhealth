let shop = `http://localhost:3000/shop/`
let cards = document.querySelector(".cards");
let sortBtn = document.querySelector(".sort");
let emptyAlert = document.querySelector('.empty')
let sorted = "asc";
let filteredArr = [];

let sum = 0;

const plus = ( id, inBasket) => {
  inBasket++
  axios.patch(shop+ id, { inBasket:  inBasket}).then(res=>window.location.reload())
}


const minus = ( id, inBasket) => {
  inBasket> 1 ?  inBasket -- :  inBasket = 1
  axios.patch(shop+ id, {inBasket: inBasket}).then(res=>window.location.reload())
}


let addCount = async (id, inBasket) => {
  await axios.patch("http://localhost:3000/shop/"+id, {inBasket : inBasket + 1})
  window.location.reload()
} 

let removeCount = async (id,inBasket) => {
  if( inBasket  == 1 ){
    await axios.patch("http://localhost:3000/shop/"+id, {inBasket : null})
  }else{
    await axios.patch("http://localhost:3000/shop/"+id, {inBasket : inBasket - 1})
    window.location.reload();
  }

}

let account = JSON.parse(localStorage.getItem('currentUser'))


async function getAllCards() {
  let res = await axios.get("http://localhost:3000/acount/");
  let data = await res.data;
  const currentUserInfo = data.find(user => user.name === account.name).Id;
  cards.innerHTML=""
  filteredArr = filteredArr.length ? filteredArr : data;
  currentUserInfo.forEach((el) => {
    if (el.inBasket) {
      emptyAlert.style.display = 'none'
      cards.innerHTML += `
      <div class="card">
    
            <div class="img">
                <img src="${el.image}" alt="">
            </div>
            <div class="cardtext">
                <h3>${el.name}</h3>
                <p>$${el.price * el.inBasket}</p>

                <div class ="right">
                <button  onclick ="minus(${el.id} ,${el.inBasket})"> <i style="padding:5px"  class ="bx bx-minus">-</i> </button>
                <span>${el.inBasket}</span>
                <button onclick ="plus(${el.id} ,${el.inBasket})"> <i i style="padding:5px" class ="bx bx-plus">+</i> </button>
                </div>
                
            <div class="hoverolayi">
                
                
            </div>
            </div>
        </div>
        `;
        return sum = sum + (el.price *  el.inBasket)
    }
  });
  total.innerHTML = `Total:$${sum}`
}
getAllCards();



// const deleteBasket = ( id) => {
  
//   axios.delete(shop+ id).then(res=>window.location.reload())
// }

// document.getElementById('submitBtn').addEventListener('click', async () => {
//   // Sepetteki ürünleri ve toplam fiyatı al
//   let res = await axios.get("http://localhost:3000/shop/");
//   let data = await res.data;
//   let total = 0;
//   let orders = [];

//   data.forEach(product => {
//     if (product.inBasket) {
//       orders.push({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: product.inBasket
//       });
//       total += product.price * product.inBasket;
//     }

   
//   });

//   // Sipariş verilerini gönder
//   try {
//     await axios.post('http://localhost:3000/siparisler', orders);
//     console.log('Siparişler başarıyla gönderildi.');
//   } catch (error) {
//     console.error('Siparişler gönderilirken bir hata oluştu:', error);
//   }

//   // Toplam fiyatı da gönder
//   try {
//     await axios.post('http://localhost:3000/toplam', { total: total });
//     console.log('Toplam fiyat başarıyla gönderildi.');
//   } catch (error) {
//     console.error('Toplam fiyat gönderilirken bir hata oluştu:', error);
//   }

//   // Sayfayı yenile
//   window.location.reload();
// });



// ----------------------sual-------->


// Submit butonuna tıklandığında işlemleri gerçekleştir
document.getElementById('submitBtn').addEventListener('click', async () => {
  // Sepetteki ürünleri ve toplam fiyatı al
  let res = await axios.get("http://localhost:3000/acount/");
  const currentUserInfo = data.find(user => user.name === account.name);
  let data = await res.data;
  let total = 0;
  let orders = [];

  // Toplam fiyatı ve siparişleri topla
  data.forEach(product => {
    if (product.inBasket) {
      orders.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.inBasket
      });
      total += product.price * product.inBasket;
    }
  });

  // Verileri data.json dosyasına gönder
  try {
    await axios.post('http://localhost:3000/siparisler', {
      orders: orders,
      total: total
    });
    console.log('Siparişler ve toplam fiyat başarıyla gönderildi.');
  } catch (error) {
    console.error('Veriler gönderilirken bir hata oluştu:', error);
  }
  
  // Sayfayı yenile
  window.location.reload();
});

























// axios.get('http://localhost:3000/shop')
// .then(response => {
//     const products = response.data.filter(product => product.inBasket); // Sepetteki ürünler
//     const selectElement = document.getElementById('selectedProducts');

//     // Sepetteki her bir ürün için bir option elementi oluşturun ve seçili ürünlerin adlarını ekleyin
//     products.forEach(product => {
//         const option = document.createElement('option');
//         option.value = product.id; // Opsiyon değeri olarak ürün ID'sini kullanabilirsiniz
//         option.textContent = product.name; // Opsiyon metni olarak ürün adını kullanın
//         selectElement.appendChild(option); // Seçenekleri seçili ürünlerin listesi için select elementine ekleyin
//     });
// })
// .catch(error => {
//     console.error('Error fetching products:', error);
// });











// // Örnek bir sepet dizisi
// const basketItems = [
//   { id: 1, name: "Ürün 1" },
//   { id: 2, name: "Ürün 2" },
//   { id: 3, name: "Ürün 3" },
//   { id: 4, name: "Ürün 4" }
// ];

// // <select> öğesini hedefleyin
// const selectElement = document.getElementById('selectedProducts');

// // Sepetteki her ürün için bir <option> öğesi oluşturun ve <select> öğesine ekleyin
// basketItems.forEach(item => {
//   const option = document.createElement('option');
//   option.value = item.id; // Opsiyon değeri olarak ürün ID'sini kullanabilirsiniz
//   option.textContent = item.name; // Opsiyon metni olarak ürün adını kullanın
//   selectElement.appendChild(option); // Seçenekleri seçili ürünlerin listesi için <select> öğesine ekleyin
// });

// // Submit düğmesine tıklandığında işlem yap
// document.getElementById('submitBtn').addEventListener('click', function() {
//   // Seçili ürünün ID'sini alın
//   const selectedProductId = selectElement.value;
//   // Bu veriyi sunucuya gönderin (simülasyon)
//   console.log("Selected Product ID:", selectedProductId);
//   // Burada sunucuya veri gönderme işlemini gerçekleştirebilirsiniz.
//   // Örneğin, fetch API'sini kullanarak bir POST isteği gönderebilirsiniz.
// });







