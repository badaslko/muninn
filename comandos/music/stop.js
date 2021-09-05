module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        let guildQueue = client.player.getQueue(message.guild.id);
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal que o bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma musica tocando no momento!`);
        
        
        client.player.setRepeatMode(message, false);
        const success =  guildQueue.stop();
        this.execute(success)

        if (success) message.channel.send(`${client.emotes.success} - A musica **parou** neste server!`);
    },
};