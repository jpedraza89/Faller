"use strict";
var Bases = function(game) {};

Bases.prototype = {

	create: function() {


		var background;

		background = game.add.tileSprite(0, 0, 800, 600, 'background');


		var back_btn = this.game.add.button(400, 450, 'back_btn', this.restartGame, this);
		back_btn.scale.setTo(0.7, 0.7);

	},

	restartGame: function() {
		this.game.state.start("GameTitle");
	}


};
