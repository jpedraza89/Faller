"use strict";
var Bases = function(game) {},

	name = "",
	email = "",
	bmdName,
	bmdMail,
	flagName = true,
	flagAcceptConditions = false,
	acceptConditionsButton,
	totalTime,
	sendInformation,
	sendInformationButton,
	timerFlash = 0,
	flagArroba = false;

Bases.prototype = {

		create: function() {

		var music;

		music = game.add.audio('music');
		music.loop = true;

		music.play();
		name = "";
		email = "";
		flagName = true;
		flagAcceptConditions = false;
		sendInformationButton = null;
		var backgroundregistration;
		var scoreFont = "100px Arial";

		backgroundregistration = game.add.tileSprite(0, 0, 800, 600, 'backgroundregistration');
		backgroundregistration.scale.setTo(1.02, 1);

		var dolls = this.game.add.sprite(0, 60, 'dolls');
		dolls.scale.setTo(1, 1);

		var reg_img = this.game.add.sprite(300, 180, 'reg_img');
		reg_img.scale.setTo(.9, .9);

		var nameButton = this.game.add.button(360, 300, 'textbox', this.nameSelected, this);
		nameButton.scale.setTo(.3, .2);
		var mailButton = this.game.add.button(360, 350, 'textbox', this.mailSelected, this);
		mailButton.scale.setTo(.3, .2);
		acceptConditionsButton = this.game.add.button(370, 380, 'unchecked', this.acceptConditions, this);

		if(localStorage.getItem('nickName') === null) {
			localStorage.setItem('nickName', '');
		} else {
			bmdName = localStorage.getItem('nickName');
		}

		if(localStorage.getItem('E-Mail') === null) {
			localStorage.setItem('E-Mail', '');
		} else {
			bmdMail = localStorage.getItem('E-Mail');
		}

		var name = game.add.text(360, 270, 'Nickname:', {
			fill: "#fff"
		});
		name.scale.setTo(.7, .7);
		var email = game.add.text(360, 320, 'E-Mail:', {
		fill: "#fff"
		});
		email.scale.setTo(.7, .7);
		var terms = game.add.text(400, 385, 'Acepto Terminos y Condiciones', {
		fill: "#fff"
		});
		terms.scale.setTo(.5, .5);


		bmdName = game.make.bitmapData(800, 100);
    bmdName.context.font = '15px Arial';
    bmdName.context.fillStyle = '#000000';
    bmdName.addToWorld(360,250);

		bmdMail = game.make.bitmapData(800, 200);
    bmdMail.context.font = '15px Arial';
    bmdMail.context.fillStyle = '#000000';
    bmdMail.addToWorld(370, 300);
		sendInformation = this.game.add.sprite(380, 420, 'reg_btn');
		sendInformation.scale.setTo(.7, .7);

		game.input.keyboard.addCallbacks(this, null, null, this.keyPress);

	},
	update: function() {

		timerFlash = timerFlash + this.game.time.elapsed;
		if (timerFlash < 300) {
			this.antiFlash();
		}
		if (timerFlash > 300) {
			this.flash();
		}
		if (timerFlash > 600) {
			timerFlash = 0;
		}

		if (name.length > 3 && email.length > 3 && flagAcceptConditions && flagArroba) {
			if (!sendInformationButton) {
				sendInformation.destroy();
				sendInformationButton = this.game.add.button(370, 420, 'play_btn', this.sendInformationGame, this);
			}
		} else if(!sendInformation.key || sendInformationButton) {
			sendInformationButton.destroy();
			sendInformationButton = null;
			sendInformation = this.game.add.sprite(365, 420, 'reg_btn');
			sendInformation.scale.setTo(.6, .6);
		}
	},
	flash: function () {
		if (flagName) {
			bmdName.cls();
			bmdName.context.fillText(name, 64, 64);
		} else {

			bmdMail.cls();
			bmdMail.context.fillText(email, 64, 64);
		}
	},
	antiFlash: function () {
		if (flagName) {
			bmdName.cls();
			bmdMail.cls();
			bmdName.context.fillText(name + "_", 64, 64);
			bmdMail.context.fillText(email, 64, 64);
		} else {
			bmdMail.cls();
			bmdName.cls();
			bmdName.context.fillText(name, 64, 64);
			bmdMail.context.fillText(email + "_", 64, 64);
		}
	},
	acceptConditions: function () {
		acceptConditionsButton.destroy();
		flagAcceptConditions = !flagAcceptConditions;
		if (flagAcceptConditions) {
			acceptConditionsButton = this.game.add.button(360, 380, 'checked', this.acceptConditions, this);
		} else {
			acceptConditionsButton = this.game.add.button(360, 380, 'unchecked', this.acceptConditions, this);
		}
	},
	nameSelected: function () {
		flagName = true;
	},
	mailSelected: function () {
		flagName = false;
	},
	keyPress: function (char) {
		if (flagName) {
			bmdName.cls();
			if (char.charCodeAt() < 10) {
				name = name.substring(0, name.length - 1);
			} else {
				name = name + char;
			}
			bmdName.context.fillText(name, 64, 64);
		} else {
			bmdMail.cls();
			if (char.charCodeAt() < 10) {
				email = email.substring(0, email.length - 1);
			} else {
				email = email + char;
			}
			bmdMail.context.fillText(email, 64, 64);
			if (email.indexOf("@") > 1) {
				flagArroba = true;
			} else {
				flagArroba = false;
			}
		}

	},
	sendInformationGame: function () {
		localStorage.setItem('nickName', name);
		localStorage.setItem('E-Mail', email);
		this.game.state.start("GameTitle");
	},

	startGame: function() {
		this.game.state.start("GameTitle");
	}


};
