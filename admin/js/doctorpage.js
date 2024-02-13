let table;

function doctorGetAll() {
    table = document.querySelector('table');

    fetch("http://localhost:3000/doctor")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(element => {
                table.innerHTML += `
                    <tr id="newtr">
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.phone}</td>
                        <td>${element.subject}</td>
                        <td>${element.message}</td>
                        
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

doctorGetAll();


function AdminFunc() {
    var inputAdmin = document.getElementById("admin");
    var passwordAdmin = document.getElementById("pasword");
  
    if (inputAdmin.value === "x" && passwordAdmin.value === "xxx") {
        window.location = "./doctorpage.html";
    } else {
        alert('yanlis paswored');
    }
  }
  
  var ekle = document.getElementById("adminn");
  ekle.addEventListener("click", AdminFunc);
  




