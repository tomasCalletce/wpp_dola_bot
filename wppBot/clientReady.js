const client = require('./wppConnect')

client.on('ready', () => {
    console.log('Client is ready!');
});