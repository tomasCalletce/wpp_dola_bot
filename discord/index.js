const { Client } = require('discord.js');

const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

client.once('ready', () => console.log('Ready!'));

client.on('messageCreate', (message) => {

  if(message.content.includes('dn')) {
        return message.reply('');
  }
  if (message.content === '!help') {
        return message.reply("there's no help lmao");
  }

});

client.login('OTcwNDU2NDcwNzAzNDQ4MDk0.Gf-ScI.wHhKEV1VtlIX-xUBsfzvI3XBGyxSAS941meq_M');