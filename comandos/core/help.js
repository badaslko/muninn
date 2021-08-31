module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',
 
    execute(client, message, args) {
        const Discord = require('discord.js');
        if (!args[1] == " " && !args[1] == "") {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const embh = new Discord.MessageEmbed()
        .setColor('#8a2be2')
        .setTitle('Central de Ajuda')
        .setDescription('Comandos do server')
        .addFields(
            { name: 'bot', value: infos },
            { name: 'Musica', value: music},
            { name: 'Filtros', value: client.filters.map((x) => '`' + x + '`').join(', ') }
        )
        .setFooter('Bot feito por バダス');
            message.channel.send({embh});

        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Este comando nao existe!`);
            const embhe = new Discord.MessageEmbed()
            .setColor('#9400d3')
            .setTitle('Central de Ajuda')
            .setDescription('Acha informação no comando requisitado.\nArgumentos obrigatorios `[]`, Argumentos opcionais `<>`.')
            .addFields(
                { name: 'nome', value: command.name, inline: true },
                { name: 'Musica', value: command.category, inline: true },
                { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                { name: 'Utilizacao', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true }
            )
            .setTimestamp(new Date())
            message.channel.send({embhe});
        };
    },
};