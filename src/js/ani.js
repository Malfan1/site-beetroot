const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");
const nav = $('.mobile-navigation')

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);
$(document).on("click", ".dark-overlay", closeMenu);





function handleMenu(e) {
  e.preventDefault();
  nav.toggleClass("block");
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

function closeMenu(e){
    e.preventDefault();
  nav.toggleClass("block-none");
  darkOverlay.toggleClass("none");
  mobileMenu.toggleClass("none");



}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();
    

  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });
}






