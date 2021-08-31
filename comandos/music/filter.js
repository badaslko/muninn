module.exports = {
    name: 'filter',
    aliases: ['f'],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não esta em um canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não esta no mesmo canal de voz que o bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Não tem musicas tocando no momento!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor, especifique um filtro valido para ativar ou desativar !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Este filtro não existe, tente por exemplo: (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Eu estou **colocando** este filtro na musica, por favor espere! OBS : Quanto maior a musica, mais vai demorar.`);
        else message.channel.send(`${client.emotes.music} - Eu estou **retirando** este filtro na musica, por favor espere! OBS : Quanto maior a musica, mais vai demorar.`);
    },
};