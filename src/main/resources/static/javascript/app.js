/*$('#login-button').click(function () {
    $('#login-button').fadeOut("slow", function () {
        $("html").css("background-image", "none");
        $("#barra").show();
        // $("#test").show();
        $(".container").show();
    });
});*/

//Resalta el "tab" seleccionado
$(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});
