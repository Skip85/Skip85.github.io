$(function(){
	$('.header li').click(function(){
		$('.header li').removeClass();
		$(this).addClass('active');

	})
	var mass=[];
	$('.btn').click(function(){
		if($('.inp').val()){
		var d = $('.inp').val();
		var dLower = d.toLowerCase();
		if($.inArray(dLower,mass) == -1)
		{
			mass.push(dLower);
			$('.todo-list ul').append('<i class="remove-do">X</i><li>'+d+'</li>');
		}
		else{
			alert('Это дело уже есть в списке!');
		}
		$('.inp').val('');
	}
	});
	$('body').on('click', '.remove-do', function(){
		
		var el = $(this).next().text();
		var id = $.inArray(el.toLowerCase(), mass);
		$('.todo li').eq(id).remove();
		$(this).remove();
		mass.splice(id, 1);

	});
});