const clientDiscord = require('./discordConnect')

clientDiscord.once('ready', () => console.log('Ready!'));