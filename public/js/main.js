$("#submitButton").click(function() {
  var tag = $('#tag').val();
  var price = $('#price').val();
  $.post('/wish', {"tag": tag, "price": price}, function(data) {
    alert(data);
  });
});