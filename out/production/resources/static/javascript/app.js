//Resalta el "tab" seleccionado
$(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});
