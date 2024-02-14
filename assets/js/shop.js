// let cards = document.querySelector(".cards");
// let sortBtn = document.querySelector("#sort");
// let searchInput = document.querySelector("#search");
// let basketDot = document.querySelector('#basketDot')
// let copyArr = [];
// let filteredArr = [];



// async function toggleFav(id, fav){
//   await axios.patch("http://localhost:3000/shop/"+id, {isFavorite : !fav}); 
//   window.location.reload();
// }

// async function toBasket (id, count){
//   if(!count){
//     await axios.patch("http://localhost:3000/shop/"+id, {inBasket : 1})
//   }else{
//     await axios.patch("http://localhost:3000/shop/"+id, {inBasket : count + 1})
//   }
//   window.location.reload();
// }



// async function getAllCards() {
//     let res = await axios("http://localhost:3000/shop");
//     let data = await res.data;
//     // console.log(data)
//     copyArr = data;
//     cards.innerHTML = "";
//     // filteredArr = filteredArr.length ? filteredArr : data;
//     filteredArr = filteredArr.length || search.value ? filteredArr : data ;
//     filteredArr.forEach((el) => {
//       if(el.inBasket){
//         basketDot.style.display="inline"
//       }
//         cards.innerHTML += `
//         <div class="card">
//         ${
//           el.isFavorite 
//           ? `
//         <div class="fav" style="cursor:poiner ; z-index:200 " onClick="toggleFav(${el.id}, ${el.isFavorite})">
//         <i style="color:red" class="bi bi-heart-fill"></i>
//         </div>` 
//         :  
//       ` <div class="fav"  style="cursor : poiner; z-index: 200"  onClick="toggleFav(${el.id}, ${el.isFavorite})">
//       <i style="color:red" class="bi bi-heart"></i>
//        </div>
//        `}
//         <div class="img">
//             <img src="${el.image}" alt="">
//         </div>
//         <div class="cardtext">
//             <h3>${el.name}</h3>
//             <p>$${el.price}</p>
//         <div class="hoverolayi">
//             <div class="add-to-cart">
//                 <a onclick="toBasket(${el.id}, ${el.inBasket})" class="btn btn-dark" > <i class="bi bi-basket2"></i> </a>
//              </div>

//         </div>
//         </div>
//     </div>

//       `;

//     });
//   }

//   getAllCards();



// searchInput.addEventListener("input", function (e) {
//     filteredArr = copyArr;
//     filteredArr = filteredArr.filter((el) =>
//       el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
//     );
//     getAllCards();
//   });


//   sortBtn.addEventListener("change", function (e) {
//     if (e.target.value === "asc") {
//       filteredArr.sort((a, b) => a.price - b.price);
//     } else if (e.target.value === "dsc") {
//       filteredArr.sort((a, b) => b.price - a.price);
//     } else {
//       filteredArr = [];
//     }
//     getAllCards();
//   });


// --------------------------------------------

// let cards = document.querySelector(".cards");
// let sortBtn = document.querySelector("#sort");
// let searchInput = document.querySelector("#search");
// let basketDot = document.querySelector('#basketDot')
// let copyArr = [];
// let filteredArr = [];

// let account = JSON.parse(localStorage.getItem('currentUser'))


// // let obj = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null;
// // console.log(obj.fav);

// async function toggleFav(id, fav) {
//   await axios.patch("http://localhost:3000/shop/" + id, { isFavorite: !fav });
//   window.location.reload();
// }

// async function toBasket(id, count) {
//   let res = await axios("http://localhost:3000/shop/" + id);
//   let data = await res.data;
//   let res1 = await axios("http://localhost:3000/acount");
//   let data1 = await res1.data;
//   const currentUserInfo = data1.find(user => user.name === account.name);
//   let z = currentUserInfo.Id.find(shop => shop.name === data.name)
//   if (!z) {
//     await axios.patch("http://localhost:3000/shop/" + id, { inBasket: 1 })
//     let res = await axios("http://localhost:3000/shop/" + id);
//     let data = await res.data;
//     currentUserInfo.Id.push(data)
//     await axios.patch("http://localhost:3000/acount/" + account.id, currentUserInfo)
//   } else if (count === 1 || count > 1) {
//     console.log(data);
//     await axios.patch("http://localhost:3000/shop/" + id, { inBasket: count + 1 })
//     currentUserInfo.Id.find(shop => shop.name === data.name).inBasket = count + 1;
//     await axios.patch("http://localhost:3000/acount/" + account.id, currentUserInfo)
//   }
//   // window.location.reload()
// }


