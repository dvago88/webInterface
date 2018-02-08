//Llama a la API para pedir las estaciones segun el centro elegido
$("select").change(function () {
    let url;
    if ($(this).val() === '1') {
        // url = "http://localhost:8090/stations";
        url = "https://aqueous-temple-46001.herokuapp.com/stations";
    }
    //Esto es para csrf cuando se implemente la seguridad
    /*   let token = $(elem).parent().children("input").attr("value");
       let header = $(elem).parent().children("input").attr("name");*/

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

        /* $("body").append("<div class='container'>" +
             "<h1 class='stations'>" + numberStations + "</h1>" +
             "<h1>" + contador + "</h1>" +
             "</div>")*/
    }).fail(function (jqXHR) {
        console.log(jqXHR);
        $(".infoCiclas").hide();
    });

});

