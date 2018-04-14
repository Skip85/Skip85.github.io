$(function(){
	
	$('.first-name i').click(function(){
		$('.first-name h1').toggle();
		$('.first-name input').toggle();
		$('.edit-name').toggle();
		$('.save-name').toggle();
		var h1 = $('.first-name h1').text();
		var add = $('.first-name input').val();
		var h1n = $('.first-name h1').text(add);
	});
	$('.neo').keyup(function(){	
			var str = $('.neo').val();
			if(str.indexOf('@neolant.ru') > - 1) {
				$('.email p').css('display','none');
				$('.save').css('display','');
			}else{
				$('.email p').css({'display':'', 'color':'red'});
				$('.save').css('display','none');
			}
	});
	$.getJSON('json/placebirth.json', function(data){
	 	for(var i=0; i<data.length; i++)
	  	{
	  		$('.plsname').append('<option value='+data[i].name+'>'+data[i].name+'</option>');
		}
		$('.plsname').click(function(){
			var name = $('.plsname').val();
			$('.plstowns').html('');
			$('.plsreg').html('');
			for(var i=0; i<data[name-1].regions.length; i++)
	  		{	
	  			$('.plsreg').append('<option value='+data[name-1].regions[i].name+'>'+data[name-1].regions[i].name+'</option>');		
	  		}
	  		
		});
		$('.plsreg').click(function(){
			var chek = 0;
			var name = $('.plsname').val();
			var regions = $('.plsreg').val();
			var col = $('.plsreg option').length;

			for(var i=0; i<col-1; i++)
			{
				if($('.plsreg option:eq('+i+')').val() == regions){
					chek=i;
				}
			}

			$('.plstowns').html('');
			for(var i=0; i<col-1; i++){
				$('.plstowns').append('<option value='+data[name-1].regions[chek].towns[i].name+'>'+data[name-1].regions[chek].towns[i].name+'</option>');

			}
			
		});	
	});
	var cookies = document.cookie;
	var cookname = cookies.substring(cookies.indexOf('h1n=')+4,cookies.indexOf(';', cookies.indexOf('n=')));
	var birth = cookies.substring(cookies.indexOf('birth=')+6,cookies.indexOf(';',cookies.indexOf('birth=')));
	var splace = cookies.substring(cookies.indexOf('splace=')+7,cookies.indexOf(';',cookies.indexOf('splace=')));
	var rplace = cookies.substring(cookies.indexOf('rplace=')+6,cookies.indexOf(';',cookies.indexOf('rplace=')));
	var tplace = cookies.substring(cookies.indexOf('tplace=')+6,cookies.indexOf(';',cookies.indexOf('tplace=')));
	var cookemail = cookies.substring(cookies.indexOf('email=')+6,cookies.indexOf(';',cookies.indexOf('email=')));
	var about = cookies.substring(cookies.indexOf('about=')+6,cookies.indexOf(';',cookies.indexOf('about=')));
	var rnd = Math.random();
	$('.save').click(function(){

		document.cookie = "h1n="+$('.first-name h1').text()+"";
		document.cookie = "birth="+$('.birth input').val()+"";
		document.cookie = "splace="+$('.plsname').val()+"";
		document.cookie = "tplace="+$('.plsreg').val()+"";
		document.cookie = "tplace="+$('.plstowns').val()+"";
		document.cookie = "tplace="+$('.plstowns').val()+"";
		document.cookie = "email= "+$('.neo').val()+"";
		document.cookie = "about= "+$('.about-me textarea').val()+"";
		document.cookie = "rnd ="+rnd+"";

	});
	
	$('.first-name h1').text(cookname);
	$('.birth input').val(birth);
	$('.neo').val(cookemail);
	$('.plsreg').val(rplace);
	$('.plstowns').val(tplace);
	$('.about-me textarea').val(about);
});
