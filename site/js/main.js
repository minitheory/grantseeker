$(document).ready(function(){
  $('.ui.dropdown').dropdown();
})

$('.js-select a').click(function(e){
  e.preventDefault();
  if ($(this).hasClass('active')){
    $(this).removeClass('active');
    return;
  } 
  $(this).addClass('active').siblings('.active').removeClass('active');
});