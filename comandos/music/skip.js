module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não esta em um canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz que o bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Não tem musicas tocando no momento!`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - A musica atual foi **pulada** !`);
    },
};