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
        ${el.isFavorite ? 
          `
          <div class="add-to-favorites">
          <div class="fav" onClick="toggleFav(${el.id}, ${el.isFavorite})"><i class="bi bi-heart"></i></div>
       </div>
          ` 
          :  
        ` <div class="fav" onClick="toggleFav(${el.id}, ${el.isFavorite})">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(153, 8, 42)" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
         </svg>
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
  
  
  
  