const header = document.querySelector('#header-scroll');
const headerH = document.querySelector('#header-scroll').clientHeight;

document.addEventListener('scroll', function(){
  const scroll = window.scrollY;

  if(scroll > headerH){
    header.classList.add('activeh');
  } else {
    header.classList.remove('activeh');
  }
})
