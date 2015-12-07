"use strict";
var Registration = function(game) {},
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

Registration.prototype = {

	create: function() {
		name = "";
		email = "";
		time: totalTime;
		flagName = true;
		flagAcceptConditions = false;
		sendInformationButton = null;
		var backgroundregistration;
		var scoreFont = "100px Arial";

		backgroundregistration = game.add.tileSprite(0, 0, 800, 600, 'backgroundregistration');
		backgroundregistration.scale.setTo(1.02, 1);

		var keys = this.game.add.sprite(320, 100, 'scores');
		keys.scale.setTo(1.2, 1.2);


		var nameButton = this.game.add.button(260, 300, 'textbox', this.nameSelected, this);
		nameButton.scale.setTo(.3, .2);
		var mailButton = this.game.add.button(260, 350, 'textbox', this.mailSelected, this);
		mailButton.scale.setTo(.3, .2);
		acceptConditionsButton = this.game.add.button(260, 390, 'unchecked', this.acceptConditions, this);

		var name = game.add.text(260, 274, 'Nickname:', {
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

		var totalTime = this.game.endTime.getTime() - this.game.startTime.getTime();
		game.add.text(470, 200, 'Tiempo '+totalTime / 1000, {
			fill: "#fff"
		});
		//totalTime.scale.setTo( .5, .5);

		var scoretext = game.add.text(310, 70, 'PUNTUACIÓN', {
		fill: "#fff"
		});
		terms.scale.setTo(.5, .5);

		this.scoreLabel = this.game.add.text(405, 210, "0", {
			font: scoreFont,
			fill: "#fff"
		});
		this.scoreLabel.anchor.setTo(0.5, 0.5);
		this.scoreLabel.scale.setTo(0.5, 0.5);
		this.scoreLabel.text = scoreText;

		this.scoreLabel.align = 'center';

		bmdName = game.make.bitmapData(800, 200);
    bmdName.context.font = '15px Arial';
    bmdName.context.fillStyle = '#000000';
    bmdName.addToWorld(200,250);

		bmdMail = game.make.bitmapData(800, 200);
    bmdMail.context.font = '15px Arial';
    bmdMail.context.fillStyle = '#000000';
    bmdMail.addToWorld(200, 300);
		sendInformation = this.game.add.sprite(150, 470, 'send_btn');
		sendInformation.scale.setTo(1.1, 1.1);

		game.input.keyboard.addCallbacks(this, null, null, this.keyPress);


		var back_btn = this.game.add.button(450, 460, 'back_btn', this.restartGame, this);
		back_btn.scale.setTo(0.7, 0.7);
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
				sendInformationButton = this.game.add.button(150, 470, 'send_btn', this.sendInformationGame, this);
			}
		} else if(!sendInformation.key || sendInformationButton) {
			sendInformationButton.destroy();
			sendInformationButton = null;
			sendInformation = this.game.add.sprite(120, 450, 'retry_btn');
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
		var users = Parse.Object.extend("users");
		var users = new users();
		var that = this;
		users.save({
			nickname: name,
			email: email,
			score : parseInt(scoreText),
			points: keyscore,
			time: totalTime,
			conditions: flagAcceptConditions
		}).then(function(object) {
			//alert("Información Enviada");
			sendInformationButton.destroy();
			that.game.state.start("GameTitle");
			name = "";
			email = "";
		});
	},
	restartGame: function() {
		this.game.state.start("GameOver");
	}


};
