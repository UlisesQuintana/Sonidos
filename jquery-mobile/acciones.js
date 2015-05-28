// JavaScript 

$(document).ready(function(e){
	$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
		document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('burro','audios/animales_domesticos/burro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','audio/animales_domesticos/gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gallina','audio/animales_domesticos/gallina.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('perro','audio/animales_domesticos/perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cuervo','audio/animales_domesticos/cuervo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('caballo','audio/animales_domesticos/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cocodrilo','audio/animales_salvajes/cocodrilo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/animales_salvajes/elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('jirafa','audio/animales_salvajes/jirafa.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/animales_salvajes/leon.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oso','audio/animales_salvajes/oso.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('serpiente','audio/animales_salvajes/serpiente.mp3',function(){},function(e){alert('Error '+e);});
		//reproducir las notas
		$('.nota').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		},false); //deviceready
}); //ready