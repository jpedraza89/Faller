"use strict";
var Preload = function(game) {};

Preload.prototype = {

	preload: function() {


		//this adds ingame images
		this.game.load.image('tile', 'assets/tile.png');
		this.game.load.image('player', 'assets/player.png');
		this.game.load.image('background', 'assets/background.png');
		this.game.load.image('ground', 'assets/ground.png');
		this.game.load.image('background_shop', 'assets/background_shop.png');
		this.game.load.image('closet', 'assets/closet.png');
		this.game.load.image('Shop_Doll1', 'assets/Shop_Doll1.png');
		this.game.load.image('key', 'assets/key.png');
		this.game.load.image('spikes', 'assets/spikes.png');
		this.game.load.image('scores','assets/my_score.png');
		this.game.load.audio('music', 'assets/music.mp3');



		// This adds Buttons
		this.game.load.image('shop_btn', 'assets/shop_btn.png');
		this.game.load.image('play_btn', 'assets/play_btn.png');
		this.game.load.image('facebook_logo', 'assets/facebook_logo.png');
		this.game.load.image('scores_btn', 'assets/scores_btn.png');
		this.game.load.image('back_btn', 'assets/back_btn.png');

		//this adds misc elements
		this.game.load.image('logo', 'assets/logo.png');

		var keys;


	},

	create: function() {
		this.game.state.start("GameTitle");
	}
};
