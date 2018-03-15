let baseUrl = "http://localhost:8090/";
let currentUser = null;
let jwt = "";

function capitalizeFristLetter(string) {
    console.log(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//Llama a la API para pedir las estaciones segun el centro elegido
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

//Login
$('#loginForm').submit(function (event) {
    let url;
    url = baseUrl + "perform_login";
    // url = baseUrl + "login";
    event.preventDefault();
    let username = $('#username').val();
    let data = 'username=' + username + '&password=' + $('#password').val();

    $.ajax(url, {
        data: data,
        // timeout: 1000,
        type: 'POST',
        crossDomain: true,
        success: function (data, textStatus, jqXRH) {
            //todo: mirar como optener la url de redireccionamiento o como hacer este paso más limpio
            // let redirectUrl = "userprofile/" + username;
            let redirectUrl = "userprofile";
            jwt = data.jws;
            // $(".login-button").prepend(`<div class="username"><a href="${redirectUrl}">${capitalizeFristLetter(data.userName)}</a></div>`);
            $(".login-button").prepend(`
                <form action="${redirectUrl}" method="post" >
                    <input name="jwt" type="hidden" value="${jwt}"/>
                    <input name="username" type="hidden" value="${username}"/>
                    <button class="username" type="submit">${capitalizeFristLetter(data.userName)}</button>
                </form>
                `);
            // console.log("clear success");
            // console.log(data);
            // console.log(textStatus);
            console.log(jwt);
            currentUser = username;
            $("#loginForm").hide();
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

    /*   fetch(url)
           .then(response => response.json())
           .then(data => console.log(data));*/


    //https://stackoverflow.com/questions/15620701/keep-authentication-enable-in-rest-services
    //After every successful authentication your server can return a unique 27[any length you want] digit string.
    // This token may or may not have a expiry policy[depends on what you want]. So for subsequent
    // authentications [when the client application has an auth token]you can actually provide a new auth token
    // and invalidate the previous one.

    //https://stormpath.com/blog/token-auth-for-java

    //https://stackoverflow.com/questions/44719639/spring-security-restful-web-services-and-maintaining-user-sessions
    //If you'd like to design a REST API, I would send session id in headers as you've explained with each AJAX call.
    // One API method should authenticate user and provide a token (or session id), which should be stored by the client
    // somewhere (e.g. in cookies). All other methods should require it to be able to access a resource. When the user
    // is logged out, this value should be erased and user shouldn't be able to access a resource.

    /*$.getJSON(url, function (data) {
        console.log(data);
    }).fail(function (jqXHR) {
        console.log(jqXHR);
    });*/
});
