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
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

const emb = new Discord.MessageEmbed()
    .setColor('#ff8c00')
    .setTitle('Classes')
    .setDescription('Comandos do server')
    .addFields(
        { name: '<:Assassin_Icon:790354713211174932> Assassin', value: 'Usa sua agilidade e forca para dar um grande dano no inimigo ardilosamente'},
        { name: '<:Fighter_Icon:790354726595985409> Fighter', value: 'Geralmente a linha de frente junto com o tanker, utiliza sua forca bruta para causar dano'},
        { name: '<:Healer_Icon:790354690683437127> Healer', value: 'Uma das Classes mais importantes, Utiliza sua magia para curar ou buffar o time, e tambem pode se camuflar'},
        { name: '<:JEAN_Mage_Icon:790354700712411146> Mage', value: 'Um ser humano com habilidades magicas que pode lancar raios, criar lancas de fogo ou entao uma parede de gelo'},
        { name: '<:Ranger_Icon:790355408769384448> Ranger', value: ' Um arqueiro habil, usa seu arco para dar dano, buffar o time ou reduzir a defesa do inimigo'},
        { name: '<:Tanker_Icon:790354674929631282> Tanker', value: 'Uma das Classes necessarias, Usa sua defesa descomunal para puxar o aggro de todos os inimigos'},
    )
    .setFooter('Utilize g!<nome da classe> para ver suas skills');
    
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