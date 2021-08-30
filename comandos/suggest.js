module.exports = {
    name: 'sugestão',
    aliases: ['sugerir', 'sugestão'],
    permissions: [],
    description: 'Cria uma sugestão!',
    execute(message, args, command, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'sugestões');
        if(!channel) return message.channel.send('não existe o canal de sugestões');
    }
}