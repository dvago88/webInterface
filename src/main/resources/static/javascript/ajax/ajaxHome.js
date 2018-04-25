let baseUrl = "http://localhost:8090/";
let currentUser = null;

function capitalizeFristLetter(string) {
    console.log(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*----------------------------------------------------*/
//CALL API TO GET STATIONS INFO
/*----------------------------------------------------*/
$("#ciudadRio").click(function () {
    event.preventDefault();
    let url = baseUrl + "stations";
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

/*----------------------------------------------------*/
//PERFORM LOGIN
/*----------------------------------------------------*/
$('#loginForm').submit(function (event) {
    let url;
    url = baseUrl + "perform_login";
    event.preventDefault();
    let username = $('#usernameInput').val().toLowerCase();
    let data = 'username=' + username + '&password=' + $('#password').val();

    $.ajax(url, {
        data: data,
        // timeout: 1000,
        type: 'POST',
        crossDomain: true,
        success: function (data, textStatus, jqXRH) {
            let redirectUrl = "userprofile";
            let jwt = data.jws;
            const $userEntryForm = $("#userProfileEntryForm");
            let nombre = capitalizeFristLetter(data.userName);

            $userEntryForm.append(`
                    <button class="username-button" type="submit">${nombre}</button>
                `);
            $(".login-button").append(`<a class="padding-8" href="/"><img id="logout-logo" src="../../images/logout.svg" alt="logout-logo"/></a>`);
            $(".dropdown-login").hide();
            $userEntryForm.attr("action", redirectUrl);
            $(".jwt").val(jwt);
            $(".username").val(username);
            $(".primerNombre").val(nombre);
            console.log(jwt);
            currentUser = username;
            $("#loginForm").hide();
            $("#home-button").attr("method", "post");
            document.getElementById("overlay").style.display = "none";
        }

    }).done(function (data, textStatus, jqXHR) {
        console.log("success");
        // window.location = preLoginInfo.url;

    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("failure");
        console.log(textStatus);
        console.log(jqXHR);
        console.log(errorThrown);
    });
});

$(document).on('click', '.username', function () {
    let url = "http://localhost:8090/user/dan";//por ahora
    if (currentUser !== null) {
        url = baseUrl + "user/" + currentUser;
        console.log("entró aquí wiiii!!!");
    }
});
