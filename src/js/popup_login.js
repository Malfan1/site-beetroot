const openPopUp = document.querySelector("#open-pop-up-login");
const container = document.querySelector('#pop-up-login-container');

openPopUp.addEventListener('click', function(e){
    //e.preventDefault();
    container.classList.add("active");
});

document.addEventListener('click', (e) =>{
    const click = e.composedPath().includes(openPopUp);
    if (!click){
        container.classList.remove("active");
    }
})