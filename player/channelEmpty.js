module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A musica parou, pois não tem mais pessoas no canal de voz!`);
};