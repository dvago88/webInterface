let baseUrl = "http://localhost:8090/";
//Llama a la API para pedir las estaciones segun el centro elegido
$("select").change(function () {
    let url;
    if ($(this).val() === '1') {
        url = baseUrl + "stations";
        // url = "https://aqueous-temple-46001.herokuapp.com/stations";
    }
    $.getJSON(url, function (data) {
        let numberStations = data.length;
        let contador = 0;
        for (let i = 0; i < numberStations; i++) {
            if (data[i]["available"] === true) {
                contador++;
            }
        }
        $(".infoCiclas").show();
        $("#total").text(numberStations);
        $("#libres").text(contador);
    }).fail(function (jqXHR) {
        console.log(jqXHR);
        $(".infoCiclas").hide();
    });

});

$('#loginForm').submit(function (event) {
    let url;
    url = baseUrl + "perform_login";
    event.preventDefault();
    let username = $('#username').val();
    let data = 'username=' + username + '&password=' + $('#password').val();

    $.ajax(url, {
        data: data,
        timeout: 1000,
        type: 'POST',
        crossDomain: true,
        success: function (data, textStatus, jqXRH) {
            $(".login-button").append(`<div class="username">${username}</div>`);
            console.log("clear success");
        }

    }).done(function (data, textStatus, jqXHR) {
        console.log("success");
        console.log(data);
        console.log(textStatus);
        console.log(jqXHR);
        // window.location = preLoginInfo.url;

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("failure");
        console.log(textStatus);
        console.log(jqXHR);
        console.log(errorThrown);
    });
});