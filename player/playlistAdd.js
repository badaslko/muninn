module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} foi adicionado a sua playlist (**${playlist.tracks.length}** musicas) !`);
};