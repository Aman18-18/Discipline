let hasStarted = false;
require('dotenv').config();
const cron  = require('node-cron');
const TelegramBot = require('node-telegram-bot-api');


const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(token, { polling: true });

const quotes = [
  "Power comes in response to a need, not a desire – Goku",
  "Hard work beats talent – Rock Lee",
  "A lesson without pain is meaningless – Edward Elric",
  "If you don’t take risks, you can’t create a future – Luffy",
  "Wake up to reality. Nothing ever goes as planned – Madara Uchiha",
  "The moment you think of giving up, think of the reason why you held on – Natsu",
  "You should enjoy the little detours. Because that’s where you’ll find things more important than what you want – Ging Freecss",
  "Push through the pain. Giving up hurts more – Vegeta",
  "Fear is not evil. It tells you what your weakness is – Gildarts",
  "A person grows up when he’s able to overcome hardships – Jiraiya",
  "No matter how deep the night, it always turns to day – Brook",
  "If you don’t share someone’s pain, you can never understand them – Nagato",
  "Whatever you lose, you’ll find it again. But what you throw away, you’ll never get back – Kenshin",
  "The world isn’t perfect, but it’s there for us, doing the best it can – Roy Mustang",
  "When you hit the point of no return, that’s the moment it truly becomes a journey – Hinata Miyake",
  "A dropout will beat a genius through hard work – Rock Lee",
  "I refuse to let my fear control me anymore – Maka Albarn",
  "Even the strongest of opponents always has a weakness – Itachi Uchiha",
  "Those who forgive themselves, and are able to accept their true nature, are the strong ones – Itachi",
  "People’s lives don’t end when they die, it ends when they lose faith – Itachi",
  "If you don’t like your destiny, don’t accept it – Naruto",
  "The pain of being alone is completely out of this world – Naruto",
  "Growth occurs when one goes beyond one’s limits – Yami Sukehiro",
  "Surpass your limits. Right here. Right now – Yami Sukehiro",
  "You can die anytime, but living takes true courage – Kenshin",
  "If you don’t move forward, you won’t get anywhere – Erwin Smith",
  "Stand up and move forward, or you’ll have nothing to gain – Erwin",
  "Give up on your dreams and die – Levi (twisted but powerful)",
  "The difference between a novice and a master is that the master has failed more times – Koro Sensei",
  "Knowing you’re different is only the beginning – Mob",
  "Talent is something you bloom, instinct is something you polish – Oikawa",
  "Today’s results come from yesterday’s effort – Hinata Shoyo",
  "Being weak is nothing to be ashamed of. Staying weak is – Fuegoleon",
  "You’re not special. The world doesn’t owe you anything – harsh reality",
  "Excuses make today easy but tomorrow hard – reality check",
  "Discipline is choosing what you want most over what you want now",
  "No one is coming to save you. Get up.",
  "Small progress is still progress. Move.",
  "You either suffer the pain of discipline or the pain of regret",
  "Comfort is the enemy of growth",
  "If it was easy, everyone would do it",
  "You said you would start. So start.",
  "Stop waiting for motivation. Build discipline.",
  "The only way out is through",
  "Action beats overthinking. Move now.",
  "You don’t need more time. You need less distraction.",
  "Your future is built by what you do today",
  "No excuses. Just execution.",
  "Do it tired. Do it bored. Do it anyway.",
  "Results don’t care about your mood",
  "You either control your day or it controls you"
];

const tasks = [
  "Solve 2 DSA problems (no skipping)",
  "Work on development (1 feature or 1 bug fix)",
  "Hit the gym (minimum 45 mins)",
  "Continue project (at least 1 meaningful commit)"
];




cron.schedule("* 6 * * *",()=>{
    hasStarted = false;
    const randomQuote  = quotes[Math.floor(Math.random() * quotes.length)];

    const TaskList = tasks.map(t => `- ${t}`).join("\n");
    const message  = ` 🔥 START NOW 🔥

    "${randomQuote}"

    TODAY'S TASK
${TaskList}

 Reply Started in 5 Minutes
`
   
    bot.sendMessage(chatId,message);

    setTimeout(()=>{
        if(!hasStarted){
            bot.sendMessage(chatId,"ARE YOU DEAD");
        }
    },5*60*1000);
});

bot.on("message",(msg)=>{
    const text = msg.text;

    if(text && text.toUpperCase()==='STARTED'){
        hasStarted = true;
        bot.sendMessage(chatId,"OKKK MOVE FORWARD");
    }
});