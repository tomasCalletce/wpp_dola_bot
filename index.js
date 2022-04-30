const { Client } = require('whatsapp-web.js');
var QR = require('qr-image');

const client = new Client();

client.on('qr', (qr) => {
    var qr_svg = QR.image(qr, { type: 'png' });
    qr_svg.pipe(require('fs').createWriteStream('wppQR.png'));
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body != '') {
        console.log('MESSAGE RECEIVED', msg);
    }
});

client.initialize();