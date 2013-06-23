$(document).ready(function() {

  // TODO: Handle possible errors
  $.get('/wishes', function(wishes) {

    var lessThanAMonth = function(elem) {
      var oneMonth = 31*24*60*60*1000;
      return new Date().getTime() - new Date(elem.date).getTime() < oneMonth;
    }

    var printWishesAt = function(selector) {
      return function(element) {
        selector.append('<li>' + element.tag + ' ' + element.price + ' ' + new Date(element.date).toDateString() + '</li>');
      };
    }

    var pending_wishes = _.select(wishes, lessThanAMonth);
    _.each(pending_wishes, printWishesAt($('#pending_list')));

    var approved_wishes = _.difference(wishes, pending_wishes);
    _.each(approved_wishes, printWishesAt($('#approved_list')));
  });
});

$("#submitButton").click(function() {
  
  var tag = $('#tag').val();
  var price = $('#price').val();
  
  // TODO: Handle possible errors
  $.post('/wishes', {"tag": tag, "price": price}, function() {
    $('#pending_list').append('<li>' + tag + ' ' + price + '</li>');
  });
});

