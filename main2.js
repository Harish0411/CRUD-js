let userData = JSON.parse(localStorage.getItem('userData'));
console.log(userData);
localStorage.setItem('userData2', JSON.stringify(userData));

let body = document.querySelector('.container');
let unorderList = document.createElement('ul');
body.appendChild(unorderList);

userData
.forEach(e => {
    let list = document.createElement('li');
    list.setAttribute('class', 'listItem')
    list.innerHTML = `<div> 
      <b>${e.name}</b> 
      <button  id="delt_btn">delete</button>
      <button  id="edit">Edit</button>
     </div>`;
    unorderList.appendChild(list);
})

const handleSearch = () => {
    let searchInput = document.getElementById('search');
    let filtered = searchInput.value.toUpperCase();
    let listItems = document.querySelectorAll('.listItem');

    for(i=0; i< listItems.length; i++){
    let content = listItems[i].innerText || listItems[i].textContent
    console.log(content);

    if(content.toUpperCase().indexOf(filtered) > -1){
        listItems[i].style.display = 'block';
    }else{
        listItems[i].style.display = 'none';
    }
    }
}

document.querySelectorAll('#delt_btn').forEach((e,index) => {
    e.addEventListener('click', () => {  
       handleDelete(index);
    })
})

const handleDelete = (deleteIndex) => {
    let updatedData = userData.filter((_,i) => i !== +deleteIndex)
    console.log(deleteIndex);
    console.log(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData)); 
    window.location.reload(true);
}



let editForm = document.getElementById('edit_form');


document.querySelectorAll('#edit').forEach((e,i) => {
    e.addEventListener('click', () => {
        console.log(userData[i]);
        localStorage.setItem('edit', true);
        localStorage.setItem('editContent', JSON.stringify([userData[i], i]))
        location.href = 'index.html';
    })
})








