const menu = querySelectorAll(".header-for-992px__nav__ul-menu");

document.querySelectorAll("#nav-main-ul")?.forEach(element => element.onmouseover = function(event){
    console.log(event);
    menu.classList.add("block");
})