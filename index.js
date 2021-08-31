// token ODgxNzg4NjE5MzQwMjc1Nzcy.YSx7pQ.N-DkwrwUaEO4wQRTtZgB6q1pYsw

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"] });
const prefix = '!'
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./comandos/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

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
    
    if(command === 'cmd'){
        message.channel.send(' Aqui está a lista de comandos\n cl: Mostra o que as classes do bot <@703043558483034223> faz\n ping: Manda uma mensagem escrita "pong".\n');
    } else if(command === 'embed'){
        message.channel.send(emb);
    } else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
});

client.login(process.env.token);