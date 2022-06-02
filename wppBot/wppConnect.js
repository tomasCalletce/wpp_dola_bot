const { Client } = require('whatsapp-web.js');
const QR = require('qr-image');


const client = new Client();
client.on('qr', (qr) => {
    var qr_svg = QR.image(qr, { type: 'png' });
    qr_svg.pipe(require('fs').createWriteStream('wppQR.png'));
});



module.exports = client;

