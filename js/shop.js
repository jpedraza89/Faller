"use strict";
var Shop = function(game){},
  maniquiDresses = [],
  maniquiSkirts = [],
  maniquiBags = [],
  maniquiHairs= [],
  maniquiHoods= [],
  styleGirl = { },
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
      x: 140,
      y: 190
    },
    hairBack : {
      x: 140,
      y: 190
    },
    hairFront : {
      x: 140,
      y: 190
    },
    skirt : {
      x: 140,
      y: 190
    },
    dress : {
      x: 140,
      y: 190
    },
    hoodBack : {
      x: 140,
      y: 190
    },
    hoodFront : {
      x: 140,
      y: 190
    }
  };

Shop.prototype = {

  	create: function(){
      var that = this,
        background,
        closet,
        buttonBag,
        buttonHair,
        buttonHood,
        buttonSkirt,
        buttonDress;

  		background = game.add.tileSprite(0, 0, 800, 600, 'background_shop');
  		background.scale.setTo(1.04,1.035);

  		closet = this.game.add.sprite(330, 50, 'closet');
  		closet.scale.setTo(1,1);

  		dollUnderware = this.game.add.sprite(position.doll.x, position.doll.y, "dollUnderware");
      dollUnderware.anchor.setTo(0.5, 0);
      buttonBag = this.game.add.button(100, 510, "buttonBag", this.shopBag, this);
      buttonHair = this.game.add.button(150, 510, "buttonHair", this.shopHair, this);
      buttonHood = this.game.add.button(200, 510, "buttonHood", this.shopHood, this);
      buttonSkirt = this.game.add.button(250, 510, "buttonSkirt", this.shopSkirt, this);
      buttonDress = this.game.add.button(300, 510, "buttonDress", this.shopDress, this);


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

    nameWeared.hairFront = "hair" + index * 2,
    nameWeared.hairBack = "hair" + ((index*2)-1);

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
    if (nameWeared.hairBack !== "hair5") {
      styleGirl.hairBack = this.game.add.sprite(position.hairBack.x, position.hairBack.y, nameWeared.hairBack);
      styleGirl.hairBack.anchor.setTo(0.5, 0);
    }
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
  },
	restartGame: function(){
		this.game.state.start("GameTitle");
	}
}
