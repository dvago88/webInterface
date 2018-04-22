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
    populateChart("perro");
});

/*----------------------------------------------------*/
//GET USER INFO WHEN THERE'S NO HISTORIC DATA
/*----------------------------------------------------*/

function getOnlyUserInfo() {
    let $username = $("#username").val();
    let url = "http://localhost:8090/user/username/" + $username;
    // let url = "https://aqueous-temple-46001.herokuapp.com/user/username" + $username;
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
        .then(data => showName(data))
        .catch(error => errorHandlerUserPage(error));
}

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
    console.dir(data);
    if (data.length === 0) {
        getOnlyUserInfo();
    }
    showName(data[0].user);
    populateTable(data);
    // populateChart(data);
    return data;
}

function showName(user) {
    const sexo = user.sexo;
    const nombre = user.primerNombre;
    let letraFinal;
    if (sexo === "F") {
        letraFinal = "a";
    } else if (sexo === "M") {
        letraFinal = "o";
    } else {
        letraFinal = "@";
    }
    $("#wrapper").css("display", "block");
    $(".nombreUsuario").text(`Bienvenid${letraFinal} ${capitalizeFristLetter(nombre)}`); //muestra el nombre
    $("#primerNombre").val(nombre);
    displayNameIfLogin(nombre);
    $lista = $(".opciones");
    if (user.role.id <= 3) {
        ifMiniAdmin($lista);

    }
    if (user.role.id <= 2) {
        ifAdmin($lista);
    }
}

function ifMiniAdmin($lista) {
    $lista.append(`
                <li>Estadísticas</li>     
                <li>Participantes</li>`)
    $lista.prepend(`<li>Dashboard</li>`)
}

function ifAdmin($lista) {
    $lista.append(`
                            <li>Organizaciones</li>
                            <li>Control Módulos</li>
                            <li>Mapa</li>
                            <li>Publicidad</li>`)
}

function populateTable(data) {
    let $tableBody = $("tbody");
    let counter = 6;
    let dataLength = data.length;
    if (dataLength < counter) {
        counter = dataLength;
    }

    for (let index = 0; index < counter; index++) {
        const currentValue = data[index];
        let date = new Date(currentValue.fechaIngreso);
        let dia = date.getDate();
        let mes = date.getMonth() + 1;
        let ano = date.getFullYear();
        let hora = date.getHours();
        let minuto = date.getMinutes();
        const fechaIngreso = `${dia}/${mes}/${ano}`;
        const horaIngreso = `${hora}:${minuto}`;
        let activo;
        let fechaSalida;
        let horaSalida;
        if (currentValue.fechaSalida === null) {
            activo = "Activo";
            fechaSalida = "-";
            horaSalida = "-";
        } else {
            activo = "Cerrado";
            date = new Date(currentValue.fechaSalida);
            dia = date.getDate();
            mes = date.getMonth() + 1;
            ano = date.getFullYear();
            hora = date.getHours();
            minuto = date.getMinutes();
            fechaSalida = `${dia}/${mes}/${ano}`;
            horaSalida = `${hora}:${minuto}`;
        }
        $tableBody.append(`
            <tr>
                <th scope="row">${index + 1}</th>
                <td>Ciudad del rio</td>
                <td>${fechaIngreso}</td>
                <td>${horaIngreso}</td>
                <td>${activo}</td>
                <td>${fechaSalida}</td>
                <td>${horaSalida}</td>
            </tr>
        `);
    }
}

function populateChart(data) {
    let $cantidadMes1 = $("#cantidadMes1");
    let $cantidadMes2 = $("#cantidadMes2");
    let $cantidadMes3 = $("#cantidadMes3");
    let $cantidadMes4 = $("#cantidadMes4");
    let $cantidadMes5 = $("#cantidadMes5");
    let $cantidadMes6 = $("#cantidadMes6");

    $cantidadMes1.text(10);
    $cantidadMes2.text(10);
    $cantidadMes3.text(10);
    $cantidadMes4.text(10);
    $cantidadMes5.text(10);
    $cantidadMes6.text(10);

    // myChart.update();
}


function errorHandlerUserPage(error) {
    console.log(error);
    $(".nombreUsuario").text(`No hay conexión con la base de datos`);
}

function displayNameIfLogin(nombre) {
    const $userEntryForm = $("#userProfileEntryForm");
    const redirectUrl = "userprofile";
    $userEntryForm.append(`
                    <button class="username-button" type="submit">${capitalizeFristLetter(nombre)}</button>
                `);
    $(".login-button").append(`<a href="/login"><img id="logout-logo" src="../../images/logout.svg" alt="logout-logo"/></a>`);
    $(".dropdown-login").hide();
    $userEntryForm.attr("action", redirectUrl);
    $("#loginForm").hide();
}