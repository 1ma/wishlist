$(document).ready(function() {

  $.get('/wishes', function(wishes) {
    // TODO: Handle possible errors

    var makePrintFunction = function(selector) {
      return function(element) {
        selector.append('<li>' + element.tag + ' ' + element.price + ' ' + element.date + '</li>');
      };
    }
    
    var pending_wishes = _.select(wishes, function(wish) {
      return wish.price < 1000;
    });
    _.each(pending_wishes, makePrintFunction($('#pending_list')));

    var approved_wishes = _.difference(wishes, pending_wishes);
    _.each(approved_wishes, makePrintFunction($('#approved_list')));

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

