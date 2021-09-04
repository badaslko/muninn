// token ODgxNzg4NjE5MzQwMjc1Nzcy.YSx7pQ.N-DkwrwUaEO4wQRTtZgB6q1pYsw
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_VOICE_STATES"], disableMentions: 'everyone' });
const prefix = '*'
const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new Discord.Collection();

fs.readdirSync('./comandos').forEach(dirs => {
    const commands = fs.readdirSync(`./comandos/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./comandos/${dirs}/${file}`);
        console.log(`Carregando comando ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const embc = new Discord.MessageEmbed()
    .setColor('#E6E6FA')
    .setTitle('Comandos')
    .setDescription('Comandos do server')
    .addFields(
        { name: 'teste', value: 'teste'},
    )
    .setFooter('Utilize *h <nome do comando> para ver o que ele faz');
    
client.once('ready', () => {
    console.log('Muninn esta expandindo sua mente!');
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'casd'){
        message.channel.send(' Aqui está a lista de comandos\n cl: Mostra o que as classes do bot <@703043558483034223> faz\n ping: Manda uma mensagem escrita "pong".\n');
    }
});

client.login(process.env.token);