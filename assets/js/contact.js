// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector("form").addEventListener("submit", function (event) {
//         event.preventDefault(); // Formun otomatik gönderilmesini engeller
        
//         // Formdaki değerleri al
//         var name = document.getElementById("name").value;
//         var email = document.getElementById("email").value;
//         var phone = document.getElementById("phone").value;
//         var project = document.getElementById("project").value;
//         var subject = document.getElementById("subject").value;
//         var message = document.getElementById("message").value;

//         // Form verilerini bir diziye ekle
//         var formData = {
//             name: name,
//             email: email,
//             phone: phone,
//             project: project,
//             subject: subject,
//             message: message
//         };

//         // Form verilerini kullanarak istenilen işlemi yapabilirsiniz (örneğin: AJAX kullanarak bir sunucuya gönderme)
//         console.log(formData); // Konsola gönderilen form verilerini yazdır

//         // Form verilerinin gönderilmesi (örneğin, AJAX veya başka bir yöntemle)
//         // Bu kısımda gerekli işlemleri yapabilirsiniz, örneğin:
//         // fetch('sunucuadresi.com/api/form', {
//         //     method: 'POST',
//         //     body: JSON.stringify(formData),
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     }
//         // }).then(response => {
//         //     if (response.ok) {
//         //         console.log('Form gönderildi');
//         //     } else {
//         //         console.error('Form gönderilemedi');
//         //     }
//         // }).catch(error => console.error('Form gönderilirken hata oluştu:', error));


        

//         // form.addEventListener("submit", (event)=>{
//         //     event.preventDefault();
//         //     const inputs = [name,email,phone,message];
//         //      if(name.value.trim()&& phone.value.trim()
//         //      && email.value){
//         //     let obj = {
//         //         name : name.value,
//         //         email : email.value,
//         //         phone : phone.value,
//         //         subject: subject.value,
//         //         message:message.value
               
//         //     }
            
//         //     axios.post(url,obj)
//         //     .then(res=> {
//         //         window.location =``
//         //     })
            
//         //     }else{
//         //         inputs.forEach((element) => {
//         //             let display = element.value.trim() == "" ? "block" : "none";
//         //             element.nextElementSibling.style.display = display
            
//         //         });
//         //     }
//         //     })
            
//         //     let table = document.querySelector('table');
            
//         //     fetch('http://localhost:3000/doctor').then(
//         //         res => res.json()
//         //     ).then( data => {
            
//         //         data.forEach((element) =>[
//         //             table.innerHTML += `
//         //             <tr>
//         //             <td>${element.id}</td>
//         //             <td>${element.name}</td>
//         //             <td>${element.phone}</td>
//         //             <td>${element.message}</td>
//         //             <td>${element.email}</td>
//         //            </tr>
                    
//         //             `
//         //         ])
            
//         //     }
//         //      )
            
             
//     });
// });




document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        // Formdaki değerleri al
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var project = document.getElementById("project").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Form verilerini bir nesne olarak hazırla
        var formData = {
            name: name,
            email: email,
            phone: phone,
            project: project,
            subject: subject,
            message: message
        };

    
        var jsonData = JSON.stringify(formData);

        // Form verilerini gönder
        fetch('http://localhost:3000/doctor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => {
            if (response.ok) {
                console.log('Form gönderildi');
                
            } else {
                console.error('Form gönderilemedi');
              
            }
        })
        .catch(error => console.error('Form gönderilirken hata oluştu:', error));
    });
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