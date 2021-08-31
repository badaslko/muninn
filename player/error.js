module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Não tem musica sendo tocada neste server!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Você não esta conectado a um canal de voz!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Eu não posso entrar no canal, por favor cheque minhas permissões!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} não é disponível no seu país! Pulando...`);
            break;
        case 'MusicStarting':
            message.channel.send(`A musica está começando... espere e tente novamente!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Alguma coisa deu errado ... Erro : ${error}`);
    };
};
