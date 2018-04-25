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
    data = fectchData(url, data)
        .then(data => showPage(data))
        .catch(error => errorHandlerUserPage(error));

    console.log("new data: ");
    console.log(data);
    // populateChart(data);
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
        .then(data => showNameAndGraphs([{"user": data}]))
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
    } else {
        let needsToPopulateTable = showNameAndGraphs(data);
        if (needsToPopulateTable) {
            console.log("Usuario Normal")
        } else {
            console.log("Admin");
        }
    }

    return data;
}

function showNameAndGraphs(data) {
    user = data[0].user;
    const sexo = user.sexo;
    const nombre = capitalizeFristLetter(user.primerNombre);
    let letraFinal;
    if (sexo === "F") {
        letraFinal = "a";
    } else if (sexo === "M") {
        letraFinal = "o";
    } else {
        letraFinal = "@";
    }
    $("#wrapper").css("display", "block");
    $(".nombreUsuario").text(`Bienvenid${letraFinal} ${nombre}`); //muestra el nombre
    $(".primerNombre").val(nombre);
    displayNameIfLogin(nombre);
    $lista = $(".opciones");
    if (user.role.id <= 3) {
        ifMiniAdmin($lista);

    }
    if (user.role.id <= 2) {
        ifAdmin($lista);
        graphForAdmins();
        crearGrafica("line");
        populateTable(data);
        pieChartForAdmins();
        crearGrafica("pie");
        return false;
    }
    populateTable(data);
    populateChart(data);
    return true;
}

function ifMiniAdmin($lista) {
    $lista.append(`
                <li class="en-construccion">Estadísticas</li>     
                <li class="en-construccion">Participantes</li>`)
}

function ifAdmin($lista) {
    $lista.append(`
                            <li class="en-construccion">Organizaciones</li>
                            <li class="en-construccion">Control Módulos</li>
                            <li class="en-construccion">Mapa</li>
                            <li class="en-construccion">Publicidad</li>`);
    // $("head").append(`<link rel="stylesheet" href="/css/adminchanges1.css"/>`);
    $(".the-p-word img").detach();
    $(".the-p-word").append(
        `                <div class="chart-container">
                             <canvas id="myChart2"></canvas>
                         </div>`
    );
    $(".titulo-historial h2").text("Historial de préstamos de Usuarios");
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
    let meses = [
        $("#cantidadMes1"),
        $("#cantidadMes2"),
        $("#cantidadMes3"),
        $("#cantidadMes4"),
        $("#cantidadMes5"),
        $("#cantidadMes6")
    ];

    //Para que si el loop de adelante se sale antes igual haya algún valor asignado
    meses.forEach((mes) => {
        // mes.text(0);
        mes.text(Math.floor(Math.random() * 10)); //mientras tanto para ver datos...
    });

    /*const dataLength = data.length;
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth();
    let dateChecker;
    let yearChecker;
    let monthChecker;
    let contador = 0;
    let index = 0;
    //TODO: mirar como almacenar esto para no tener que hacer este loop cada vez que el usuario entra o refresca la pag
    for (let i = dataLength - 1; i >= 0; i--) {
        let currentValue = data[i];

        if (currentValue.fechaSalida !== null) {
            dateChecker = new Date(currentValue.fechaSalida);
            yearChecker = dateChecker.getFullYear();
            monthChecker = dateChecker.getMonth();
            let differentYear = month - monthChecker;
            console.log(month);
            console.log(monthChecker);
            if (year - yearChecker <= 1 && differentYear >= 0) {
                if (monthChecker === month) {
                    contador++;
                } else {
                    console.log("Valor de contador: " + contador);
                    meses[index].text(contador);
                    index++;
                    month--;
                    contador = 0;

                    if (month === -1) {
                        month = 11;
                    }
                }
            } else {
                index += month + 1;
            }
            if (index === 6) {
                i = -1;
            }
        }
    }*/
    obatainGraphData();
    crearGrafica("bar");
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
    $(".login-button").append(`<a class="padding-8" href="/"><img id="logout-logo" src="../../images/logout.svg" alt="logout-logo"/></a>`);
    $(".dropdown-login").hide();
    $userEntryForm.attr("action", redirectUrl);
    $("#loginForm").hide();
}