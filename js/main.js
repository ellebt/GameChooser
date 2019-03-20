var games = [
	'Sims 4',
	'Skyrim',
	'Fallout 4',
	'Spyro Reignited',
	'Minecraft',
	'Shadow of Mordor',
	'Bloodborne',
	'Okami',
	"No Man's Sky"
];

var colours = [ '#57C095', '#2151AE', '#F8D764', '#E5432F' ];

$(document).ready(function() {
	$('button').on('click', function() {
		console.log('Button Pressed');

		var randomGame = games[Math.floor(Math.random() * games.length)];
		var randomColour = colours[Math.floor(Math.random() * colours.length)];

		var chosenGame = randomGame;

		$('span').text(chosenGame);
		$('span').css('color', randomColour);
		$('button').text('Try again?');
	});
});
