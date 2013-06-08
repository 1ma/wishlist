$(document).ready(function() { 
  $.get('/wishes', function(wishes) {
    // TODO: Handle possible errors

    var pending_wishes = _.select(wishes, function(wish) {
      return wish.price < 1000;
    });
    _.each(pending_wishes, function(element) {
      $('#pending_list').append('<li>' + element.tag + ' ' + element.price + ' ' + element.date + '</li>');
    });

    var approved_wishes = _.difference(wishes, pending_wishes);
    _.each(approved_wishes, function(element) {
      $('#approved_list').append('<li>' + element.tag + ' ' + element.price + ' ' + element.date + '</li>');
    });
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

