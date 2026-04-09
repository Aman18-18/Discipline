require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');


const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(token, { polling: true });

bot.sendMessage(chatId, "Hello there ,Hi!!");