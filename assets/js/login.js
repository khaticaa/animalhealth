
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector(".btn2");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
}); 

let x= document.querySelector(".alertdiv i")
let alertDiv= document.querySelector(".alertdiv");
x.addEventListener("click",()=>{
  if (alertDiv.style.opacity==="1") {
    alertDiv.style.opacity="0";
  
  } 
})


let url = "http://localhost:3000/acount";
let nameInp = document.querySelector("#upname");
let mailInp = document.querySelector("#upmail");
let pasInp = document.querySelector("#uppasword");
let formUp = document.querySelector(".sign-up-form");
let wrong1= document.querySelector("#wrong1");
let wrong2= document.querySelector("#wrong2");
let x1= document.querySelector("#wrong1 i");
let x2= document.querySelector("#wrong2 i");
formUp.addEventListener("submit", async (e) => {
  e.preventDefault();
if (nameInp.value.trim() =="" ||  mailInp.value.trim()==="" ||  pasInp.value.trim()==="" ) {
if (alertDiv.style.opacity==="0") {
  alertDiv.style.opacity="1";

} else {
  alertDiv.style.opacity="1";
}
}
 else{ await axios.post(url, {
   
    name: nameInp.value,
    mail: mailInp.value,
    password: pasInp.value,
    fav:[],
    Id:[]

  });
}
});


let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).name : null;

if(user){
    window.location = './index.html'
}
console.log(user);


let form2 = document.querySelector(".sign-in-form");

form2.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector("#user").value;
    let password = document.querySelector("#pas").value;

    fetch('http://localhost:3000/acount')
        .then(res => res.json())
        .then(data => {
            let currentUserInfo = data.find((user) => user.name === name);
            if (currentUserInfo) {
                if (currentUserInfo.password === password) {
                    localStorage.setItem('currentUser', JSON.stringify(currentUserInfo));
                    window.location = './index.html';
                } else {
                    let wrong1 = document.querySelector("#wrong1");
                    wrong1.style.opacity = "1";
                }
            } else {
                let wrong2 = document.querySelector("#wrong2");
                wrong2.style.opacity = "1";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


x1.addEventListener("click",()=>{

    wrong1.style.opacity="0";
  

})
x2.addEventListener("click",()=>{
 
    wrong2.style.opacity="0";
  
  
})


<<<<<<< HEAD


=======
>>>>>>> 08deb6291f44c438bd645a33fc665a29d5e80b5f
