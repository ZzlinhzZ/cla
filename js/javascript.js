let btnSubmit = document.querySelector('#form-submit');
// let btnSet = document.querySelector('#btn-set');
let inputName = document.querySelector('#name');
let inputMess = document.querySelector('#message');
let result = document.querySelector('#result001');
btnGet.addEventListener('click', () =>{
    result.innerText = inputMess.value;
});

// btnSet.addEventListener('click', () =>{
//     inputMess.value = inputSet.value;
// });
