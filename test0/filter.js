$(function () {
$.getJSON('json/pob.json', function(data){
  var items = [];
  $.each(data, function(key, val){
  items.push('<li>' + val.name + '</li>');
  });
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('.content');

});
	$('.input').keyup(function(){
	  var value = $('.input').val().toUpperCase();
	  var eql ='';
	  for(var i=0; i< $('.content li').length; i++)
	  {
	  	eql = $('.content li:eq('+i+')').text();
	  	if(eql.toUpperCase().indexOf(value) > -1){
	  		$('.content li:eq('+i+')').css('display','block');

	  	}else{$('.content li:eq('+i+')').css('display','none');}
	  }
	  

	});
	


})