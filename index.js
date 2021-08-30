// token ODgxNzg4NjE5MzQwMjc1Nzcy.YSx7pQ.N-DkwrwUaEO4wQRTtZgB6q1pYsw

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"] });

const prefix = '!'
client.on('ready', ()=>{
    console.log('Muninn esta expandindo sua mente!');
});
client.on('message', message =>{
    if(message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
});

client.login(process.env.token);