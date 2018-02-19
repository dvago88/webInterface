$(document).ready(function () {
    let url = "http://localhost:8090/historial/1";
// let url="https://aqueous-temple-46001.herokuapp.com/historial/1";

    $.getJSON(url, function (data) {
//  TODO: Hacer el llamado al server para cargar los datos del usuario

    }).fail(function (jqXHR) {
        console.log(jqXHR);
    });


});