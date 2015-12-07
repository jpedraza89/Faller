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
	timerFlash = 0;

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


		var logo = this.game.add.sprite(250, 20, 'logo');
		logo.scale.setTo(.6, .6);
		logo.angle = (2 + Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1);
		var logoTween = this.add.tween(logo);
		logoTween.to({
			angle: -logo.angle
		}, 5000 + Math.random() * 5000, Phaser.Easing.Linear.None, true, 0, 1000, true);

		var nameButton = this.game.add.button(260, 300, 'textbox', this.nameSelected, this);
		nameButton.scale.setTo(.3, .2);
		var mailButton = this.game.add.button(260, 350, 'textbox', this.mailSelected, this);
		mailButton.scale.setTo(.3, .2);
		acceptConditionsButton = this.game.add.button(260, 390, 'unchecked', this.acceptConditions, this);

		var name = game.add.text(260, 274, 'Nombre:', {
			fill: "#fff"
		});
		name.scale.setTo(.7, .7);
		var email = game.add.text(260, 324, 'E-Mail:', {
		fill: "#fff"
		});
		email.scale.setTo(.7, .7);
		var terms = game.add.text(300, 395, 'Acepto Terminos y Condiciones', {
		fill: "#fff"
		});
		terms.scale.setTo(.5, .5);


		bmdName = game.make.bitmapData(800, 200);
    bmdName.context.font = '15px Arial';
    bmdName.context.fillStyle = '#000000';
    bmdName.addToWorld(200,250);

		bmdMail = game.make.bitmapData(800, 200);
    bmdMail.context.font = '15px Arial';
    bmdMail.context.fillStyle = '#000000';
    bmdMail.addToWorld(200, 300);
		sendInformation = this.game.add.sprite(250, 430, 'play_btn');
		sendInformation.scale.setTo(1.1, 1.1);

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

		if (name.length > 3 && email.length > 3 && flagAcceptConditions) {
			if (!sendInformationButton) {
				sendInformation.destroy();
				sendInformationButton = this.game.add.button(250, 430, 'play_btn', this.sendInformationGame, this);
			}
		} else if(!sendInformation.key || sendInformationButton) {
			sendInformationButton.destroy();
			sendInformationButton = null;
			sendInformation = this.game.add.sprite(250, 430, 'play_btn');
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
			acceptConditionsButton = this.game.add.button(260, 390, 'checked', this.acceptConditions, this);
		} else {
			acceptConditionsButton = this.game.add.button(260, 390, 'unchecked', this.acceptConditions, this);
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
			name = name + char;
			bmdName.context.fillText(name, 64, 64);
		} else {
			bmdMail.cls();
			email = email + char;
			bmdMail.context.fillText(email, 64, 64);
		}

	},
	sendInformationGame: function () {
		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		var that = this;
		testObject.save({
			name: name,
			email: email,
			score : parseInt(scoreText),
			totalTime: totalTime,
			conditions: flagAcceptConditions
		}).then(function(object) {
			alert("Información Enviada");
			sendInformationButton.destroy();
			that.game.state.start("GameTitle");
			name = "";
			email = "";
		});
	},

	startGame: function() {
		this.game.state.start("GameTitle");
	}


};
