let hamburger = document.querySelector(".hamb");
let nav = document.querySelector(".nav-list");

hamburger.onclick = () =>{

    hamburger.classList.toggle("click")
    nav.classList.toggle("open")
}
