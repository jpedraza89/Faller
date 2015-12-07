"use strict";
var GameTitle = function(game) {
};
GameTitle.prototype = {

	create: function() {

		var background;
		background = game.add.tileSprite(0, 0, 800, 600, 'background');
		background.scale.setTo(1, 1.02);

		var scoreback;

		scoreback = this.game.add.sprite(580, 0, 'scoreback');
		scoreback.scale.setTo(1, 1);

		if(localStorage.getItem('numberOfKeys') === null) {
			localStorage.setItem('numberOfKeys', 0);
			keyscore = 0;
		} else {
			keyscore = parseInt(localStorage.getItem('numberOfKeys'));
		}

		if (localStorage.getItem('saveNameWeared') === null) {
			localStorage.setItem('saveNameWeared', JSON.stringify({}));
		}

		keyscoreText = game.add.text(690, 30, 'Llaves: ' + keyscore, {
			fill: "#fff"
		});
		keyscoreText.scale.setTo(0.7, 0.7);

		var logo = this.game.add.sprite(180, 20, 'logo');
		logo.scale.setTo(1, 1);
		logo.angle = (2 + Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1);
		var logoTween = this.add.tween(logo);
		logoTween.to({
			angle: -logo.angle
		}, 5000 + Math.random() * 5000, Phaser.Easing.Linear.None, true, 0, 1000, true);



		var playButton = this.game.add.button(290, 450, 'play_btn', this.startGame, this);


		var shopButton = this.game.add.button(100, 470, 'shop_btn', this.startShop, this);



		var scoresButton = this.game.add.button(550, 460, 'scores_btn', this.startScores, this);


		var keyEmitter = this.add.emitter(400, 0, 600);
		keyEmitter.makeParticles("key");
		keyEmitter.maxParticleScale = 0.6;
		keyEmitter.minParticleScale = 0.2;
		keyEmitter.setYSpeed(-30, -40);
		keyEmitter.setXSpeed(-3, 3);
		keyEmitter.gravity = 60;
		keyEmitter.width = 600;
		keyEmitter.minRotation = 0;
		keyEmitter.maxRotation = 40;
		keyEmitter.flow(15000, 1000);

	},

	startGame: function() {
		this.game.state.start("Main");
	},

	startShop: function() {
		this.game.state.start("Shop");
	},
	startScores: function() {
		this.game.state.start("Scores");
	}
};
