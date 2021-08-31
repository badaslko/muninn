module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - A ação foi **cancelada** !`);
    } else message.channel.send(`${client.emotes.error} - Você precisa colocar um número valido entre **1** e **${tracks.length}** !`);
};