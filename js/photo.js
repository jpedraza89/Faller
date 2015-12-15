"use strict";
var Photo = function(game) {};

Photo.prototype = {

		create: function() {

			var background,
				frame,
				me = this;

			background = game.add.tileSprite(0, 0, 800, 600, 'background');
			frame = game.add.sprite( 250, 100, 'frame');
			frame.scale.setTo(.7, .7);


			me.createPlayer();



			var back_1 = this.game.add.button(125, 470, 'back_1', this.back_1, this);
			back_1.scale.setTo(.15, .15);


			var back_2 = this.game.add.button(200, 470, 'back_2', this.back_2, this);
			back_2.scale.setTo(.15, .15);


			var back_3 = this.game.add.button(270, 470, 'back_3', this.back_3, this);
			back_3.scale.setTo(.15, .15);

			var back_btn = this.game.add.button(550, 455, 'back_btn', this.restartGame, this);
			back_btn.scale.setTo(.8, .8);

			var back_btn = this.game.add.button(550, 100, 'back_btn', this.restartGame, this);
			back_btn.scale.setTo(.8, .8);


		},


		back_1: function() {
				var me = this;

			var back_1 = game.add.sprite(260, 110, 'back_1');
			back_1.scale.setTo(.7, .8);

			me.createPlayer();


	},

	back_2: function() {
				var me = this;

		var back_2 = game.add.sprite(260, 110, 'back_2');
			back_2.scale.setTo(.7, .8);

			me.createPlayer();

	},

	back_3: function() {
				var me = this;

		var back_3 = game.add.sprite(260, 110, 'back_3');
			back_3.scale.setTo(.7, .8);

			me.createPlayer();


	},


		createPlayer: function() {

		var me = this,
			nameWeared;

		nameWeared = localStorage.getItem('saveNameWeared');
		nameWeared = JSON.parse(nameWeared);

		//Add the player to the game by creating a new sprite
		me.player = me.game.add.sprite(355, 200, 'dollUnderware');
		me.player.addChild(game.make.sprite(-47, 0, nameWeared.hairBack));
		me.player.addChild(game.make.sprite(-47, 10, nameWeared.hoodBack));
		me.player.addChild(game.make.sprite(0, 0, "dollUnderware"));
		me.player.addChild(game.make.sprite(0, 90, nameWeared.skirt));
		me.player.addChild(game.make.sprite(-45, 0, nameWeared.dress));
		me.player.addChild(game.make.sprite(-40, 40, nameWeared.hoodFront));
		me.player.addChild(game.make.sprite(-47, -40, nameWeared.hairFront));
		me.player.addChild(game.make.sprite(80, 60, nameWeared.bag));

		me.player.scale.setTo(0.5, 0.5);
	},

	restartGame: function() {
		this.game.state.start("GameTitle");
	}


};
