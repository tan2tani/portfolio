// theme(light & dark)
$(function(){
    $(".btn_theme").click(function(){
        $("body").toggleClass("theme_dark");

        const isDark = $("body").hasClass("theme_dark");

        console.log("isDark:", isDark);

        $("img[data-light][data-dark]").each(function(){
            const $img = $(this);
            const newSrc = isDark ? $img.data("dark") : $img.data("light");
            $img.attr("src", newSrc);
        });

        
    });
});



// page top
$(function(){
    $(".btn_top").click(function(){
        $("html, body").animate({scrollTop : 0}, 500);
        return false;
    });
})