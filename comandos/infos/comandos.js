module.exports = {
    name: 'comandos',
    aliases: ['cmd'],
    description: 'Lista de comandos',
    category: 'Infos',
    utilisation: '{prefix}comandos',
    

    execute(client, message, args){
        message.channel.send({embc});
}
}