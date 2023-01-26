 const header = $("#header-scroll"),
        cloneHeader = header.clone();

        cloneHeader.addClass("header-fixed");
        header.before(cloneHeader);

       $(window).scroll(function(){
          if($(window).scrollTop() > 35){
            header.addClass("header-none");
            cloneHeader.addClass("header-is-show");
          } else {
            cloneHeader.removeClass("header-is-show");
            header.removeClass("header-none");
          }
})