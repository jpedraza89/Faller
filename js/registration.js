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
	timerFlash = 0,
	totalTime;

Registration.prototype = {

	create: function() {
		name = localStorage.getItem('nickName');
		email = localStorage.getItem('E-Mail');
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



		var name = game.add.text(260, 274, 'Nickname:  ' + name , {
			fill: "#fff"
		});
		name.scale.setTo(.8, .8);
		var email = game.add.text(260, 324, 'E-Mail:  ' + email, {
		fill: "#fff"
		});

		totalTime = this.game.endTime.getTime() - this.game.startTime.getTime();
		game.add.text(260, 370, 'Tiempo '+totalTime / 1000, {
			fill: "#fff"
		});
		//totalTime.scale.setTo( .5, .5);

		var scoretext = game.add.text(310, 70, 'PUNTUACIÓN', {
		fill: "#fff"
		});

		this.scoreLabel = this.game.add.text(405, 210, "0", {
			font: scoreFont,
			fill: "#fff"
		});
		this.scoreLabel.anchor.setTo(0.5, 0.5);
		this.scoreLabel.scale.setTo(0.5, 0.5);
		this.scoreLabel.text = scoreText;

		this.scoreLabel.align = 'center';

		sendInformationButton = this.game.add.button(150, 470, 'send_btn', this.sendInformationGame, this);



		var back_btn = this.game.add.button(450, 460, 'back_btn', this.restartGame, this);
		back_btn.scale.setTo(0.7, 0.7);
	},
	update: function() {

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
			conditions: true
		}).then(function(object) {
			//alert("Información Enviada");
			console.log('Información Enviada');
			console.log(name);

			sendInformationButton.destroy();
			that.game.state.start("GameTitle");
		});
	},
	restartGame: function() {
		this.game.state.start("GameOver");
	}


};
