// theme(light & dark)
$(function(){
    $(".btn_theme").click(function(){
        $("body").toggleClass("theme_dark");
    });
})



// page top
$(function(){
    $(".btn_top").click(function(){
        $("html, body").animate({scrollTop : 0}, 500);
        return false;
    });
})