const TelegramBot = require('node-telegram-bot-api');
const token = '6726481993:AAHxpllsjm6OoDxtiSCQhVfeB7SoPDLUIwQ'; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
  
    if (messageText === '/start') {
      bot.sendMessage(chatId, 'Welcome to the bot!');
    }
    else if(messageText === '/help'){
        bot.sendMessage(chatId, 'Here are the available commands:\n\n' +
        "/start - Begin interacting with the bot\n" +
        "/help - Display available commands\n" +
        "/open - Open the Crypto Critters Trading App");
    }
    else if(messageText === '/open'){
        bot.sendMessage(chatId, 'Opening Crypto Critters Trading App...');
        const appLink = "https://your-react-app-url.com";
        const appMessage = `Click here to open the app: ${appLink}`;
        bot.sendMessage(chatId, appMessage);
    }
    else{
        bot.sendMessage(chatId, 'Invalid command. Type /help for a list of available commands.');
    }
  });