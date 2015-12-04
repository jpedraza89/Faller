"use strict";
var Registration = function(game) {};

Registration.prototype = {

	create: function() {


		var backgroundregistration;

		backgroundregistration = game.add.tileSprite(0, 0, 800, 600, 'backgroundregistration');
		backgroundregistration.scale.setTo(1.02, 1);

		var keys = this.game.add.sprite(320, 100, 'scores');
		keys.scale.setTo(1.2, 1.2);

		var textbox = this.game.add.sprite(260, 300, 'textbox');
		textbox.scale.setTo(.3, .2);
		var textbox = this.game.add.sprite(260, 350, 'textbox');
		textbox.scale.setTo(.3, .2);
		var checkbox = this.game.add.sprite(260, 390, 'unchecked');
		textbox.scale.setTo(.3, .2);

		var name = game.add.text(260, 274, 'Nombre:', {
			fill: "#fff"
		});
		name.scale.setTo(.7, .7);
		var email = game.add.text(260, 324, 'E-Mail:', {
		fill: "#fff"
		});
		email.scale.setTo(.7, .7);
		var terms = game.add.text(300, 395, 'Acepto Terminos y Condiciones', {
		fill: "#fff"
		});
		terms.scale.setTo(.5, .5);
		var scoretext = game.add.text(310, 70, 'PUNTUACIÓN', {
		fill: "#fff"
		});
		terms.scale.setTo(.5, .5);


		var registration_btn = this.game.add.button(120, 450, 'registration_btn', this.restartGame, this);
		registration_btn.scale.setTo(0.7, 0.7);


		var back_btn = this.game.add.button(450, 460, 'back_btn', this.restartGame, this);
		back_btn.scale.setTo(0.7, 0.7);

	},

	restartGame: function() {
		this.game.state.start("GameTitle");
	}


};
