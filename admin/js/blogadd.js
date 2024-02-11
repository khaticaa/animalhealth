
const id = new URLSearchParams(window.location.search).get("id");
let url = `http://localhost:3000/shop/`;
let form = document.querySelector("form");
let file = document.querySelector("#file");   
let name = document.querySelector("#name");
let prize = document.querySelector("#prize");
let roundedImg = document.querySelector('#rounded-image');

file.addEventListener('input', (e) =>{
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(){
            roundedImg.src = reader.result;
        }
    }
})

form.addEventListener("submit", (event)=>{
event.preventDefault();
const inputs = [name,prize,file];
 if(name.value.trim()&& prize.value.trim()
 && file.value){
let obj = {
    name : name.value,
    price: prize.value,
    image:roundedImg.src
}

axios.post(url,obj)
.then(res=> {
    window.location =`../shop.html`
})

}else{
    inputs.forEach((element) => {
        let display = element.value.trim() == "" ? "block" : "none";
        element.nextElementSibling.style.display = display

    // inputs.forEach((element) => {
    //     let display = element.value.trim() == "" ? "block" : "none";
    //     element.nextElementSibling.style.display = display;
    });
}
})

let table = document.querySelector('table');

fetch('http://localhost:3000/shop').then(
    res => res.json()
).then( data => {

    data.forEach((element) =>[
        table.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>
        <button onclick="DeleteBtn(${element.id})" >DELETE</button>
        </td>
       </tr>
        
        `
    ])

}
 )



 function DeleteBtn(id){
    axios.delete(`http://localhost:3000/shop/${id}`)
    window.location.reload()

 }

