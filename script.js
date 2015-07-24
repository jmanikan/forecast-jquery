var template = function(text) {
  return '<span class="glyphicon glyphicon-minus"></span>';
};

var main = function() {
  $('.day').click(function() {
    // console.log("Goy");
    $('.hourly').toggle();
  });

  // $('.day').click(function() {
  //   $(this).find('.glyphicon-plus').remove();
  // });

  $('.day').on('click', '.weekday', function() {
    $(this).find('span').toggleClass('glyphicon-minus');
  });


};

$(document).ready(main);
