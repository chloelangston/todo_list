$(
  function(){
    $('.glyphicon-star').click(function() {
    $(this).css('color', '#ffcc00');
  });

  $('.glyphicon-remove').click(function() {
    $(this).parent().remove();
  });



  $('button.btn').click(function(e) {
    e.preventDefault();
    var text = $("#todo").val();
    var template = '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
    console.log(text);
    $('.list').append(template);
    $('.glyphicon-star').click(function() {
    $(this).css('color', '#ffcc00');
  });
  $('.glyphicon-remove').click(function() {
    $(this).parent().remove();
  });
  });

});
