//Resalta el "tab" seleccionado
$(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});

//desactiva el dropdown del login
$("#loginButton").click(function () {
    on();
    $loginForm = $("#loginForm");
    //Si estamos en un movil y esta en modo portrait (pero esto ultimo no funciona... -.-)
    if ($('#mobile-indicator').is(':visible') && window.innerHeight > window.innerWidth) {
        document.getElementById("loginButton").disabled = true;
        // $(this).disabled = true;
        $(".navbar .navbar-toggler").addClass("collapsed");
        // $("#navbarNav").removeClass("show");
        $loginForm.addClass("show");
        $loginForm.css({
            "position": "fixed",
            "width": "90%",
            "height": "90%",
            "top": "50%",
            "left": "50%",
            "margin-top": "-90%",
            "margin-left": "-45%",
        });
        $loginForm.removeClass("p-3");
        $loginForm.addClass("p-6");
    }
});

//Aplica el overlay
function on() {
    document.getElementById("overlay").style.display = "block";
}

//Desactiva el overlay y activa de nuevo el dropdown del loging
function off() {
    $loginForm = $("#loginForm");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("loginButton").disabled = false;
    $loginForm.removeClass("show");
    $loginForm.removeClass("p-6");
    $loginForm.addClass("p-3");
    $loginForm.css({
        "position": "absolute",
        "width": "100%",
        "left": "-100px",
        "margin": "auto",
        "top": "0"
    });
}