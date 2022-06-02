const { Client } = require('discord.js');

const clientDiscord = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

module.exports =  clientDiscord;