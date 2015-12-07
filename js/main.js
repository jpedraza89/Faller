"use strict";
var Main = function(game) {


};
var gameinstruc;
var background;
var logoleft;
var spikes;
var scores;

var scoreback;
var keyscore = 0;
var keyscoreText;
var scoreText;

Main.prototype = {


	create: function() {

		var me = this;

		this.game.startTime = new Date();

		background = game.add.tileSprite(0, 0, 800, 600, 'background_game');

		gameinstruc = game.add.sprite(game.world.centerX, game.world.centerY, 'gameinstruc');
		gameinstruc.anchor.setTo(0.5, 0.5);

		me.timer = game.time.events.loop(800, me.fadePicture, me);

		scoreback = this.game.add.sprite(580, 0, 'scoreback');
		scoreback.scale.setTo(1, 1);

		logoleft = this.game.add.sprite(0, 0, 'logoleft');
		scoreback.scale.setTo(1, 1);

		spikes = this.game.add.sprite(0, 0, 'spikes');
		spikes.scale.setTo(2, 1);

		scores = this.game.add.sprite(580, 10, 'scores');
		scores.scale.setTo(0.85, 0.85);

		scoreText = me.game.add.text(680, 80, 'Tiempo',{
		fill: "#fff"});
		scoreText.scale.setTo(0.85, 0.85);


		//Set the initial score
		me.score = 0;

		//Get the dimensions of the tile we are using
		me.tileWidth = me.game.cache.getImage('tile').width;
		me.tileHeight = me.game.cache.getImage('tile').height;

		//Enable the Arcade physics system
		me.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Add a platforms group to hold all of our tiles, and create a bunch of them
		me.platforms = me.game.add.group();
		me.platforms.enableBody = true;
		me.platforms.createMultiple(250, 'tile');

		//Create the inital on screen platforms

		//Add the player to the screen
		me.createPlayer();
		me.createKey();


		//Create the score label
		me.createScore();

		//Add a platform every #  = 1000 seconds


		me.timer = game.time.events.loop(1000, me.addPlatform, me);
		me.timer = game.time.events.loop(9000, me.createKey, me);

		//Enable cursor keys so we can create some controls
		me.cursors = me.game.input.keyboard.createCursorKeys();


		keyscoreText = me.game.add.text(690, 30, 'Llaves: ' + keyscore, {
			fill: "#fff"
		});
		keyscoreText.scale.setTo(0.7, 0.7);



	},

	update: function() {
		var me = this;

		//Make the sprite collide with the ground layer
		me.game.physics.arcade.collide(me.player, me.platforms);
		me.game.physics.arcade.collide(me.player, me.key, me.collecKey, null, this);


		me.player.body.velocity.x = 0;


		//Make the player go left
		if (me.cursors.left.isDown) {
			me.player.body.velocity.x += -400;
		}
		//Make the player go right
		if (me.cursors.right.isDown) {
			me.player.body.velocity.x += 400;
		}

		//Check if the player is touching the top
		if (me.player.body.position.y <= 5) {

			me.gameOver();

			this.game.state.start("Registration");
		}

		//  Scroll the background
		background.tilePosition.y += 2;

	},

	gameOver: function() {
		localStorage.setItem("numberOfKeys", keyscore);
		this.game.endTime = new Date();
		this.game.state.start('Main');
	},

	addTile: function(x, y) {

		var me = this;

		//Get a tile that is not currently on screen
		var tile = me.platforms.getFirstDead();

		//Reset it to the specified coordinates
		tile.reset(x, y);
		tile.body.gravity.y = -90;
		tile.body.immovable = true;

		//When the tile leaves the screen, kill it
		tile.checkWorldBounds = true;
		tile.outOfBoundsKill = true;
	},

	clocktimer: function(y) {

		var me = this;




	},

	addPlatform: function(y) {

		var me = this;

		//If no y position is supplied, render it just outside of the screen
		if (typeof(y) == "undefined") {
			y = 600;
			//Increase the players score
			me.incrementScore();
		}

		//Work out how many tiles we need to fit across the whole screen
		var tilesNeeded = Math.ceil(me.game.world.width / me.tileWidth);

		//Add a hole randomly somewhere
		var hole = Math.floor(Math.random() * (tilesNeeded));

		//Keep creating tiles next to each other until we have an entire row
		//Don't add tiles where the random hole is
		for (var i = 0; i < tilesNeeded; i++) {
			if (i != hole && i != hole + 1) {
				this.addTile(i * me.tileWidth, y);
			}
		}

	},

	createKey: function() {

		var me = this;
		var randomX = Math.floor(Math.random() * 600),
			randomY = 550;

		//Add the key to the game by creating a new sprite
		me.key = me.game.add.sprite(randomX, randomY, 'key');

		//Enable physics on the key
		me.game.physics.arcade.enable(me.key);
		//Make the player fall by applying gravity
		me.key.body.gravity.y = -100;
		//Make the player collide with the game boundaries

		me.key.scale.setTo(0.2, 0.2);

		me.key.checkWorldBounds = true;
		me.key.outOfBoundsKill = true;

	},

	createPlayer: function() {

		var me = this,
			nameWeared;

    nameWeared= localStorage.getItem('saveNameWeared');
    nameWeared=JSON.parse(nameWeared);

		//Add the player to the game by creating a new sprite
		me.player = me.game.add.sprite(me.game.world.centerX, 400, 'dollUnderware');
		me.player.addChild(game.make.sprite(-47, 0, nameWeared.hairBack));
		me.player.addChild(game.make.sprite(-47, 10, nameWeared.hoodBack));
		me.player.addChild(game.make.sprite(0, 0, "dollUnderware"));
		me.player.addChild(game.make.sprite(0, 90, nameWeared.skirt));
		me.player.addChild(game.make.sprite(-45, 0, nameWeared.dress));
		me.player.addChild(game.make.sprite(-40, 40 ,nameWeared.hoodFront));
		me.player.addChild(game.make.sprite(-47, -40, nameWeared.hairFront));
		me.player.addChild(game.make.sprite(80, 60, nameWeared.bag));

		//Enable physics on the player
		me.game.physics.arcade.enable(me.player);
		//Make the player fall by applying gravity
		me.player.body.gravity.y = 1300;
		//Make the player collide with the game boundaries
		me.player.body.collideWorldBounds = true;

		me.player.scale.setTo(0.3, 0.3);
	},

	createScore: function() {

		var me = this;

		var scoreFont = "100px Arial";

		me.scoreLabel = me.game.add.text(640, 90, "0", {
			font: scoreFont,
			fill: "#fff"
		});
		me.scoreLabel.anchor.setTo(0.5, 0.5);
		me.scoreLabel.scale.setTo(0.45, 0.45);

		me.scoreLabel.align = 'center';

	},


	collecKey: function() {

		var me = this;

		me.key.kill();

		keyscore += 1;
		keyscoreText.text = 'Llaves: ' + keyscore;
		keyscoreText.scale.setTo(0.7, 0.7);

	},

	incrementScore: function() {

		var me = this;

		me.score += 1;
		me.scoreLabel.text = me.score;
		scoreText = me.scoreLabel.text;

	},

	fadePicture: function() {

	var me = this;

		me.game.add.tween(gameinstruc).to( { alpha: 0 }, 5000, Phaser.Easing.Linear.None, true);

	}
};
