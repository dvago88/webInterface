/*----------------------------------------------------*/
//GET USER INFO AND HISTORIC DATA
/*----------------------------------------------------*/
$(document).ready(function () {
    let $username = $("#username").text();
    let url = "http://localhost:8090/user/" + $username;
    // let url = "https://aqueous-temple-46001.herokuapp.com/user/" + $username;
    let jwt = $("#jwt").text();
    const test = "Bearer " + jwt;
    console.log("test");
    console.log(test);
    console.log(jwt);
    console.log("finish test");
    let data = {
        method: 'GET',
        headers: {
            "Authentication": test,
            // 'Access-Control-Allow-Origin':'*'
        },
        mode: 'cors',

    };
    fectchData(url, data)
        .then(data => showPage(data))
        .catch(error => errorHandlerUserPage(error));
});


/*----------------------------------------------------*/
//HELPER FUNCTIONS
/*----------------------------------------------------*/

function capitalizeFristLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function fectchData(url, headers) {
    return fetch(url, headers)
        .then(checkStatus)
        .then(response => response.json());
    // .then(response => console.log(response));
}

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        // window.location.href = '/login';
        return Promise.reject(new Error(response.statusText));
    }
}

function showPage(data) {
    //todo revisar si es mujer para poner bienvenida
    console.dir(data);
    $("#wrapper").css("display", "block");
    $(".nombreUsuario").text(`Bienvenido ${capitalizeFristLetter(data[0].user.primerNombre)}`); //muestra el nombre

    //  TODO: procesar los datos del usuario

    return data;
}


function errorHandlerUserPage(error) {
    console.log(error);
    $(".nombreUsuario").text(`No hay conexión con la base de datos`);
}