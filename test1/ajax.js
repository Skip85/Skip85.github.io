
$(function(){
	
	if(document.cookie){
		if(document.cookie=="href=summary.html"){
			$.get( "summary.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=summary.html";
			});
		}
	else if(document.cookie=="href=map.html"){
		$.get( "map.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=map.html";
			});
	}
	else if(document.cookie=="href=time.html"){
		$.get( "time.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=time.html";
			});
	}
	}else{
		$.get( "summary.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=summary.html";
 	
			});
	}
	var 
		hour = 0,
		minute = 0,
		second = 0;
	setInterval(function(){
		if(second==60){
			second = 0;
			minute++;
		}
		
		if(minute==60){
			minute=0;
			hour++;
		}
		$('.hour p').text(hour);
		$('.minute p').text(minute);
		$('.second p').text(second);
		second++;
	}, 1000);
	$('.header li').click(function(){
	
		$('.header li').removeClass();
		$(this).addClass('active');
		var choise = $(this).text();
		
		if(choise == "Резюме"){
			$.get( "summary.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=summary.html";
 
			});
		}
		else if(choise == "Карта"){
			
			$.get( "map.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=map.html";
 	
			});
		
		}else if(choise == "Таймер")
		{
			$.get( "time.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=time.html";
 	 		
			});
		}
		
		
		
	});
		
});