const searchButton = document.querySelector('#pop-up-search');
const searchForm = document.querySelector('#pop-up-search-container');
const sBtn = document.querySelector('#pop-up-s');
const closeSBtn = document.querySelector('#pop-up-s-close');
const sContainer = document.querySelector('#pop-up-s-container');


document.addEventListener('click', function(event) {
  const isClickInside = searchForm.contains(event.target) || searchButton.contains(event.target);
  if (!isClickInside) {
    searchForm.classList.remove('active');
  }
});

searchButton.addEventListener('click', function(event) {
  searchForm.classList.add('active');
});

document.addEventListener('DOMContentLoaded', () => { 
  
  sBtn.addEventListener('click', () => { 
    sContainer.classList.add('open-pop2') ;
  })

  window.addEventListener('click', e => { 
    const t = e.target;
    if (!t.closest('#pop-up-s-container') && !t.closest('#pop-up-s') || t.closest('#pop-up-s-close')) { 
      sContainer.classList.remove('open-pop2'); 
    }
    
  })
});