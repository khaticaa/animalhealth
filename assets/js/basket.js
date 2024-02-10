
let cards = document.querySelector(".cards");
let sortBtn = document.querySelector(".sort");
let emptyAlert = document.querySelector('.empty')
let sorted = "asc";
let filteredArr = [];

let addCount = async (id, count) => {
  await axios.patch("http://localhost:3000/baket/"+id, {inBasket : count + 1})
  window.location.reload()
}

let removeCount = async (id,count) => {
  if( count  == 1 ){
    await axios.patch("http://localhost:3000/basket/"+id, {inBasket : null})
  }else{
    await axios.patch("http://localhost:3000/basket/"+id, {inBasket : count - 1})
    window.location.reload();
  }

}

async function getAllCards() {
  let res = await axios("http://localhost:3000/basket/");
  let data = await res.data;
  
  filteredArr = filteredArr.length ? filteredArr : data;
  filteredArr.forEach((el) => {
    if (el.inBasket) {
      emptyAlert.style.display = 'none'
      cards.innerHTML += `
      <div class="card">
            <div class="img">
                <img src="${el.photo}" alt="">
            </div>
            <div class="cardtext">
                <h3>${el.name}</h3>
                <p>${el.price * el.inBasket}</p>
            <div class="hoverolayi">
                <div class="add-to-cart">
                    <i class="bi bi-basket2"></i>
                    
                 </div>
                 <div class="add-to-favorites">
                    <i class="bi bi-heart"></i>
                 </div>
            </div>
            </div>
        </div>
        `;
    }
  });
}
getAllCards();




