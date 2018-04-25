let $contenido = $(".container-fluid");

$("#verHiddenPanelButton").click(() => {
    $("#hiddenButton").hide();
    $(".left-panel").show(1000);
});

$(".en-construccion").click(() => {
    $contenido.detach();
    console.log("detached");
    let $body = $("body");
    $body.css('background-image', 'url(../images/construccion.svg)');
    $body.css('background-size', 'contain');
});

$("#dashboard").click(() => {
    let $body = $("body");
    $("#wrapper").append($contenido);
    console.log("attached");
    $body.css({'background-color': '#eeeeee'});
    $body.css('background-image', 'none');
});
