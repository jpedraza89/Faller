"use strict";

var Shop = function(game){},
  maniquiDresses = [],
  maniquiSkirts = [],
  maniquiBags = [],
  maniquiHairs= [],
  maniquiHoods= [],
  styleGirl = {},
  nameWeared = {},
  dollUnderware,
  positionYCloset = 190,
  positionXCloset = 0,
  numberOfItems = 4,
  position = {
    doll : {
      x: 180,
      y: 190
    },
    bag : {
      x: 235,
      y: 245
    },
    hairBack : {
      x: 160,
      y: 185
    },
    hairFront : {
      x: 180,
      y: 150
    },
    skirt : {
      x: 167,
      y: 284
    },
    dress : {
      x: 162,
      y: 190
    },
    hoodBack : {
      x: 164,
      y: 210
    },
    hoodFront : {
      x: 164,
      y: 230
    }
  };

Shop.prototype = {

  	create: function(){
      var that = this,
        background,
        closet,
        boutique_txt,
        buttonBag,
        buttonHair,
        buttonHood,
        buttonSkirt,
        keys,
        buttonDress;

  		background = game.add.tileSprite(0, 0, 800, 600, 'background_shop');
  		background.scale.setTo(1.04,1.035);

		keys = this.game.add.sprite(40, 40, 'scores');
		keys.scale.setTo(0.85, 0.85);


		keyscoreText = game.add.text(80, 110, 'Llaves:' + keyscore, {
			fill: "#fff"
		});
		keyscoreText.scale.setTo(0.7, 0.7);

  		boutique_txt = this.game.add.sprite(190, 100, 'boutique_txt');
  		boutique_txt.scale.setTo(1,1);

  		closet = this.game.add.sprite(330, 50, 'closet');
  		closet.scale.setTo(1,1);


  		dollUnderware = this.game.add.sprite(position.doll.x, position.doll.y, "dollUnderware");
      dollUnderware.anchor.setTo(0.5, 0);
      buttonBag = this.game.add.button(40, 505, "buttonBag", this.shopBag, this);
      buttonHair = this.game.add.button(110, 505, "buttonHair", this.shopHair, this);
      buttonHood = this.game.add.button(180, 507, "buttonHood", this.shopHood, this);
      buttonSkirt = this.game.add.button(250, 505, "buttonSkirt", this.shopSkirt, this);
      buttonDress = this.game.add.button(320, 507, "buttonDress", this.shopDress, this);

		var menu_btn = this.game.add.button(500, 510, 'menu_btn', this.restartGame, this);
		menu_btn.scale.setTo(0.5, 0.5);

    if (localStorage.getItem('saveNameWeared')) {
      nameWeared= localStorage.getItem('saveNameWeared');
      nameWeared=JSON.parse(nameWeared);
    } else {
      localStorage.setItem('saveNameWeared', nameWeared);
    }

    this.wearedGirl();



	},
  shopDress: function () {
    this.removeElements();
    var positionY = positionYCloset,
      positionX = positionXCloset;

    for (var i = 0; i < numberOfItems; i++) {
      var dress = 'maniquiDress' + (i+1).toString();

      if( i == 2) {
        positionY = positionY + 110;
        positionX = 0;
      }

      maniquiDresses[i] = this.game.add.button(475 + positionX*70, positionY, dress, this.waerDress, this);
      positionX++;

    }
  },
  shopBag: function () {
    this.removeElements();
    var positionY = positionYCloset,
      positionX = positionXCloset;

    for (var i = 0; i < numberOfItems; i++) {
      var bag = 'maniquiBag' + (i+1).toString();

      if( i == 2) {
        positionY = positionY + 110;
        positionX = 0;
      }

      maniquiBags[i] = this.game.add.button(475 + positionX*70, positionY, bag, this.waerBag, this);
      positionX++;

    }
  },
  shopHair: function () {
    this.removeElements();
    var positionY = positionYCloset,
      positionX = positionXCloset;

    for (var i = 0; i < numberOfItems; i++) {
      var hair = 'maniquiHair' + (i+1).toString();

      if( i == 2) {
        positionY = positionY + 110;
        positionX = 0;
      }

      maniquiHairs[i] = this.game.add.button(475 + positionX*70, positionY, hair, this.waerHair, this);
      positionX++;

    }
  },
  shopHood: function () {
    this.removeElements();
    var positionY = positionYCloset,
      positionX = positionXCloset;

    for (var i = 0; i < numberOfItems; i++) {
      var hood = 'maniquiHood' + (i+1).toString();

      if( i == 2) {
        positionY = positionY + 110;
        positionX = 0;
      }

      maniquiHoods[i] = this.game.add.button(475 + positionX*70, positionY, hood, this.waerHood, this);
      positionX++;

    }
  },
  shopSkirt: function () {
    this.removeElements();
    var positionY = positionYCloset,
      positionX = positionXCloset;

    for (var i = 0; i < numberOfItems; i++) {
      var skirt = 'maniquiSkirt' + (i+1).toString();

      if( i == 2) {
        positionY = positionY + 110;
        positionX = 0;
      }

      maniquiSkirts[i] = this.game.add.button(475 + positionX*70, positionY, skirt, this.waerSkirt, this);
      positionX++;

    }
  },
  removeElements: function () {
    if (maniquiDresses.length>2) {
      for (var i = 0; i < numberOfItems; i++) {
        maniquiDresses[i].visible = false;
      }
    }
    if (maniquiSkirts.length>2) {
      for (var i = 0; i < numberOfItems; i++) {
        maniquiSkirts[i].visible = false;
      }
    }
    if (maniquiBags.length>2) {
      for (var i = 0; i < numberOfItems; i++) {
        maniquiBags[i].visible = false;
      }
    }
    if (maniquiHairs.length>2) {
      for (var i = 0; i < numberOfItems; i++) {
        maniquiHairs[i].visible = false;
      }
    }
    if (maniquiHoods.length>2) {
      for (var i = 0; i < numberOfItems; i++) {
        maniquiHoods[i].visible = false;
      }
    }
  },
	waerHair: function(hair){
    var index = parseInt(hair.key.substring(11,12));

    if (((index*2)-1) === 5) {
      nameWeared.hairBack = "";
    } else {
      nameWeared.hairBack = "hair" + ((index*2)-1);
    }

    nameWeared.hairFront = "hair" + index * 2;

    this.wearedGirl();
    for (var i = 0; i < numberOfItems; i++) {
      maniquiHairs[i].visible = true;
    }
    hair.visible = false;

	},
	waerBag: function(bag){
    nameWeared.bag = "bag" + bag.key.substring(10,11);
    this.wearedGirl();
    for (var i = 0; i < numberOfItems; i++) {
      maniquiBags[i].visible = true;
    }
    bag.visible = false;
	},
	waerDress: function(dress){
    nameWeared.dress = "dress" + dress.key.substring(12,13);

    if (nameWeared.skirt) {
      delete nameWeared.skirt;
    }
    this.wearedGirl();
    for (var i = 0; i < numberOfItems; i++) {
      maniquiDresses[i].visible = true;
    }
    dress.visible = false;
	},
	waerSkirt: function(skirt){
    nameWeared.skirt = "skirt" + skirt.key.substring(12,13);
    if (nameWeared.dress) {
      delete nameWeared.dress;
    }
    this.wearedGirl();
    for (var i = 0; i < numberOfItems; i++) {
      maniquiSkirts[i].visible = true;
    }
    skirt.visible = false;
	},
	waerHood: function(hood){
    var index = parseInt(hood.key.substring(11,12));
    if (index !== 3 && index !== 4) {
      nameWeared.hoodFront = "hood" + index * 2;
    } else {
      nameWeared.hoodFront = "";
    }
      nameWeared.hoodBack = "hood" + ((index*2)-1);

    this.wearedGirl();
    for (var i = 0; i < numberOfItems; i++) {
      maniquiHoods[i].visible = true;
    }
    hood.visible = false;
	},
  wearedGirl: function () {
    //peloatras capa persona vestido capa delante pelo delante bolsa
    for ( var object in styleGirl) {
      styleGirl[object].destroy();
    }
    dollUnderware.destroy();
    styleGirl.hairBack = this.game.add.sprite(position.hairBack.x, position.hairBack.y, nameWeared.hairBack);
    styleGirl.hairBack.anchor.setTo(0.5, 0);
    styleGirl.hoodBack = this.game.add.sprite(position.hoodBack.x, position.hoodBack.y, nameWeared.hoodBack);
    styleGirl.hoodBack.anchor.setTo(0.5, 0);
    dollUnderware = this.game.add.sprite(position.doll.x, position.doll.y, "dollUnderware");
    dollUnderware.anchor.setTo(0.5, 0);
    styleGirl.skirt = this.game.add.sprite(position.skirt.x, position.skirt.y, nameWeared.skirt);
    styleGirl.skirt.anchor.setTo(0.5, 0);
    styleGirl.dress = this.game.add.sprite(position.dress.x, position.dress.y, nameWeared.dress);
    styleGirl.dress.anchor.setTo(0.5, 0);
    styleGirl.hoodFront = this.game.add.sprite(position.hoodFront.x, position.hoodFront.y, nameWeared.hoodFront);
    styleGirl.hoodFront.anchor.setTo(0.5, 0);
    styleGirl.hairFront = this.game.add.sprite(position.hairFront.x, position.hairFront.y, nameWeared.hairFront);
    styleGirl.hairFront.anchor.setTo(0.5, 0);
    styleGirl.bag = this.game.add.sprite(position.bag.x, position.bag.y, nameWeared.bag);
    styleGirl.bag.anchor.setTo(0.5, 0);

    localStorage.setItem('saveNameWeared', JSON.stringify(nameWeared));
  },
	restartGame: function(){
		this.game.state.start("GameTitle");
	}
}
