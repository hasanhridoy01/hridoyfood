var nav = document.getElementById('navbar');
window.onscroll = function(){

	if ( window.pageYOffset > 100 ) 
	{
       nav.style.background = "#c0eb34";

	}else{
       nav.style.background = "transparent";
	}

}