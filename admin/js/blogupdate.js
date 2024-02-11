// let titleInput = document.querySelector(".title");
// let priceInput = document.querySelector(".price");
// let photoInput = document.querySelector(".photo");
// let addBtn = document.querySelector(".addbtn");
// let roundedImage = document.querySelector(".rounded-image");
// let url = `http://localhost:3000/shop/`;
// let id = new URLSearchParams(window.location.search).get("id")





// fetch(url+id)
// .then(response => response.json())
// .then(data =>{
//     titleInput.value = data.name;
//     roundedImage.src = data.image;
//     priceInput.value = data.price;
//     console.log(data)
// })



// photoInput.addEventListener('input', (e) => {
//     let file = e.target.files[0];
//     if (file) {
//     //   let reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.URLSearchParams(file);
//       reader.onload = function () {
//         roundedImage.src = reader.result;
//       }
//     }
//   })
//   ;


// addBtn.addEventListener("click", (event)=> {
//     event.preventDefault();

//     let obj = {
//         name: titleInput.value,
//         image: roundedImage.src,
//         price: price.value
//     }
//     axios.put(`http://localhost:3000/shop/${id}`, obj)
//     .then(res => {
//         window.location = "../shop.html"
//     })
// })



let titleInput = document.querySelector(".title");
let priceInput = document.querySelector(".price");
let photoInput = document.querySelector(".photo");
let addBtn = document.querySelector(".addbtn");
let roundedImage = document.querySelector(".daireimage");
let url = `http://localhost:3000/shop/`;
let id = new URLSearchParams(window.location.search).get("id");

fetch(url + id)
    .then(response => response.json())
    .then(data => {
        titleInput.value = data.name;
        roundedImage.src = data.image;
        priceInput.value = data.price;
        console.log(data);
    });

photoInput.addEventListener('input', (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            roundedImage.src = reader.result;
        };
    }
});

addBtn.addEventListener("click", () => {
    let obj = {
        name: titleInput.value,
        image: roundedImage.src,
        price: priceInput.value
    };
    axios.put(`http://localhost:3000/shop/${id}`, obj)
        .then(res => {
            window.location.href = "../shop.html"; 
        })
        .catch(error => {
            console.error('Güncelleme hatası:', error);
        });
});
