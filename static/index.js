// Example from: https://developer.mozilla.org/en-US/docs/Web/API/EventSource

$(document).ready(function () {
  $("#formNewMessage").submit(function (e) {
    e.preventDefault();
    $.post("/new-message", { text: $("#textNewMessage").val() }).then(() => {
      $("#textNewMessage").val("");
    });
  });

	var sse = new EventSource("/stream-express-sse");
	sse.addEventListener("chat-messages", function(e) { 
		console.log(e.data);
		const message = JSON.parse(e.data);
		$("#messages").append(`<li>${message}</li>`);
	})
});
