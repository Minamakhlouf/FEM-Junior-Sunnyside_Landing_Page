let burger = document.querySelector(".burger"); 
let navLinks = document.querySelector(".navigation__link-container")

burger.addEventListener("click", () => {
    navLinks.classList.toggle("invisible"); 
})

window.addEventListener("resize", ()=> {
    if (window.innerWidth > 650) {
        navLinks.classList.remove("invsible"); 
    }
})