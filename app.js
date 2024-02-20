const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram bot token
const token = '7182311087:AAHQImo76a2qKoJZmvSdi1evFhPv6A5JIm4';


const OpenAI = require ('openai');
const openai = new OpenAI({
  apiKey: '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' // This is the default and can be omitted
});


// Create the Telegram bot
const bot = new TelegramBot(token, { polling: true });

// Initialize the OpenAI API


// Handle "/echo" command
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

// Handle all incoming messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  // Send an acknowledgment message (optional)
  // bot.sendMessage(chatId, 'Received your message');

  // Get the user's message
  const userMessage = msg.text;

 

  const params = {
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  };
  const chatCompletion = await openai.chat.completions.create(params);
  bot.sendMessage(chatId, chatCompletion.data.choices[0].message.content);

});

console.log('Bot is running...');