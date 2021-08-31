module.exports = {
    name: 'comandos',
    aliases: ['cmd'],
    description: 'Lista de comandos',
    category: 'Infos',
    utilisation: '{prefix}comandos',
    

    execute(client, message, args){
        const Discord = require('discord.js')
        const embc = new Discord.MessageEmbed()
    .setColor('#E6E6FA')
    .setTitle('Comandos')
    .setDescription('Comandos do server')
    .addFields(
        { name: 'teste', value: 'teste'},
    )
    .setFooter('Utilize *h <nome do comando> para ver o que ele faz');
    
    const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));
    if (!command) return message.channel.send(`${client.emotes.error} - Este comando nao existe!`);
    Discord.Message.send(embc)
}
}