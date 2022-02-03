//  jQuery script to set carousel cycle interval to 2000ms (2 sec) upon load-->
// NOTE: This code that we are using in the beginning of the jQuery script:
//     $(function() { ... });
//     is the shorthand, recommended version for this code, called the jQuery ready method or ready function, which specifies a function to load when the webpage's DOM is ready:
//     $( document).ready(function() { ... });

$(function () {
    // was original code
    // $(".carousel").carousel({ interval: 2000 });
    // replaced by this code to work with touchscreens
    $(".carousel").carousel({ interval: 2000, pause: "false" });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});
