module.exports = {
    name: 'comandos',
    aliases: [cmd],
    description: 'Lista de comandos',
    category: 'Infos',
    utilisation: '{prefix}comandos',

    execute(client, message, args){
        const Discord = require('discord.js');
        const embc = new Discord.MessageEmbed
        .setColor('#E6E6FA')
        .setTitle('Central de Ajuda')
        .setDescription('Comandos do server')
        .addFields(
            { name: 'help', value: 'Usando *help (comando) você ve as informações do comando' },
            { name: 'debug', value: 'mostra quantos canais o bot está conectado'},
            { name: 'Filtros', value: client.filters.map((x) => '`' + x + '`').join(', ') }
        )
        .setFooter('Bot feito por バダス');
            message.channel.send({embc});

    }
    

}