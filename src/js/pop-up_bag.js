const button = document.querySelector('#pop-up-bag');
const bag = document.querySelector('#pop-up-bag-container');
const closePop = document.querySelector("#pop-up-bag-close");
const buttonMob = document.querySelector('#pop-up-bag-320px'); 


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


/* function openPopup(name) {
  const popup = document.querySelector(`.popup[data-name="${name}"]`);
  if (!popup) return;

  popup.classList.add("open");
}

function closePopup(name) {
  const popup = document.querySelector(`.popup[data-name="${name}"]`);
  if (!popup) return;

  popup.classList.remove("open");
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  if (!action) return;

  const actionName = action.getAttribute("data-action");
  if (!actionName) return;

  const popupName = action.getAttribute("data-name");
  if (!popupName);

  const actions = {
    "open-popup": openPopup,
    "close-popup": closePopup
  };

  actions[actionName]?.(popupName);
}); */