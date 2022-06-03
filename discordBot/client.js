const clientDiscord = require('./discordConnect')
const findUser = require('../model/crud/findUser')
const client = require('../wppBot/wppConnect')

clientDiscord.on('messageCreate', async (message) => {

    if(message.content.includes('dn')) {
          return message.reply('');
    }
    if (message.content != '' && message.author.id != '970456470703448094') {
        const author = message.author.id;
        const content = message.content;

        const customer = await findUser(author)
        const customerCELL = String(customer.cellPhone);
        const customerCellFinal = customerCELL.substring(0,customerCELL.length-5)
        
        const wppCustomer = await client.getNumberId(customerCellFinal);
        if (wppCustomer) {
            await client.sendMessage(wppCustomer._serialized,content); 
            
        } else {
            console.log(final_number, "Mobile number is not registered");
        }
    }
  
  });
  
clientDiscord.login('OTcwNDU2NDcwNzAzNDQ4MDk0.GZ8GMG.qzJWUmkDGpRI9GI8fL_lxz1BWaaD-fTHyOERHI');