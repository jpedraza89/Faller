"use strict";
var Shop = function(game){};

Shop.prototype = {

  	create: function(){




		var background;
		background = game.add.tileSprite(0, 0, 800, 600, 'background_shop');
		background.scale.setTo(1.04,1.035);




		var closet = this.game.add.sprite(80, 50, 'closet');
		closet.scale.setTo(.9,.9);


		var Shop_Doll1 = this.game.add.sprite(550, 200, 'player');
		Shop_Doll1.scale.setTo(1,1);



		var back_btn = this.game.add.button(300,460,'back_btn',this.restartGame,this);
	},

		restartGame: function(){
		this.game.state.start("GameTitle");
	}


}
