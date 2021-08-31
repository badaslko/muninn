module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Você não colocou uma resposta valida ... Tente novamente!`);
};