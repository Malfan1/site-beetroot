const btn = document.querySelector('#pop-up-like') 
const pop = document.querySelector('#pop-up-like-container') 
const closeBlock = document.querySelector("#pop-up-like-close");

document.addEventListener('DOMContentLoaded', () => { 
  
    btn.addEventListener('click', () => { 
      pop.classList.add('open-pop1') ;
    })

    window.addEventListener('click', e => { 
      const t = e.target;
      if (!t.closest('#pop-up-like-container') && !t.closest('#pop-up-like') || t.closest('#pop-up-like-close')) { 
        pop.classList.remove('open-pop1'); 
      }
      
    })
});



