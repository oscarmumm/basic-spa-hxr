
//Para el funcoinamiento del menu lateral hacemos esto:
let btn_menu = document.getElementById("btn_menu")
let btn_menu_close = document.getElementById("btn_menu_close")
let navbar = document.getElementById("navbar")



//Con este metodo el panel del nav se abre y cierra con el mismo icono
btn_menu.addEventListener("click", ()=>{
    if(navbar.className == "open") {
        navbar.className = "close"
    } else {
        navbar.className ="open"
    }
})

//con este metodo cambiamos el icono para abrir y cerrar el panel
/*
btn_menu.addEventListener("click", ()=>{
    navbar.className = "open"
    btn_menu.style.display = "none"
    btn_menu_close.style.display = "block"
})

btn_menu_close.addEventListener("click", ()=>{
    navbar.className = "close"
    btn_menu_close.style.display = "none"
    btn_menu.style.display = "block"
})
*/
//aca comenzamos con la parte de ajax
let links = document.querySelectorAll("a")
let section = document.getElementById("section")

function ajax(url, metodo){
    let http_metodo = metodo || "get"
    let xhr = new XMLHttpRequest
    xhr.open(http_metodo, url)
    xhr.send()
    return xhr
}

links.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault()
        location.hash = link.id
        navbar.className = "close"
    })
})

window.addEventListener("hashchange", ()=>{
    let file = "templates/" + location.hash.slice(1) + ".html"
    let xhr = ajax(file)
    xhr.addEventListener("load", ()=>{
        if(xhr.status == 200) {
            section.innerHTML = xhr.response
        }
    })
})

window.addEventListener("load", ()=>{
    let file = location.hash ? (`templates/${location.hash.slice(1)}.html`) : (`templates/inicio.html`)
    let xhr = ajax(file)
    xhr.addEventListener("load", ()=>{
        if(xhr.status == 200) {
            section.innerHTML = xhr.response
        }
    })
})
