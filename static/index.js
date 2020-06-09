$(document).ready(function() {

    $("#formNewMessage").submit(function(e) {
        e.preventDefault();
        $.post( "/new-message", { text: $("#textNewMessage").val() } ).then(() => {
            $("#textNewMessage").val('');
        });
    });

    var es = new EventSource('/stream-express-sse');
    es.onmessage = function (event) {
        const data = JSON.parse(event.data);
        $("#messages").append(`<li>${data}</li>`);
    };
});