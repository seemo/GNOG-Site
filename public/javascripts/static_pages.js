(function() {

  $("#mail-form").bind("ajax:complete", function(xhr, status) {
    return $("#response").html(status.responseText);
  }).bind("ajax:beforeSend", function() {
    return $("#response").html("<p>Sending...</p>");
  });

  $("#mail-form-phone").bind("ajax:complete", function(xhr, status) {
    return $("#response-phone").html(status.responseText);
  }).bind("ajax:beforeSend", function() {
    return $("#response-phone").html("<p>Sending...</p>");
  });

  $("#general-mail-form").bind("ajax:complete", function(xhr, status) {
    return $("#general-response").html(status.responseText);
  }).bind("ajax:beforeSend", function() {
    return $("#general-response").html("<p>Sending...</p>");
  });

  $("#general-mail-form-phone").bind("ajax:complete", function(xhr, status) {
    return $("#general-response-phone").html(status.responseText);
  }).bind("ajax:beforeSend", function() {
    return $("#general-response-phone").html("<p>Sending...</p>");
  });

}).call(this);
