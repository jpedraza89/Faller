"use strict";
var GameOver = function(game) {};

GameOver.prototype = {

	create: function() {


		var back_btn = this.game.add.button(300, 400, 'back_btn', this.restartGame, this);

	},

	restartGame: function() {
		this.game.state.start("GameTitle");
	}
};
