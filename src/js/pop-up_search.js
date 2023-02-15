const searchButton = document.querySelector('#pop-up-search');
    const searchForm = document.querySelector('#pop-up-search-container');


document.addEventListener('click', function(event) {
  const isClickInside = searchForm.contains(event.target) || searchButton.contains(event.target);
  if (!isClickInside) {
    searchForm.classList.remove('active');
  }
});

searchButton.addEventListener('click', function(event) {

  searchForm.classList.toggle('active');
});