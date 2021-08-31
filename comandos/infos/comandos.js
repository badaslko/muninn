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
    channel.send({ embeds: [embc] });
}
}