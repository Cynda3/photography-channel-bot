﻿var fs = require('fs');
const Telegraf = require('telegraf');
const Twit = require('twit');


// Set up the Telegram Bot API
const bot = new Telegraf('6175439362:AAF7nRFLwBNWqyJIZYMaObCv9gbICPEfIgk');

// Set up the Twitter API
const twitterClient = new Twit({
	consumer_key: 'YOUR_TWITTER_API_KEY',
	consumer_secret: 'YOUR_TWITTER_API_SECRET_KEY',
	access_token: 'YOUR_TWITTER_ACCESS_TOKEN',
	access_token_secret: 'YOUR_TWITTER_ACCESS_TOKEN_SECRET',
  });

const IS_HEROKU = process.env.API_TOKEN? true: false;
const API_TOKEN = process.env.API_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://your-heroku-app.herokuapp.com';


// Use a Telegram bot to find stickers id
const STICKERS = {
	'PERRO_CARA_DE_ASCO': 'CAADAQADbA8AApl_iAIWqjSjvk5mvwI',
	'PUTIN': 'CAADAgADuwMAAjq5FQLpT_o8u1zbKhYE'
};



bot.hears(/Como .+ a .+ con .+/i, buscar_counter);




bot.hears('Putin', Putin);

function putin(ctx){
	ctx.replyWithSticker(STICKERS.PUTIN);
}

bot.start((ctx) => ctx.reply('Welcome to the world of Pokémon!'));

if (IS_HEROKU) {
	bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
	bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);
} else {
	bot.startPolling();
}






// Función para buscar los counters de algunos pokemon en pokemon GO 
// Actualmente no va a ser utilizada
/*
function buscar_counter(ctx) {
	var msg = ctx.message;//.toLowerCase();
	var pokemon = msg.text.split(' a ')[1].split(' con ')[0];
	var movimiento = msg.text.split(' a ')[1].split(' con ')[1];
	if (raidboss[pokemon] && raidboss[pokemon][movimiento]) {
		var counters = raidboss[pokemon][movimiento].join(', ');

		ctx.reply(`A ${pokemon} se le tiene que tirar con ${counters}`);
	} else {
		ctx.replyWithSticker(STICKERS.PERRO_CARA_DE_ASCO);
	}
}
*/