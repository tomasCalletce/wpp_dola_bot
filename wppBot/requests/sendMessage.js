


export default async function DiscordRequest(endpoint, options) {
    // Stringify payloads
    if (options.body) options.body = JSON.stringify(options.body);
    // Use node-axios to make requests
    try {
        const res = await axios({
            headers: {
                Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
                'Content-Type': 'application/json; charset=UTF-8',
            },
            url: endpoint,
            ...options
        })
        // return original response
        return res;
    } catch (e) { console.log(e) }
}

