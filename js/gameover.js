"use strict";
var GameOver = function(game) {};

GameOver.prototype = {

	create: function() {

		var background;
		background = game.add.tileSprite(0, 0, 800, 600, 'background');
		background.scale.setTo(1, 1.02);

		var scoreback;

		scoreback = this.game.add.sprite(580, 0, 'scoreback');
		scoreback.scale.setTo(1, 1);


		var gameover;
		gameover = this.game.add.sprite(200, 100, 'gameover');
		gameover.scale.setTo(0.8, 0.8);

		keyscoreText = game.add.text(690, 30, 'Llaves: ' + keyscore, {
			fill: "#fff"
		});
		keyscoreText.scale.setTo(0.7, 0.7);



		var retry_btn = this.game.add.button(270, 460, 'retry_btn', this.restartGame, this);


		var keyEmitter2 = this.add.emitter(400, 0, 600);
		keyEmitter2.makeParticles("key2");
		keyEmitter2.maxParticleScale = 0.6;
		keyEmitter2.minParticleScale = 0.2;
		keyEmitter2.setYSpeed(-30, -40);
		keyEmitter2.setXSpeed(-3, 3);
		keyEmitter2.gravity = 60;
		keyEmitter2.width = 600;
		keyEmitter2.minRotation = 0;
		keyEmitter2.maxRotation = 40;
		keyEmitter2.flow(15000, 1000);


	},

	restartGame: function() {
		this.game.state.start("GameTitle");
	}
};
