// http://www.chartjs.org/docs/latest/
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
let ctx = document.getElementById("myChart").getContext('2d');
/*let data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [{
        label: 'Ciclo Parqueos Mensuales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};*/
let barColor = 'rgba(146, 208, 80, 0.2)';
let borderBarColor = 'rgba(146, 208, 80, 1)';
/*let data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [{
        label: 'Ciclo Parqueos Mensuales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: barColor,
        borderColor: borderBarColor,
        borderWidth: 1
    }]
};*/
let data = {
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

let options = {
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
let myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});