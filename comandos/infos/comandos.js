module.exports = {
    name: 'comandos',
    aliases: ['cmd'],
    description: 'Lista de comandos',
    category: 'Infos',
    utilisation: '{prefix}comandos',
    

    execute(client, message, args){
        message.channel.send({
            embed: {
                color: '#E6E6FA',
                author: { name: 'Comandos' },
                footer: { text: 'Bot feito por バダス' },
                fields: [
                    { name: 'help', value: 'Usando *help (comando) você ve as informações do comando', inline: true},
                    { name: 'debug', value: 'mostra quantos canais o bot está conectado', inline: true},
                ],
                timestamp: new Date(),
                description: `To use filters, ${client.config.discord.prefix}filter (the filter). Example : ${client.config.discord.prefix}filter 8D.`,
            },
        });
    }
}