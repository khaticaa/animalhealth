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

async function getAllCards() {
  let res = await axios.get("http://localhost:3000/shop/");
  let data = await res.data;
  
  filteredArr = filteredArr.length ? filteredArr : data;
  filteredArr.forEach((el) => {
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
                <button onclick ="minus(${el.id} ,${el.inBasket})"> <i class ="bx bx-minus">minus</i> </button>
                <span>${el.inBasket}</span>
                <button onclick ="plus(${el.id} ,${el.inBasket})"> <i class ="bx bx-plus">plus</i> </button>
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








