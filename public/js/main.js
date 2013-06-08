$(document).ready(function() {
  $.get('/wishes', function(wishes) {
    var wish_list = $('#pending_wishes_list'); 
    for (var i = 0; i < wishes.length; ++i) {
      wish_list.append('<li>' + wishes[i].tag + ' ' + wishes[i].price + '</li>');
    }
  });
});

$("#submitButton").click(function() {
  var tag = $('#tag').val();
  var price = $('#price').val();
  $.post('/wishes', {"tag": tag, "price": price}, function(data) {
  });
});

