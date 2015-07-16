$(document).ready(function(){
  $('.ui.dropdown').dropdown();
})

$('.js-select a').click(function(e){
  e.preventDefault();
  $(this).addClass('active').siblings('.active').removeClass('active');
});