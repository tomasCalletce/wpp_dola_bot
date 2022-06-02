const client = require('./wppConnect')
const clientDiscord = require('../discordBot/discordConnect')

const IsCustomer = require("../model/crud/isCustomer");
const SaveMessage = require("../model/crud/saveMessage")
const IsCustomerNotCreate = require("../model/crud/isCustomerNotCreate")
const User = require('../model/User')
const { default : mongoose } = require('mongoose');

const {DiscordRequest} = require('./requests/sendMessage')

client.on('message', async msg => {
    if (mongoose.isValidObjectId(msg._data.body)) {
        const res = await IsCustomer(msg.from,msg._data.body);
    }else if(msg.body){
        const res = await IsCustomerNotCreate(msg.from);
        if(res){
            await SaveMessage(res,String(msg._data.body));
            const endpoint = `https://discord.com/api/webhooks/${CHANNEL_ID}/${DISCORD_TOKEN}`
            DiscordRequest(endpoint,{
                method: 'POST',
                data: {
                    content: 'Cuando será el día',
                },
            })

        }

    }
});

client.initialize();