// async function getAllCards() {
//   let res = await axios("http://localhost:3000/shop");
//   let data = await res.data;
//   // console.log(data)
//   copyArr = data;
//   cards.innerHTML = "";
//   // filteredArr = filteredArr.length ? filteredArr : data;
//   filteredArr = filteredArr.length || search.value ? filteredArr : data;
//   filteredArr.forEach((el) => {
//     if (el.inBasket) {
//       basketDot.style.display = "inline"
//     }
//     cards.innerHTML += `
//         <div class="card">
//         ${el.isFavorite
//         ? `
//         <div class="fav" style="cursor:poiner ; z-index:200 " onClick="toggleFav(${el.id}, ${el.isFavorite})">
//         <i style="color:red" class="bi bi-heart-fill"></i>
//         </div>`
//         :
//         ` <div class="fav"  style="cursor : poiner; z-index: 200"  onClick="toggleFav(${el.id}, ${el.isFavorite})">
//       <i style="color:red" class="bi bi-heart"></i>
//        </div>
//        `}
//         <div class="img">
//             <img src="${el.image}" alt="">
//         </div>
//         <div class="cardtext">
//             <h3>${el.name}</h3>
//             <p>$${el.price}</p>
//         <div class="hoverolayi">
//             <div class="add-to-cart">
//                 <a onclick="toBasket(${el.id}, ${el.inBasket})" class="btn btn-dark" > <i class="bi bi-basket2"></i> </a>
//              </div>
          
//         </div>
//         </div>
//     </div>
        
//       `;

//   });
// }

// getAllCards();



// searchInput.addEventListener("input", function (e) {
//   filteredArr = copyArr;
//   filteredArr = filteredArr.filter((el) =>
//     el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
//   );
//   getAllCards();
// });


// sortBtn.addEventListener("change", function (e) {
//   if (e.target.value === "asc") {
//     filteredArr.sort((a, b) => a.price - b.price);
//   } else if (e.target.value === "dsc") {
//     filteredArr.sort((a, b) => b.price - a.price);
//   } else {
//     filteredArr = [];
//   }
//   getAllCards();
// });








// let menu = document.querySelector(".bi-list");
// let nav2 = document.querySelector(".nav2");
// let isMenuOpen = false;

