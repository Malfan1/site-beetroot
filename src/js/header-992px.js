const header = document.querySelector('#header-scroll');
const headerH = document.querySelector('#header-scroll').clientHeight;
console.log(headerH);

document.onscroll = function(){
  let scroll = window.scrollY;
  
  if(scroll > headerH){
    header.classList.add('activeh');
  } else {
    header.classList.remove('activeh');
  }
} 