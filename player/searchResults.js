module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#8B008B',
            author: { name: `Aqui estão os resultados para ${query}` },
            footer: { text: 'Este bot usa um projeto do Github feito por Zerio (ZerioDev/Music-bot)\n Editado por: バダス' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};