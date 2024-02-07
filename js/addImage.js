let frame
let image

add_image()
function add_image(){
    frame = document.querySelector(".photo")
    image = document.querySelector(".img")
    frame.addEventListener("change", () => {
        console.log("hello")
        if(frame.files[0]){
            console.log("hello")
            image.src = URL.createObjectURL(frame.files[0])
            localStorage.setItem("CURRENT", container.innerHTML)
        }
    })
}
