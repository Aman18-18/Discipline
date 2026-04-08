const TelegramBot = require('node-telegram-bot-api');

const token = "Token";

const bot = new TelegramBot(token, { polling: true });

bot.sendMessage("chatId", "Hello there ,Hi!!");