/*----------------------------------------------------*/
//GET USER INFO AND HISTORIC DATA
/*----------------------------------------------------*/
$(document).ready(function () {
    let $username = $("#username").val();
    let url = "http://localhost:8090/user/" + $username;
    // let url = "https://aqueous-temple-46001.herokuapp.com/user/" + $username;
    let jwt = $("#jwt").val();
    const test = "Bearer " + jwt;
    console.log("test");
    console.log(jwt);
    console.log($username);
    console.log("finish test");
    let data = {
        method: 'GET',
        headers: {
            "Authentication": test,
            "Authorization": $username
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

function fectchData(url, data) {
    return fetch(url, data)
        .then(checkStatus)
        .then(response => response.json());
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
    $("#primerNombre").val(data[0].user.primerNombre);
    //  TODO: procesar los datos del usuario

    return data;
}


function errorHandlerUserPage(error) {
    console.log(error);
    $(".nombreUsuario").text(`No hay conexión con la base de datos`);
}