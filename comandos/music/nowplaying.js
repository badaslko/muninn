module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz que o bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Não tem musicas tocando no momento!`);


        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: '#8A2BE2',
                author: { name: track.title },
                footer: { text: 'Este bot usa um projeto do Github feito por Zerio (ZerioDev/Music-bot)\n Editado por: バダス' },
                fields: [
                    { name: 'Canal', value: track.author, inline: true },
                    { name: 'Colocado por:  ', value: track.requestedBy.username, inline: true },
                    { name: 'Da playlist?', value: track.fromPlaylist ? 'Sim' : 'Nao', inline: true },

                    { name: 'Visualizações', value: track.views, inline: true },
                    { name: 'Duração', value: track.duration, inline: true },
                    { name: 'Filtros Ativados', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Repetir?', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Pausado?', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Barra de progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};