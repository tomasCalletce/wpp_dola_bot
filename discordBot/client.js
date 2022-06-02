const clientDiscord = require('./discordConnect')
const findUser = require('../model/crud/findUser')

const client = require('../wppBot/wppConnect')

clientDiscord.on('messageCreate', async (message) => {

    if(message.content.includes('dn')) {
          return message.reply('');
    }
    if (message.content != '') {
        const author = message.author.username;
        const content = message.content;

        const customer = await findUser(author)
        const customerCELL = String(customer.cellPhone);
        const customerCellFinal = customerCELL.substring(0,customerCELL.length-5)
        
        const wppCustomer = await client.getNumberId(customerCellFinal);
        if (wppCustomer) {
            await client.sendMessage(wppCustomer._serialized,message.content); 
        } else {
            console.log(final_number, "Mobile number is not registered");
        }
    }
  
  });
  
clientDiscord.login('OTcwNDU2NDcwNzAzNDQ4MDk0.Gf-ScI.wHhKEV1VtlIX-xUBsfzvI3XBGyxSAS941meq_M');