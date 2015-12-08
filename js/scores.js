"use strict";
var Scores = function(game) {};

Scores.prototype = {

	create: function() {

		var highScoreTable=[],
			background,
			that = this;

		background = game.add.tileSprite(0, 0, 800, 600, 'background');


		var back_btn = this.game.add.button(290, 450, 'back_btn', this.restartGame, this);

		var users = Parse.Object.extend("users");
		var query = new Parse.Query(users);
		query.descending("time");
		query.limit(10);

		query.find({
			success: function(results) {
				//alert("Successfully retrieved " + results.length + " scores.");
				// Do something with the returned Parse.Object values
				for (var i = 0; i < results.length; i++) {
					var object = results[i];
					//alert(object.id + ' - ' + object.get('playerName'));
					if (object.get('time')) {
						highScoreTable[i] = that.game.add.text(200, 100 + 30 * i, object.get('name'), {
							fill: "#fff"
						});
						highScoreTable[i] = that.game.add.text(200+300, 100 + 30 * i, object.get('time'), {
							fill: "#fff"
						});
					}
				}
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});



	},

	restartGame: function() {
		this.game.state.start("GameTitle");
	}


};
