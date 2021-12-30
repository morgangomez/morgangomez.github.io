



$( document ).ready( function(){
  $('section').addClass('fade');
});

$('a').click(function(link) {
  link.preventDefault();
  var url = $(link.currentTarget).attr('href');
  
  $('section').removeClass('fade');

  setTimeout(function(){
    window.location.href = url;
  }, 550);
});

