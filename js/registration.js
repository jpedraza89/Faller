"use strict";
var Registration = function(game) {};

Registration.prototype = {

	create: function() {


		var backgroundregistration;

		backgroundregistration = game.add.tileSprite(0, 0, 800, 600, 'backgroundregistration');
		backgroundregistration.scale.setTo(1.02, 1);


		var registration_btn = this.game.add.button(120, 450, 'registration_btn', this.restartGame, this);
		registration_btn.scale.setTo(0.7, 0.7);


		var back_btn = this.game.add.button(450, 450, 'back_btn', this.restartGame, this);
		back_btn.scale.setTo(0.7, 0.7);

	},

	restartGame: function() {
		this.game.state.start("GameTitle");
	}


};
