$(document).ready(function () {
    let $username = $("#username").text();
    let url = "http://localhost:8090/user/" + $username;
    $.ajax({
        type: "GET", //GET, POST, PUT
        url: url,  //the url to call
        // dataForTheChart: yourData,
        // contentType: contentType,
        crossDomain: true,
        beforeSend: function (xhr) {   //Include the bearer token in header
            xhr.setRequestHeader("Authentication", 'Bearer ' + $("#jwt").text());
            // xhr.setRequestHeader("Authentication", 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJDaWNsb2Jvc3F1ZS1BUEkiLCJzdWIiOiJkYW4iLCJpYXQiOjE1MjExNTI3MzIsImV4cCI6MTUyMTIzOTEzMn0.Gtrs7VG_FT73o3kLjqrBV3nbMjKeF5b6pS1znrC7i-mYpLSfcTgB-c4jknRH9dRc56f9NKIaI-7Ig8g3Uyv0Bg");
            xhr.setRequestHeader("Authorization", $username);
            // xhr.setRequestHeader("Authentication", 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJDaWNsb2Jvc3F1ZS1BUEkiLCJzdWIiOiJkYW4iLCJpYXQiOjE1MjExNTMzNTgsImV4cCI6MTUyMTE1MzQxOH0.Tn1SvbfgaV6dTJw5ZKAnd36XMzSX90AUTZSpIHL4u0WnUuA1LhoZh6buCgEcK758WBVZxmwMPSfuVt6A8t-L-h");
        },
        success: function (data, textStatus, jqXRH) {
            console.dir(data);
            console.log(textStatus);
            console.log(jqXRH);
        }
    }).done(function (response) {
        //Response ok. process reuslt
        console.log("done");
    }).fail(function (err) {
        //Error during request
        console.error(err);
    });
});