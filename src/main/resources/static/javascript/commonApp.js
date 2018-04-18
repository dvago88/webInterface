function closeNav() {
    document.getElementById("navbarNav").style.width = "0";
    $(".closebtn").hide();
    $(".logo").hide();
}

function openNav() {
    $(".closebtn").show();
    $(".logo").show();
    const navBar = document.getElementById("navbarNav");

    if ($("#mobile-indicator").is(':visible')) {
        navBar.style.width = "100%";
    } else {
        navBar.style.width = "50%";
    }
}