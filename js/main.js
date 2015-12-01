"use strict";
var Main = function(game){


};

var background;
var spikes;
var scores;
var key;

Main.prototype = {


	create: function() {

		var me = this;

		background = game.add.tileSprite(0, 0, 800, 600, 'background');

		spikes = this.game.add.sprite(0, 0, 'spikes');
		spikes.scale.setTo(2,1);

		scores = this.game.add.sprite(342, 25, 'scores');
		scores.scale.setTo(0.85,0.85);


		//The spacing for the initial platforms
		me.spacing = 600;

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

		//Create the score label
		me.createScore();

		//Add a platform every #  = 1000 seconds
		me.timer = game.time.events.loop(1000, me.addPlatform, me);

		me.timer = game.time.events.loop(15000, me.generateKey,me);

	    //Enable cursor keys so we can create some controls
	    me.cursors = me.game.input.keyboard.createCursorKeys();

	},

	update: function() {
		var me = this;

		//Make the sprite collide with the ground layer
		me.game.physics.arcade.collide(me.player, me.platforms);

		me.player.body.velocity.x = 0;

	    //Make the player go left
	    if(me.cursors.left.isDown){
	    	me.player.body.velocity.x += -400;
	    }
	    //Make the player go right
	    if(me.cursors.right.isDown){
	    	me.player.body.velocity.x += 400;
	    }

	    //Check if the player is touching the top
	    if(me.player.body.position.y <= 5){
	    	me.gameOver();

			this.game.state.start("GameOver");
	    }

	        //  Scroll the background
    	background.tilePosition.y += 2;

	},

	    generateKey: function(){

        // Chose a random place on the grid.
        // X is between 0 and 585 (39*15)
        // Y is between 0 and 435 (29*15)


		var me = this;

        var randomX = Math.floor(Math.random() * 600 ),
            randomY =550;

        // Add a new key.
        key = game.add.sprite(randomX, randomY, 'key');
        key.scale.setTo(0.2,0.2);

        me.game.physics.arcade.enable(me.key);
		//Make the player fall by applying gravity
		//key.body.gravity.y = -1300;

    },

	gameOver: function(){
		this.game.state.start('Main');
	},

	addTile: function(x, y){

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

	addPlatform: function(y){

		var me = this;

		//If no y position is supplied, render it just outside of the screen
		if(typeof(y) == "undefined"){
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
	    for (var i = 0; i < tilesNeeded; i++){
	        if (i != hole && i != hole + 1){
	        	this.addTile(i * me.tileWidth, y);
	        }
	    }

	},

	createPlayer: function(){

		var me = this;

		//Add the player to the game by creating a new sprite
		me.player = me.game.add.sprite(me.game.world.centerX, 400, 'player');

		//me.player = me.game.add.sprite(32, game.world.height - 150, 'player');
		//Enable physics on the player
		me.game.physics.arcade.enable(me.player);
		//Make the player fall by applying gravity
		me.player.body.gravity.y = 1300;
		//Make the player collide with the game boundaries
		me.player.body.collideWorldBounds = true;

		me.player.scale.setTo(0.4,0.4);

	},

	createScore: function(){

		var me = this;

		var scoreFont = "100px Arial";

		me.scoreLabel = me.game.add.text(400, 100, "0", {font: scoreFont, fill: "#fff"});
		me.scoreLabel.anchor.setTo(0.5, 0.5);
		me.scoreLabel.scale.setTo(0.45,0.45);

		me.scoreLabel.align = 'center';

	},

	incrementScore: function(){

		var me = this;

		me.score += 1;
		me.scoreLabel.text = me.score;

	}
};
