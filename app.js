const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()



// Replace with your Telegram bot token
const token = '7182311087:AAHQImo76a2qKoJZmvSdi1evFhPv6A5JIm4';


const OpenAI =require ('openai');
require('dotenv').config()
const openai = new OpenAI({
  apiKey: process.env.API_OPENAI// This is the default and can be omitted
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
    messages: [{ role: 'user', content: userMessage }],
    model: 'gpt-3.5-turbo',
    max_tokens: 2000,
  };
  const chatCompletion = await openai.chat.completions.create(params);
  // bot.sendMessage(chatId, chatCompletion.data.choices[0].message.content);
  bot.sendMessage(chatId, chatCompletion.choices[0].message.content);
  console.log(chatCompletion.choices[0].message.content);
});

console.log('Bot is running...');
console.log('update bot telegram');
console.log('test cicd');
