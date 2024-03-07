let inputs = document.querySelector('input')
let name = document.querySelector('.name')
let age = document.querySelector('.age')
let create = document.querySelector('.create')
let list = document.querySelector('.list')

create.addEventListener('click',()=>{
    addData()
})

function addData(){
    let obj = {
        name: name.value,
        age: +age.value,
    };
    if(!name.value || !age.value){
        alert('Заполните поле!')
        return;
    }
    let storage = JSON.parse(localStorage.getItem('person')) || []
    if(storage.some(el.name === obj.name && el.age === obj.name)){
        alert('Такой уже есть!')
        return;
    }
    storage.push(obj)
    localStorage.setItem('person', JSON.stringify(storage))
    addData()
};


function addData(){
    let obj = {
        name: name.value,
        age: age.value
    }
    let storage = JSON.parse(localStorage.getItem("person")) || []
    storage.push(obj)
    localStorage.setItem("person", JSON.stringify(storage))
}