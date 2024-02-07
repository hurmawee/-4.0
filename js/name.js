let add = document.getElementById("FIO2")
let main = document.getElementById("FIO1")


main.addEventListener('input', function () {
    if(this.value)
        add.innerHTML=this.value
    else
        add.innerHTML="Тут будет ваше имя"
})