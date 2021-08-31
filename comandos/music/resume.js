module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz que o bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Não tem musicas tocando no momento!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - A musica ja está tocando!`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Musica ${client.player.getQueue(message).playing.title} voltou a tocar!`);
    },
};