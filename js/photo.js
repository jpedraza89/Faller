"use strict";
var Photo = function(game) {};

Photo.prototype = {

	create: function() {

		var background_photo,
			frame,
			me = this;

		background_photo = game.add.sprite(0, 0, 'background_photo');

		background_photo.scale.setTo(.78, .78);

		frame = game.add.sprite(250, 100, 'frame');
		frame.scale.setTo(.7, .7);

		Phaser.Canvas.setBackgroundColor(document.querySelector("canvas"), "rgb(100,25,30)")

		me.createPlayer();

		me.createStickers();

		var polaroid_back_1 = this.game.add.button(270, 470, 'polaroid_back_1', this.back_1, this);
		polaroid_back_1.scale.setTo(.15, .15);

		var polaroid_back_2 = this.game.add.button(350, 470, 'polaroid_back_2', this.back_2, this);
		polaroid_back_2.scale.setTo(.15, .15);

		var polaroid_back_3 = this.game.add.button(420, 470, 'polaroid_back_3', this.back_3, this);
		polaroid_back_3.scale.setTo(.15, .15);

		var back_btn = this.game.add.button(100, 500, 'back_btn', this.restartGame, this);
		back_btn.scale.setTo(.4, .4);

		var create_btn = this.game.add.button(560, 400, 'create_btn', this.saveCanvasClick, this);
		create_btn.scale.setTo(.4, .4);

	},


	back_1: function() {
		var me = this;

		var back_1 = me.game.add.sprite(260, 110, 'back_1');
		back_1.scale.setTo(.7, .8);

		me.player.bringToTop();

		me.sticker1.bringToTop();
		me.sticker2.bringToTop();
		me.sticker3.bringToTop();
		me.sticker4.bringToTop();
		me.sticker5.bringToTop();
		me.sticker6.bringToTop();


	},

	back_2: function() {
		var me = this;

		var back_2 = me.game.add.sprite(260, 110, 'back_2');
		back_2.scale.setTo(.7, .8);

		me.player.bringToTop();

		me.sticker1.bringToTop();
		me.sticker2.bringToTop();
		me.sticker3.bringToTop();
		me.sticker4.bringToTop();
		me.sticker5.bringToTop();
		me.sticker6.bringToTop();
	},

	back_3: function() {
		var me = this;

		var back_3 = me.game.add.sprite(260, 110, 'back_3');
		back_3.scale.setTo(.7, .8);

		me.player.bringToTop();
		me.sticker1.bringToTop();
		me.sticker2.bringToTop();
		me.sticker3.bringToTop();
		me.sticker4.bringToTop();
		me.sticker5.bringToTop();
		me.sticker6.bringToTop();
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

		me.player.inputEnabled = true;
		me.player.input.enableDrag(false, true);

		me.player.scale.setTo(0.5, 0.5);
	},

	createStickers: function() {

		var me = this;


		//sticker1
		me.sticker1 = me.game.add.sprite(100, 170, 'sticker1');
		me.sticker1.scale.setTo(.3, .3);
		me.sticker1.inputEnabled = true;
		me.sticker1.input.enableDrag(false, true);
		me.sticker1.inputEnabled = true;
		me.sticker1.input.enableDrag(false, true);

		//sticker2
		me.sticker2 = me.game.add.sprite(100, 220, 'sticker2');
		me.sticker2.scale.setTo(.3, .3);
		me.sticker2.inputEnabled = true;
		me.sticker2.input.enableDrag(false, true);
		me.sticker2.inputEnabled = true;
		me.sticker2.input.enableDrag(false, true);

		//sticker3
		me.sticker3 = me.game.add.sprite(100, 270, 'sticker3');
		me.sticker3.scale.setTo(.3, .3);
		me.sticker3.inputEnabled = true;
		me.sticker3.input.enableDrag(false, true);
		me.sticker3.inputEnabled = true;
		me.sticker3.input.enableDrag(false, true);

		//sticker4
		me.sticker4 = me.game.add.sprite(620, 170, 'sticker4');
		me.sticker4.scale.setTo(.3, .3);
		me.sticker4.inputEnabled = true;
		me.sticker4.input.enableDrag(false, true);
		me.sticker4.inputEnabled = true;
		me.sticker4.input.enableDrag(false, true);
		//sticker5
		me.sticker5 = me.game.add.sprite(620, 220, 'sticker5');
		me.sticker5.scale.setTo(.3, .3);
		me.sticker5.inputEnabled = true;
		me.sticker5.input.enableDrag(false, true);
		me.sticker5.inputEnabled = true;
		me.sticker5.input.enableDrag(false, true);
		//sticker4
		me.sticker6 = me.game.add.sprite(620, 270, 'sticker6');
		me.sticker6.scale.setTo(.3, .3);
		me.sticker6.inputEnabled = true;
		me.sticker6.input.enableDrag(false, true);
		me.sticker6.inputEnabled = true;
		me.sticker6.input.enableDrag(false, true);
	},

	saveCanvas: function (link, filename) {
		console.log(document.querySelector("canvas"));
        link.href = document.querySelector("canvas").toDataURL();
        link.download = filename;
				console.log(link.href);
	},
	saveCanvasClick: function(){

		var name = "name."+"png";

		this.saveCanvas(this, name);
	},



	restartGame: function() {
		this.game.state.start("GameTitle");
	}


};
