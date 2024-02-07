const container = document.querySelector(".container")
let inputs = document.querySelectorAll("input")
let textareas = document.querySelectorAll("textarea")





//сохранение при обновлении страницы
if(localStorage.getItem("CURRENT")){
    container.innerHTML = localStorage.getItem("CURRENT")
    inputs = document.querySelectorAll('input')
    textareas = document.querySelectorAll('textarea')
    add_image()
}

inputs.forEach(input => {
    input.addEventListener('input', function (){
        input.setAttribute("value",input.value)
        localStorage.setItem("CURRENT", container.innerHTML)
    })
})
textareas.forEach(area =>{
    area.addEventListener('input', function() {
        area.innerHTML=this.value
        localStorage.setItem("CURRENT", container.innerHTML)
    })
})

//кнопки
//сохранение по имени
function clickSave(){

    let name = prompt("Имя сохранения", "Иван");
    if(name)
        localStorage.setItem(name, container.innerHTML)
}
function clickLoad() {
    let name = prompt("Имя сохранения", "Иван");
    if (localStorage.getItem(name)) {
        container.innerHTML = localStorage.getItem(name)
        inputs = document.querySelectorAll('input')
        textareas = document.querySelectorAll('textarea')
        add_image()
    }
}
function clickClear() {
    inputs.forEach( input =>{
        input.value =""
    })
    textareas.forEach(area =>{
        area.innerHTML = ""
    })
    image = document.querySelector(".img")
    image.src = "../img/profile.png"
    localStorage.setItem("CURRENT", container.innerHTML)
}




