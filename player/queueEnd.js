module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musica parou, não tem mais musicas na playlist!`);
};