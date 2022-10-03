
let btn_dropdown = document.querySelectorAll(".nav__dropdown-btn")
let arrow = document.querySelectorAll(".nav__dropdown-arrow")
let names = document.querySelectorAll(".nav__dropdown-name")
let lists = document.querySelectorAll(".nav__links-list")
let burger = document.querySelector("#burger")
let header_bg = document.querySelector("#header-bg")
const breakPoint = 900
let prev

function ddOpen(j) {
    arrow[j].classList.add("nav__dropdown--open")
    names[j].classList.add("open")
    lists[j].classList.remove("isnt-active")
    lists[j].classList.add("is-active")
}
function ddClose(j) {
    arrow[j].classList.remove("nav__dropdown--open")
    names[j].classList.remove("open")
    lists[j].classList.add("isnt-active")
    lists[j].classList.remove("is-active")
}

btn_dropdown.forEach((each, i) => {
    each.addEventListener("click", ()=>{

        if (lists[i].classList.contains("isnt-active")) {
            ddOpen(i)
        }else if(lists[i].classList.contains("is-active")){
            ddClose(i)
        }
        if (prev !== undefined && prev !== i) {
            ddClose(prev)
        }
        prev = i
    })
});

burger.addEventListener("click", () => {
    let menu = burger.previousElementSibling
    if (menu.classList.contains("close")) {
        menu.classList.remove("close")
        burger.children[0].setAttribute("src", "images/icon-close.svg");
    }else{
        menu.classList.add("close")
        burger.children[0].setAttribute("src", "images/icon-hamburger.svg");
    }
})
let pp = document.querySelector("#pp")

window.addEventListener("load", ()=>{
    if (window.screen.width <= breakPoint) {
        header_bg.setAttribute("src", "images/bg-pattern-intro-mobile.svg")
        header_bg.classList.add("is-mobile")
    }else if(window.screen.width > breakPoint){
        header_bg.setAttribute("src", "images/bg-pattern-intro-desktop.svg")
        header_bg.classList.remove("is-mobile")

    }
    setTimeout(() => {
        pp.classList.remove("overflow-hide")
    }, 250);
})
window.addEventListener("resize", ()=>{
    if (window.screen.width <= breakPoint) {
        header_bg.setAttribute("src", "images/bg-pattern-intro-mobile.svg")
        header_bg.classList.add("is-mobile")
    }else if(window.screen.width > breakPoint){
        header_bg.setAttribute("src", "images/bg-pattern-intro-desktop.svg")
        header_bg.classList.remove("is-mobile")
    }
})

