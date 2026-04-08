const TelegramBot = require('node-telegram-bot-api');

const token  = "8542859089:AAHNjzCMe6cTFJvJHwnzJvr5vDUXJfur_QQ";

const bot   =  new TelegramBot(token, {polling : true});

bot.sendMessage("6426716090" , "Hello there ,Hi!!");