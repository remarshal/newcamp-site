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

    // activates reserve button
    $("#reserveButton").click(function () {
        $("#reserveModal").modal("show");
    })

    // activates login button
    $("#loginButton").click(function () {
        $("#loginModal").modal("show");
    })
});