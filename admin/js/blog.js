// let input = document.getElementById('myInput');
let table = document.querySelector('table');



function deleteItem(id) {
    axios.delete(`http://localhost:3000/shop/${id}`)
        .then((res) => {
            alert(id + ' nömrəli məhsul uğurla silindi');
            window.location.reload();
        })
        .catch((error) => {
            console.error('Silme hatasi:', error);
        });
}


  

function getDataApi() {
    fetch("http://localhost:3000/shop")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                table.innerHTML += `
           


            <tr id = "newtr">
            <td>${element.id}</td>
            <td>${element.price}</td>
            <td>${element.name}</td>
            <td>${element.isFavorite}</td>
            <td>
            <button class="delete-btn"  onclick='deleteItem(${element.id})'><i class="bi bi-trash3"></i></button>
          
                </td>
                <td> <button class="edit-btn" title="edit"><a href=" blogupdate.html?id=${element.id}"><i class="bi bi-pencil-square"></i></button></td>
            </tr>
            
            `
            })
     
        })
}

getDataApi();
