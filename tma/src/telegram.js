import axios from 'axios';

const TELEGRAM_API_BASE_URL = `https://api.telegram.org/bot6726481993:AAHxpllsjm6OoDxtiSCQhVfeB7SoPDLUIwQ`;

export function initTelegram() {
  if (window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.expand();
    return tg;
  }
  return null;
}

export async function sendMessage(chatId, text) {
  const url = `${TELEGRAM_API_BASE_URL}/sendMessage`;
  try {
    const response = await axios.post(url, {
      chat_id: chatId,
      text: text,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

export async function handleStartCommand(chatId) {
  const message = "Welcome to Crypto Critters Trading Bot! Start collecting critters now.";
  await sendMessage(chatId, message);
}

export async function handleHelpCommand(chatId) {
  const message = "Here are the available commands:\n\n" +
                  "/start - Begin interacting with the bot\n" +
                  "/help - Display available commands\n" +
                  "/open - Open the Crypto Critters Trading App";
  await sendMessage(chatId, message);
}

export async function handleOpenCommand(chatId) {
  const message = "Opening Crypto Critters Trading App...";
  await sendMessage(chatId, message);

  // Implement logic to open the React app
  // For web-based Telegram bots, you might want to send a link to the app or notify the user

  // Example: Sending a link to open the app in the browser
  const appLink = "https://your-react-app-url.com";
  const appMessage = `Click here to open the app: ${appLink}`;
  await sendMessage(chatId, appMessage);
}
