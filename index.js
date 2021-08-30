// token ODgxNzg4NjE5MzQwMjc1Nzcy.YSx7pQ.N-DkwrwUaEO4wQRTtZgB6q1pYsw

const { Client, Discord} = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const bot = new client({
    ws: {
        intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGE", "GUILD_PRESENCES"]
    }
})

client.on('message', message =>{
    if(message.author.bot) return;
    if(message.channel.type == 'DM') return;
    if(message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.lenght)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try{
        const commandsFile = require(`./comandos/${command}.js`)
        commandsFile.run(client, message, args);
    } catch (err) {
        console.error('Erro:' + err);
    }

});

client.login(process.env.token);