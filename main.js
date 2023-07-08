let form = document.querySelector('form');
let name = document.getElementById('name');
let mark = document.getElementById('mark');

let editContent = JSON.parse(localStorage.getItem('editContent')) || [];
name.value = editContent[0]?.name || '';
mark.value = editContent[0]?.mark || '';

var data = JSON.parse(localStorage.getItem('userData2')) || [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let obj = {
   name : name.value,
   mark :mark.value,
  }

  if(editContent.length > 0){
    const updatedData = data.map((e,i) => {
      return i === editContent[1] ? obj : e
     })
     localStorage.setItem('userData', JSON.stringify(updatedData)); 
     localStorage.removeItem('editContent')
  }else{
  if(data.length > 0){
  data = [...data, obj];
  }else{
   data.push(obj);
  }
  console.log(data);
  localStorage.setItem('userData', JSON.stringify(data));
}

  name.value = '';
  mark.value = '';
  name.focus();

})

document.querySelector('#btn').addEventListener('click', (e) => {
  e.preventDefault();
  location.href= 'user.html';
})

const handleSave = () => {
  const updatedData = data.map((e,i) => {
    return i === editContent[1] ? editContent[0] : e
   })
console.log(editContent);
   console.log(updatedData);

 
}