// menu.addEventListener("click", () => {
//   if (!isMenuOpen) {
//     nav2.style.left = "0";
//     menu.classList.remove("bi-list");
//     menu.classList.add("bi-x");
//   } else {
//     nav2.style.left = "-300px";
//     menu.classList.remove("bi-x");
//     menu.classList.add("bi-list");
//   }
//   isMenuOpen = !isMenuOpen;
// });

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 767) {
//     nav2.style.left = "-300px";
//     isMenuOpen = false;
//     menu.classList.remove("bi-x");
//     menu.classList.add("bi-list");
//   }
// });







// ---------------------------------
let sortBtn = document.querySelector("#sort");
let cards = document.querySelector(".cards");
let basketDot = document.querySelector('#basketDot');
let searchInput = document.querySelector("#search")
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || { fav: [] };
let copyArr = [];
let filteredArr = [];

async function getAllCards() {
    let res = await axios.get("http://localhost:3000/shop");
    let data = res.data;
    copyArr = data;
    cards.innerHTML = "";
    filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
    filteredArr.forEach((el) => {
        if (el.inBasket) {
            basketDot.style.display = "inline";
        }
        cards.innerHTML += `
            <div class="card">
                <div class="fav" style="cursor:pointer; z-index:200" onClick="toggleFav(${el.id}, ${el.isFavorite})" data-id="${el.id}">
                    <i style="color:red" class="bi ${currentUser.fav.includes(el.id) ? 'bi-heart-fill' : 'bi-heart'}"></i>
                </div>
                <div class="img">
                    <img src="${el.image}" alt="">
                </div>
                <div class="cardtext">
                    <h3>${el.name}</h3>
                    <p>$${el.price}</p>
                    <div class="hoverolayi">
                        <div class="add-to-cart">
                            <a onclick="toBasket(${el.id}, ${el.inBasket})" class="btn btn-dark" > <i class="bi bi-basket2"></i> </a>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

function updateFavIcons() {
    const favIcons = document.querySelectorAll('.fav i');
    favIcons.forEach(icon => {
        const cardId = icon.parentNode.getAttribute('data-id');
        if (currentUser.fav.includes(parseInt(cardId))) {
            icon.classList.add('bi-heart-fill');
            icon.classList.remove('bi-heart');
        } else {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
        }
    });
}

async function toggleFav(id, isFavorite) {
    await axios.patch(`http://localhost:3000/shop/${id}`, { isFavorite: !isFavorite });

    // Kullanıcı hesap verilerini al
    let res1 = await axios.get("http://localhost:3000/acount");
    let data1 = res1.data;
    const currentUserInfo = data1.find(user => user.name === currentUser.name);

    // Ürünün favori durumu değiştiğinde, favori listesini güncelle
    if (isFavorite) {
        const index = currentUserInfo.fav.indexOf(id);
        if (index !== -1) {
            currentUserInfo.fav.splice(index, 1); // Favorilerden kaldır
        }
    } else {
        currentUserInfo.fav.push(id); // Favorilere ekle
    }

    // Sunucudaki kullanıcı verisini güncelle
    await axios.patch(`http://localhost:3000/acount/${currentUserInfo.id}`, currentUserInfo);

    // Favori ikonlarını güncelle
    updateFavIcons();
    localStorage.setItem('currentUser', JSON.stringify(currentUserInfo)); // currentUser'ı güncelle
}

function resetFavIcons() {
    const favIcons = document.querySelectorAll('.fav i');
    favIcons.forEach(icon => {
        icon.classList.remove('bi-heart-fill');
        icon.classList.add('bi-heart');
    });
}

async function toBasket(id, count) {
    let res = await axios.get(`http://localhost:3000/shop/${id}`);
    let data = res.data;
    let res1 = await axios.get("http://localhost:3000/acount");
    let data1 = res1.data;
    const currentUserInfo = data1.find(user => user.name === currentUser.name);
    let z = currentUserInfo.Id.find(shop => shop.name === data.name);
    if (!z) {
        await axios.patch(`http://localhost:3000/shop/${id}`, { inBasket: 1 });
        let res = await axios.get(`http://localhost:3000/shop/${id}`);
        let data = res.data;
        currentUserInfo.Id.push(data);
        await axios.patch(`http://localhost:3000/acount/${currentUserInfo.id}`, currentUserInfo);
    } else if (count === 1 || count > 1) {
        await axios.patch(`http://localhost:3000/shop/${id}`, { inBasket: count + 1 });
        currentUserInfo.Id.find(shop => shop.name === data.name).inBasket = count + 1;
        await axios.patch(`http://localhost:3000/acount/${currentUserInfo.id}`, currentUserInfo);
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUserInfo)); // currentUser'ı güncelle
}

let menu = document.querySelector(".bi-list");
let nav2 = document.querySelector(".nav2");
let isMenuOpen = false;

menu.addEventListener("click", () => {
    if (!isMenuOpen) {
        nav2.style.left = "0";
        menu.classList.remove("bi-list");
        menu.classList.add("bi-x");
    } else {
        nav2.style.left = "-300px";
        menu.classList.remove("bi-x");
        menu.classList.add("bi-list");
    }
    isMenuOpen = !isMenuOpen;
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
        nav2.style.left = "-300px";
        isMenuOpen = false;
        menu.classList.remove("bi-x");
        menu.classList.add("bi-list");
    }
});


getAllCards();
 


searchInput.addEventListener("input", function (e) {
    filteredArr = copyArr;
    filteredArr = filteredArr.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    getAllCards();
  });


  sortBtn.addEventListener("change", function (e) {
    if (e.target.value === "asc") {
      filteredArr.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "dsc") {
      filteredArr.sort((a, b) => b.price - a.price);
    } else {
      filteredArr = [];
    }
    getAllCards();
  });
