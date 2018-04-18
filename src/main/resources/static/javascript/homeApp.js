//Muestra acceder o el usuario dependiendo si se esta autenticado o no
$(document).ready(function () {
    const nombre = $("#primerNombre").val();
    const redirectUrl = "userprofile";
    const $userEntryForm = $("#userProfileEntryForm");
    if ($("#jwt").val() !== " ") {
        $userEntryForm.append(`
                    <button class="username-button" type="submit">${capitalizeFristLetter(nombre)}</button>
                `);
        $(".login-button").append(`<a href="/login"><img id="logout-logo" src="../../images/logout.svg" alt="logout-logo"/></a>`);
        $(".dropdown-login").hide();
        $userEntryForm.attr("action", redirectUrl);
        $("#loginForm").hide();
    }
});

//Resalta el "tab" seleccionado
$(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
});

//desactiva el dropdown del login
$("#loginButton").click(function () {
    encenderOverlay();
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
function encenderOverlay() {
    document.getElementById("overlay").style.display = "block";
    closeNav();
}

//Desactiva el overlay y activa de nuevo el dropdown del loging
function apagarOverlay() {
    $loginForm = $("#loginForm");
    document.getElementById("overlay").style.display = "none";
    // document.getElementById("loginButton").disabled = false;
    $loginForm.removeClass("show");
    $(".dropdown-login").removeClass("show");
    $("#accederButton").attr("aria-expanded", "false");
}

