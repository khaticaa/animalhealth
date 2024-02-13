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
  
  


  let cards = document.querySelector(".cards");
let sortBtn = document.querySelector("#sort");
let searchInput = document.querySelector("#search");
let basketDot = document.querySelector('#basketDot')
let copyArr = [];
let filteredArr = [];



async function toggleFav(id, fav){
  await axios.patch("http://localhost:3000/shop/"+id, {isFavorite : !fav}); 
  window.location.reload();
}

async function toBasket (id, count){
  if(!count){
    await axios.patch("http://localhost:3000/shop/"+id, {inBasket : 1})
  }else{
    await axios.patch("http://localhost:3000/shop/"+id, {inBasket : count + 1})
  }
  window.location.reload();
}



async function getAllCards() {
    let res = await axios("http://localhost:3000/shop");
    let data = await res.data;
    // console.log(data)
    copyArr = data;
    cards.innerHTML = "";
    // filteredArr = filteredArr.length ? filteredArr : data;
    filteredArr = filteredArr.length || search.value ? filteredArr : data ;
    filteredArr.forEach((el) => {
      if(el.inBasket){
        basketDot.style.display="inline"
      }
        cards.innerHTML += `
        <div class="card">
        ${
          el.isFavorite 
          ? `
        <div class="fav" style="cursor:poiner ; z-index:200 " onClick="toggleFav(${el.id}, ${el.isFavorite})">
        <i style="color:red" class="bi bi-heart-fill"></i>
        </div>` 
        :  
      ` <div class="fav"  style="cursor : poiner; z-index: 200"  onClick="toggleFav(${el.id}, ${el.isFavorite})">
      <i style="color:red" class="bi bi-heart"></i>
       </div>
       `}
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
    </div>
        
      `;

    });
  }
  
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