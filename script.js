
document.querySelector('h1').addEventListener('click', function() {
	alert('Üdvözöljük az egyszerű weboldalon!');
});


setInterval(function() {
	document.querySelector('footer p').innerHTML = 'Készítette: Név | ' + new Date().toLocaleTimeString();
}, 1000);
