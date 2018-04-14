$(function(){
	var hr = document.cookie.substring(document.cookie.indexOf('href'),document.cookie.indexOf(';', document.cookie.indexOf('href')));
	if(document.cookie){
		if(hr=="href=list.html"){
			$.get( "list.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=list.html";
			});
		}
	else if(hr=="href=filter.html"){
		$.get( "filter.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=filter.html";
			});
	}
	else if(hr=="href=about.html"){
		$.get( "about.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=about.html";
			});
	}
	}else{
		$.get( "list.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=list.html";
 	
			});
	}
	$('.header li').click(function(){
		var choise = $(this).text();
		var rnd = Math.random();
		if(choise == "Список дел"){
			$.get( "list.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=list.html";
 	 		document.cookie = "rnd ="+rnd+"";
			});
		}
		else if(choise == "Фильтрация"){
			
			$.get( "filter.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=filter.html";
 	 		document.cookie = "rnd ="+rnd+"";
			});
		
		}else if(choise == "О себе")
		{
			$.get( "about.html", function( data ) {
 	 		$( ".content" ).html( data );
 	 		document.cookie = "href=about.html";
 	 		document.cookie = "rnd ="+rnd+"";
			});
		}
		
		
	});
});