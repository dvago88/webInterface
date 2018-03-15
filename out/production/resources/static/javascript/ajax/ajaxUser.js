$(document).ready(function () {
    let $username = $("#username").text();
    let url = "http://localhost:8090/user/" + $username;
    $.ajax({
        type: "GET", //GET, POST, PUT
        url: url,  //the url to call
        // data: yourData,
        // contentType: contentType,
        crossDomain: true,
        beforeSend: function (xhr) {   //Include the bearer token in header
            xhr.setRequestHeader("Authentication", 'Bearer ' + jwt);
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