// http://www.chartjs.org/docs/latest/
let $mes1 = $("#mes1");
let $mes2 = $("#mes2");
let $mes3 = $("#mes3");
let $mes4 = $("#mes4");
let $mes5 = $("#mes5");
let $mes6 = $("#mes6");
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
//TODO: hacer dimamico el cambio de nombre del mes
let data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [{
        label: 'Ciclo Parqueos Mensuales',
        data: [$mes1.text(), $mes2.text(), $mes3.text(), $mes4.text(), $mes5.text(), $mes6.text()],
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