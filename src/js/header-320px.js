const header320px = document.querySelector('#header-s');

document.addEventListener('scroll', function(){
    const scroll320px = window.scrollY;
   
    if(scroll320px > 150){
      header320px.classList.add('active320px');
    } else {
      header320px.classList.remove('active320px');
    }
})