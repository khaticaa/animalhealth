
  function LoginFunc() {
    let inpAdmin = document.querySelector("#admin") ;
    let pasAdmin = document.querySelector("#pasword");
   
    if (inpAdmin.value === "admin" && pasAdmin.value === "admin") {
      window.location="./admin.html"
    } else {
        alert('yanlis passw');
    }
  }
  
  let addBtn= document.querySelector("#adminn");
  addBtn.addEventListener("click", LoginFunc);
  

// let inpAdmin = document.querySelector("#admin") ;
// let pasAdmin = document.querySelector("#pasword");
// let addBtn= document.querySelector("#adminn");

// function LoginFunc(){

//     if(inpAdmin.value==="admin" && pasAdmin.value==="miri"){
//   window.location="./admin.html"
//     }
//   else{
//     alert('yanlis paswor')
//   }
//   }
  
//   LoginFunc();
// addBtn.addEventListener("click",LoginFunc)

