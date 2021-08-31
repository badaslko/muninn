module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz que o bot!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor, indique a musica que você quer tocar!`);
        function play(connection, message){
            var server = servers[message.guild.id];
        
            server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: 
        "audioonly"}));
        
            server.queue.shift();
        
            server.dispatcher.on("end", function() {
                if(server.queue[0]) play(connection, message);
                else connection.disconnect();
            });
        }

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};