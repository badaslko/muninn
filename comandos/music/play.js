
module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {        
        const Discord = require('discord.js');
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Voce não está em um canal de voz`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please indicate the title of a song !`);

        client.on('messageCreate', async(message) => {
            const command = args.shift();
        let guildQueue = client.player.getQueue(message.guild.id);

       
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
          
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });       
    })
    },
};