module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Não foi encontrado nenhum resultado para ${query} !`);
};