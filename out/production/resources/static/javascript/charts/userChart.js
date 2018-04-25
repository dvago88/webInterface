// http://www.chartjs.org/docs/latest/
let dataForTheChart;
let ctx;
let options;

function obatainGraphData() {
    let $cantidadMes1 = $("#cantidadMes1");
    let $cantidadMes2 = $("#cantidadMes2");
    let $cantidadMes3 = $("#cantidadMes3");
    let $cantidadMes4 = $("#cantidadMes4");
    let $cantidadMes5 = $("#cantidadMes5");
    let $cantidadMes6 = $("#cantidadMes6");

    const $nombreMes1 = $("#nombreMes1");
    const $nombreMes2 = $("#nombreMes2");
    const $nombreMes3 = $("#nombreMes3");
    const $nombreMes4 = $("#nombreMes4");
    const $nombreMes5 = $("#nombreMes5");
    const $nombreMes6 = $("#nombreMes6");
    ctx = document.getElementById("myChart").getContext('2d');
    let barColor = 'rgba(146, 208, 80, 0.2)';
    let borderBarColor = 'rgba(146, 208, 80, 1)';
    dataForTheChart = {
        labels: [$nombreMes1.text(), $nombreMes2.text(), $nombreMes3.text(), $nombreMes4.text(), $nombreMes5.text(), $nombreMes6.text()],
        datasets: [{
            label: 'Ciclo Parqueos Mensuales',
            data: [$cantidadMes1.text(), $cantidadMes2.text(), $cantidadMes3.text(), $cantidadMes4.text(), $cantidadMes5.text(), $cantidadMes6.text()],
            backgroundColor: [
                barColor,
                barColor,
                barColor,
                barColor,
                barColor,
                'rgba(255, 159, 64, 0.2)'

            ],
            borderColor: [
                borderBarColor,
                borderBarColor,
                borderBarColor,
                borderBarColor,
                borderBarColor,
                'rgba(255, 159, 64, 1)'

            ],
            borderWidth: 1
        }]
    };

    options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    };
}

function graphForAdmins() {
    ctx = document.getElementById("myChart").getContext('2d');
    let barColor = 'rgba(146, 208, 80, 0.2)';
    let borderBarColor = 'rgba(146, 208, 80, 1)';
    dataForTheChart = {
        labels: ["Noviembre", "Diciembre", "Enero", "Febrero", "Marzo", "Abril"],
        datasets: [{
            label: 'Numero de Usuarios Mensuales',
            data: [100, 150, 80, 170, 163, 185],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            hoverBorderWidth: [3, 3, 3, 3, 3],
            borderWidth: 1
        }]
    };

    options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    };
}

function pieChartForAdmins() {
    ctx = document.getElementById("myChart2").getContext('2d');
    // let borderBarColor = 'rgba(146, 208, 80, 1)';
    let borderBarColor = 'rgba(0, 0, 0, 1)';
    dataForTheChart = {
        labels: ["Organización 1", "Organización 2", "Organización3", "Organización 4", "Organización 5"],
        datasets: [{
            label: 'Usuarios por Organización',
            data: [28, 15, 8, 17, 16],
            backgroundColor: [
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 255, 255, 0.2)',
                'rgba(255, 255, 0, 0.2)',
                'rgba(255, 0, 255, 0.2)',
                'rgba(255, 0, 0, 0.2)',
            ],
            borderColor: [
                borderBarColor,
                borderBarColor,
                borderBarColor,
                borderBarColor,
                borderBarColor,
            ],
            hoverBackgroundColor: [
                'rgba(0, 255, 0, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(255, 0, 255, 1)',
                'rgba(255, 0, 0, 1)',
            ],
            borderWidth: 1
        }]
    };

    options = {
        maintainAspectRatio: false,
    };
}

let myChart;

function crearGrafica(type) {
    myChart = new Chart(ctx, {
        type: type,
        data: dataForTheChart,
        options: options
    });
}







