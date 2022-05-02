
const { Client } = require('whatsapp-web.js');
const QR = require('qr-image');
const IsCustomer = require("./model/crud/isCustomer");
const SaveMessage = require("./model/crud/saveMessage")
const IsCustomerNotCreate = require("./model/crud/isCustomerNotCreate")
const { default : mongoose } = require('mongoose');
const client = new Client();

client.on('qr', (qr) => {
    var qr_svg = QR.image(qr, { type: 'png' });
    qr_svg.pipe(require('fs').createWriteStream('wppQR.png'));
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    if (mongoose.isValidObjectId(msg._data.body)) {
        const res = await IsCustomer(msg._data.author,msg._data.body);
        console.log(res);
    }else if(msg.body){
        console.log()
        const res = await IsCustomerNotCreate(msg._data.author);
        if(res){
            await SaveMessage(res,String(msg._data.body));
        }
    }
});

client.initialize();