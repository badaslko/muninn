module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A musica acabou e eu fui desconectado !`);
};