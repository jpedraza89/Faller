"use strict";
var Scores = function(game) {};

Scores.prototype = {

	create: function() {


		var background;

		background = game.add.tileSprite(0, 0, 800, 600, 'background');


		var back_btn = this.game.add.button(290, 450, 'back_btn', this.restartGame, this);

	},

	restartGame: function() {
		this.game.state.start("GameTitle");
	}


};
