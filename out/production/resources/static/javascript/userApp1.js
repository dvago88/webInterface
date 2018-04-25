let $contenido = $(".container-fluid");

$("#verHiddenPanelButton").click(() => {
    $("#hiddenButton").hide();
    $(".left-panel").append(`<button id="retraer-panel" type="button">Retraer panel</button>`);
    $(".left-panel").show(1000);
});
$(document).on('click',"#retraer-panel", function () {
// $("#retraer-panel").click(() => {
    console.log("WTF");
    $(".left-panel").hide(1000);
    $("#hiddenButton").show(500);
    $("#retraer-panel").remove();
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
