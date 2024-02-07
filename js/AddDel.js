let interest
let language
let education
let experience
let Dels


//добавление

add_del()//подвзяка событий удаления
add_add()//подвязка событий добавления
function add_add() {
    interest = document.querySelector(".interest")
    language = document.querySelector(".language")
    education = document.querySelector(".education")
    experience = document.querySelector(".experience")

    interest.addEventListener("click", function () {
        add_child(interest, "interestBox", "<input type=\"text\" placeholder=\"мой интерес\" required=\"required\">\n" +
            "<div class=\"del\"></div>")
    })

    language.addEventListener("click", function () {
        add_child(language, ["contactBox", "btnDel"], "<input type=\"text\"  required=\"required\">\n" +
            "<span>Иностранный язык</span>\n" +
            "<div class=\"del\"></div>")
    })

    education.addEventListener("click", function () {
        add_child(education, "expBox", "<input type=\"text\" class=\"edu\" required=\"required\"><span>Профессия</span>\n" +
            "<input type=\"month\" class=\"start\" required=\"required\"><span>Начало</span>\n" +
            "<input type=\"text\" class=\"uni\" required=\"required\"><span>Университет</span>\n" +
            "<input type=\"month\" class=\"end\" required=\"required\"><span>Конец</span>\n" +
            "<div class=\"del\"></div>")
    })

    experience.addEventListener("click", function () {
        add_child(experience, "expBox", "<input type=\"text\" class=\"edu\" required=\"required\"><span>Должность</span>\n" +
            "<input type=\"month\" class=\"start\" required=\"required\"><span>Начало</span>\n" +
            "<input type=\"text\" class=\"uni\" required=\"required\"><span>Место работы</span>\n" +
            "<input type=\"month\" class=\"end\" required=\"required\"><span>Конец</span>\n" +
            "<div class=\"del\"></div>\n" +
            "<textarea required=\"required\"></textarea><span>Задачи</span>")
    })
}

function add_del() {
//удаление
    Dels = document.querySelectorAll(".del")
    Dels.forEach(Del => {
        Del.addEventListener("click", function () {
            this.parentElement.remove();
            localStorage.setItem("CURRENT", container.innerHTML)
        })
    })

}
function add_child(element, classEls, inner)
{
    var child = document.createElement("div")
    if(Array.isArray(classEls)){
        classEls.forEach(classEl =>{
            child.classList.add(classEl)
            localStorage.setItem("CURRENT", container.innerHTML)
        })
    }
    else {
        child.classList.add(classEls)
        localStorage.setItem("CURRENT", container.innerHTML)
    }

    child.innerHTML = inner
    element.parentElement.parentElement.appendChild(child)

    add_del()
}