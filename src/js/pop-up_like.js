const button1 = document.querySelector('#pop-up-like') 
const bag1 = document.querySelector('#pop-up-like-container') 
const closePop1 = document.querySelector("#pop-up-like-close");


document.addEventListener('DOMContentLoaded', () => { 

    button1.addEventListener('click', () => { 
      bag1.classList.toggle('open-pop') ;
    })

    window.addEventListener('click', e => { 
      const target1 = e.target 
      if (!target1.closest('#pop-up-like-container') && !target1.closest('#pop-up-like') || target1.closest('#pop-up-like-close')) { 
        bag1.classList.remove('open-pop'); 
      }

    })
});

