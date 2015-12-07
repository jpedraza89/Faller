"use strict";
var Preload = function(game) {};

Preload.prototype = {

	preload: function() {


		//this adds ingame images
		this.game.load.image('tile', 'assets/tile.png');
		this.game.load.image('player', 'assets/player.png');
		this.game.load.image('background', 'assets/background.png');
		this.game.load.image('backgroundregistration', 'assets/backgroundregistration.png');
		this.game.load.image('ground', 'assets/ground.png');
		this.game.load.image('background_shop', 'assets/background_shop.png');
		this.game.load.image('closet', 'assets/closet.png');
		this.game.load.image('Shop_Doll1', 'assets/Shop_Doll1.png');
		this.game.load.image('key', 'assets/key.png');
		this.game.load.image('key2', 'assets/key2.png');
		this.game.load.image('spikes', 'assets/spikes.png');
		this.game.load.image('scores','assets/my_score.png');
		this.game.load.image('gameover','assets/gameover.png');
		this.game.load.image('scoreback','assets/score_back.png');
		this.game.load.image('logoleft','assets/logo_left.png');
		this.game.load.image('gameinstruc','assets/gameinstruc.png');
		this.game.load.image('boutique_txt','assets/boutique_txt.png');
		this.game.load.image('textbox','assets/textbox.png');

		this.game.load.image('checked','assets/checked_checkbox.png');
		this.game.load.image('unchecked','assets/unchecked_checkbox.png');




		this.game.load.audio('music', 'assets/music.mp3');
		//this adds shop images

		this.game.load.image('dollUnderware', 'assets/maniqui/maniqui.png');
		//dress
		this.game.load.image('buttonDress', 'assets/shopbuttons/dressbutton.png');
		this.game.load.image('dress1', 'assets/vestido/vestido1.png');
		this.game.load.image('dress2', 'assets/vestido/vestido2.png');
		this.game.load.image('dress3', 'assets/vestido/vestido3.png');
		this.game.load.image('dress4', 'assets/vestido/vestido4.png');
		this.game.load.image('maniquiDress1', 'assets/maniquivestido/maniquivestido1.png');
		this.game.load.image('maniquiDress2', 'assets/maniquivestido/maniquivestido2.png');
		this.game.load.image('maniquiDress3', 'assets/maniquivestido/maniquivestido3.png');
		this.game.load.image('maniquiDress4', 'assets/maniquivestido/maniquivestido4.png');
		//shopSkirt
		this.game.load.image('buttonSkirt', 'assets/shopbuttons/skirtbutton.png');
		this.game.load.image('skirt1', 'assets/falda/falda1.png');
		this.game.load.image('skirt2', 'assets/falda/falda2.png');
		this.game.load.image('skirt3', 'assets/falda/falda3.png');
		this.game.load.image('skirt4', 'assets/falda/falda4.png');
		this.game.load.image('maniquiSkirt1', 'assets/maniquifalda/maniquifalda1.png');
		this.game.load.image('maniquiSkirt2', 'assets/maniquifalda/maniquifalda2.png');
		this.game.load.image('maniquiSkirt3', 'assets/maniquifalda/maniquifalda3.png');
		this.game.load.image('maniquiSkirt4', 'assets/maniquifalda/maniquifalda4.png');
		//shopBag
		this.game.load.image('buttonBag', 'assets/shopbuttons/bagbutton.png');
		this.game.load.image('bag1', 'assets/bolsa/bolsa4.png');
		this.game.load.image('bag2', 'assets/bolsa/bolsa3.png');
		this.game.load.image('bag3', 'assets/bolsa/bolsa2.png');
		this.game.load.image('bag4', 'assets/bolsa/bolsa1.png');
		this.game.load.image('maniquiBag1', 'assets/maniquiBolsas/maniquiBolsa1.png');
		this.game.load.image('maniquiBag2', 'assets/maniquiBolsas/maniquiBolsa2.png');
		this.game.load.image('maniquiBag3', 'assets/maniquiBolsas/maniquiBolsa3.png');
		this.game.load.image('maniquiBag4', 'assets/maniquiBolsas/maniquiBolsa4.png');
		//shopHair
		this.game.load.image('buttonHair', 'assets/shopbuttons/hairbutton.png');
		this.game.load.image('hair1', 'assets/cabello/1/cabello1back.png');
		this.game.load.image('hair2', 'assets/cabello/1/cabello1front.png');
		this.game.load.image('hair3', 'assets/cabello/2/cabello2back.png');
		this.game.load.image('hair4', 'assets/cabello/2/cabello2front.png');
		this.game.load.image('hair6', 'assets/cabello/3/cabello3.png');
		this.game.load.image('hair7', 'assets/cabello/4/cabello4back.png');
		this.game.load.image('hair8', 'assets/cabello/4/cabello4front.png');
		this.game.load.image('maniquiHair1', 'assets/maniquicabello/maniquipelo1.png');
		this.game.load.image('maniquiHair2', 'assets/maniquicabello/maniquipelo2.png');
		this.game.load.image('maniquiHair3', 'assets/maniquicabello/maniquipelo3.png');
		this.game.load.image('maniquiHair4', 'assets/maniquicabello/maniquipelo4.png');
		//hood
		this.game.load.image('buttonHood', 'assets/shopbuttons/hoodbutton.png');
		this.game.load.image('hood1', 'assets/capa/capa1/capa1back.png');
		this.game.load.image('hood2', 'assets/capa/capa1/capa1front.png');
		this.game.load.image('hood3', 'assets/capa/capa2/capa2back.png');
		this.game.load.image('hood4', 'assets/capa/capa2/capa2front.png');
		this.game.load.image('hood5', 'assets/capa/capa3/capa3.png');
		this.game.load.image('hood7', 'assets/capa/capa4/capa4.png');
		this.game.load.image('maniquiHood1', 'assets/maniquicapa/maniquicapa1.png');
		this.game.load.image('maniquiHood2', 'assets/maniquicapa/maniquicapa2.png');
		this.game.load.image('maniquiHood3', 'assets/maniquicapa/maniquicapa3.png');
		this.game.load.image('maniquiHood4', 'assets/maniquicapa/maniquicapa4.png');

		// This adds Buttons
		this.game.load.image('shop_btn', 'assets/shop_btn.png');
		this.game.load.image('play_btn', 'assets/play_btn.png');
		this.game.load.image('scores_btn', 'assets/scores_btn.png');
		this.game.load.image('back_btn', 'assets/back_btn.png');
		this.game.load.image('retry_btn', 'assets/retry_btn.png');
		this.game.load.image('menu_btn', 'assets/menu_btn.png');
		this.game.load.image('registration_btn','assets/registration_btn.png');
		this.game.load.image('send_btn', 'assets/send_btn.png');




		// This adds shop items
		this.game.load.image('play_btn', 'assets/play_btn.png');



		//this adds misc elements
		this.game.load.image('logo', 'assets/logo.png');

	},

	create: function() {
		this.game.state.start("GameTitle");
	}
};
