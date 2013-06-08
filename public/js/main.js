$(document).ready(function() {
  $.get('/wishes', function(wishes) {
    // TODO: Handle possible errors
    var wish_list = $('#pending_wishes_list'); 
    for (var i = 0; i < wishes.length; ++i) {
      wish_list.append('<li>' + wishes[i].tag + ' ' + wishes[i].price + '</li>');
    }
  });
});

$("#submitButton").click(function() {
  var tag = $('#tag').val();
  var price = $('#price').val();
  $.post('/wishes', {"tag": tag, "price": price}, function() {
    // TODO: Handle possible errors
    $('#pending_wishes_list').append('<li>' + tag + ' ' + price + '</li>');
  });
});

