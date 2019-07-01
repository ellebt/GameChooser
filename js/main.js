const colours = [ '#57C095', '#2151AE', '#D4A609', '#E5432F' ];

var games = [];

$(document).ready(function() {
	$('button.generate').on('click', function() {
		//console.log('Decide Button Pressed');

		var randomGame = games[Math.floor(Math.random() * games.length)];
		var randomColour = colours[Math.floor(Math.random() * colours.length)];

		var chosenGame = randomGame;

		$('span').text(chosenGame);
		$('span').css('color', randomColour);
		$('button.generate').text('Try again?');
	});
  
  
  $('button.add').on('click', function() {
    //console.log('Add Button Pressed');
    
    var list = document.getElementById('gamesList');
    list.innerHTML = '';
    
    var gamesInput = document.getElementById('gamesInput').value;
    games.push(gamesInput);
    
    var item = document.createElement("li");
    for (var i = 0; i < games.length; i++) 
      {
        var listItem = document.createTextNode(games[i]);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(games[i]));
        list.append(li);
      }
  });
  
  
  $('button.refresh').on('click', function() {
    //console.log('Refresh Button Pressed');
    var list = document.getElementById('gamesList');
 list.innerHTML = '';
    games = [];
   });
});

// TO DO 
// Work out why jquery sometimes doesn't work
