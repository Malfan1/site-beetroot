document.addEventListener('DOMContentLoaded', () => {
    const menuBtns = document.querySelectorAll('.header-for-992px__nav__ul__li_span');
    const drops = document.querySelectorAll('.header-for-992px__nav__ul-menu');

    menuBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            let currentBtn = e.currentTarget;
            let drop = currentBtn.closest('.header-for-992px__nav__ul__li').querySelector('.header-for-992px__nav__ul-menu');


            menuBtns.forEach(el => {
                if(el !== currentBtn){
                    el.classList.remove('activee');
                }
            });

            drops.forEach(el => {
                if(el !== drop){
                    el.classList.remove('grid-header')
                }
            })

            drop.classList.toggle('grid-header')
            currentBtn.classList.toggle('activee');
        })
    })

    document.addEventListener('click', (e) => {
        if(!e.target.closest('.header-for-992px__nav')){
            menuBtns.forEach(el => {
                el.classList.remove('activee');
                
            });
            drops.forEach(el => {
                el.classList.remove('grid-header')
            })
        }
    })
});