
const { Client } = require('whatsapp-web.js');
const QR = require('qr-image');
const IsCustomer = require("./model/crud/isCustomer")
const client = new Client();

client.on('qr', (qr) => {
    var qr_svg = QR.image(qr, { type: 'png' });
    qr_svg.pipe(require('fs').createWriteStream('wppQR.png'));
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    if (msg.body =! '') {
        const res = await IsCustomer(msg);
        console.log(res);
    }
});

client.initialize();