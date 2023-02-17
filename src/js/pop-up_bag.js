const button = document.querySelector('#pop-up-bag') 
const bag = document.querySelector('#pop-up-bag-container') 
const closePop = document.querySelector("#pop-up-bag-close");


document.addEventListener('DOMContentLoaded', () => { 

    button.addEventListener('click', () => { 
      bag.classList.toggle('open-pop') 
    })

    window.addEventListener('click', e => { 
      const target = e.target 
      if (!target.closest('#pop-up-bag-container') && !target.closest('#pop-up-bag') || target.closest('#pop-up-bag-close')) { 
        bag.classList.remove('open-pop'); 
      } 
    })
});

$('#pop-up-bag-320px').click(function() {
  $('#pop-up-bag-container').addClass('open-pop-mob');
  darkOverlay.toggleClass("visible");

});

$('#pop-up-bag-close').click(function(){
  $('#pop-up-bag-container').removeClass('open-pop-mob');
  darkOverlay.removeClass("visible");
});

$(".dark-overlay").click(function() {
  $('#pop-up-bag-container').removeClass('open-pop-mob');
  darkOverlay.removeClass("visible");
})