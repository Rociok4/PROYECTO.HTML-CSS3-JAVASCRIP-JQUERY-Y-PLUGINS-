$(document).ready(function(){


	//SLIDER
	if(window.location.href.indexOf("index")> -1){
		$('.galeria').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });
	}

	 //POSTS
	 if(window.location.href.indexOf("index")> -1){

		 var posts = [
			 {
			 	title: "Prueba de titulo 1",
			 	date: 'Publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
			 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci nunc, pulvinar vel orci sit amet, ullamcorper condimentum tellus. Suspendisse aliquam, diam et pulvinar tempus, lectus sapien viverra metus, vitae porttitor eros enim sit amet dui. Phasellus eleifend et turpis vel egestas. Quisque ut cursus tellus, a eleifend dui. Sed rutrum massa eget arcu ullamcorper cursus. Vivamus feugiat magna ut tristique congue. Donec tempus vestibulum aliquet. Nam a erat sit amet est feugiat iaculis.'
			 },
			 {
			 	title: "Prueba de titulo 2",
			 	date: 'Publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
			 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci nunc, pulvinar vel orci sit amet, ullamcorper condimentum tellus. Suspendisse aliquam, diam et pulvinar tempus, lectus sapien viverra metus, vitae porttitor eros enim sit amet dui. Phasellus eleifend et turpis vel egestas. Quisque ut cursus tellus, a eleifend dui. Sed rutrum massa eget arcu ullamcorper cursus. Vivamus feugiat magna ut tristique congue. Donec tempus vestibulum aliquet. Nam a erat sit amet est feugiat iaculis.'
			 },
			 {
			 	title: "Prueba de titulo 3",
			 	date: 'Publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
			 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci nunc, pulvinar vel orci sit amet, ullamcorper condimentum tellus. Suspendisse aliquam, diam et pulvinar tempus, lectus sapien viverra metus, vitae porttitor eros enim sit amet dui. Phasellus eleifend et turpis vel egestas. Quisque ut cursus tellus, a eleifend dui. Sed rutrum massa eget arcu ullamcorper cursus. Vivamus feugiat magna ut tristique congue. Donec tempus vestibulum aliquet. Nam a erat sit amet est feugiat iaculis.'
			 },
			 {
			 	title: "Prueba de titulo 4",
			 	date: 'Publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
			 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci nunc, pulvinar vel orci sit amet, ullamcorper condimentum tellus. Suspendisse aliquam, diam et pulvinar tempus, lectus sapien viverra metus, vitae porttitor eros enim sit amet dui. Phasellus eleifend et turpis vel egestas. Quisque ut cursus tellus, a eleifend dui. Sed rutrum massa eget arcu ullamcorper cursus. Vivamus feugiat magna ut tristique congue. Donec tempus vestibulum aliquet. Nam a erat sit amet est feugiat iaculis.'
			 },
			 {
			 	title: "Prueba de titulo 5",
			 	date: 'Publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
			 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci nunc, pulvinar vel orci sit amet, ullamcorper condimentum tellus. Suspendisse aliquam, diam et pulvinar tempus, lectus sapien viverra metus, vitae porttitor eros enim sit amet dui. Phasellus eleifend et turpis vel egestas. Quisque ut cursus tellus, a eleifend dui. Sed rutrum massa eget arcu ullamcorper cursus. Vivamus feugiat magna ut tristique congue. Donec tempus vestibulum aliquet. Nam a erat sit amet est feugiat iaculis.'
			 },
			 {
			 	title: "Prueba de titulo 6",
			 	date: 'Publicado el dia' + moment().date() + "de" + moment().format("MMMM") + "del" + moment().format("YYYY"),
			 	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci nunc, pulvinar vel orci sit amet, ullamcorper condimentum tellus. Suspendisse aliquam, diam et pulvinar tempus, lectus sapien viverra metus, vitae porttitor eros enim sit amet dui. Phasellus eleifend et turpis vel egestas. Quisque ut cursus tellus, a eleifend dui. Sed rutrum massa eget arcu ullamcorper cursus. Vivamus feugiat magna ut tristique congue. Donec tempus vestibulum aliquet. Nam a erat sit amet est feugiat iaculis.'
			 },
			 
		 ];
		 
		posts.forEach((item, index) => {

			var post = `

				<article class="post">

				<h2>${item.title}</h2>

				<span class="date">${item.date}</span>

				<p>
					${item.content}
				</p>

				<a href="#" class="button-more">Leer más</a>
				</article>

			`;

		 	$("#posts").append(post);

		});
	}

	//SELECTOR DE TEMA

	var theme = $("#theme");


	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href","css/blue.css");
	})





	//SCROLL

	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//LOGIN FALSO

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});


	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong>Bienvenido, "+form_name+ "</strong>");
		about_parrafo.append("<a href = '#' id='logout'>Cerrar Sesion</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		})
	}


	//ACORDEON
	if(window.location.href.indexOf("about")> -1){
		$("#acordeon").accordion();
	}
	
	//RELOJ
	if(window.location.href.indexOf("reloj")> -1){
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
			$('#reloj').html(reloj);
		}, 1000)
		

	}

	//VALIDACION

	if(window.location.href.indexOf("contact")> -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
			lang: 'es',
			errorMessagPosition: 'top',
			scrollToTopOnError: true
		});

	}


});

