module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#4B0082',
                    author: { name: 'Central de Ajuda' },
                    footer: { text: 'Este bot usa um projeto do Github feito por Zerio (ZerioDev/Music-bot)\n Editado por: バダス' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Para usar filtros, ${client.config.discord.prefix}filter (nome do filtro). Exemplo : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Este comando nao existe!`);

            message.channel.send({
                embed: {
                    color: '#4B0082',
                    author: { name: 'Central de Ajuda' },
                    footer: { text: 'This bot uses a Github project made by Zerio (ZerioDev/Music-bot)' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Acha informacao no comando requisitado.\nArgumentos obrigatorios `[]`, Argumentos opcionais `<>`.',
                }
            });
        };
    },
};