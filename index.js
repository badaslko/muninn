// token ODgxNzg4NjE5MzQwMjc1Nzcy.YSx7pQ.N-DkwrwUaEO4wQRTtZgB6q1pYsw
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_VOICE_STATES"], disableMentions: 'everyone' });
const prefix = '*'
const { Player, Song, Queue} = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false, // This options are optional.
});
const queue = new Queue(player)
client.player = player
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.commands = new Discord.Collection();
fs.readdirSync('./comandos').forEach(dirs => {
    const commands = fs.readdirSync(`./comandos/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./comandos/${dirs}/${file}`);
        console.log(`Carregando comando ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});
    
client.once('ready', () => {
    console.log('Muninn esta expandindo sua mente!');
});
const { RepeatMode } = require('discord-music-player');
const { discord } = require('./config/bot');
const { channel, Channel } = require('diagnostics_channel');
const { MessageChannel } = require('worker_threads');

client.player
    // Emitted when channel was empty.
    .on('channelEmpty',  (queue) =>
        console.log(`Everyone left the Voice Channel, queue ended.`))
    // Emitted when a song was added to the queue.
    .on('songAdd',  (queue, song) =>
        console.log(`Song ${song} was added to the queue.`))
    // Emitted when a playlist was added to the queue.
    .on('playlistAdd',  (queue, playlist) =>
        console.log(`Playlist ${playlist} with ${playlist.songs.length} was added to the queue.`))
    // Emitted when there was no more music to play.
    .on('queueEnd',  (queue) =>
        console.log(`The queue has ended.`))
    // Emitted when a song changed.
    .on('songChanged', (queue, newSong, oldSong) =>
        console.log(`${newSong} is now playing.`))
    // Emitted when a first song in the queue started playing.
    .on('songFirst',  (queue, song) =>
        console.log(`Started playing ${song}.`))
    // Emitted when someone disconnected the bot from the channel.
    .on('clientDisconnect', (queue) =>
        console.log(`I was kicked from the Voice Channel, queue ended.`))
    // Emitted when deafenOnJoin is true and the bot was undeafened
    .on('clientUndeafen', (queue) =>
        console.log(`I got undefeanded.`))
    // Emitted when there was an error in runtime
    .on('error', (error, queue) => {
        console.log(`Error: ${error} in ${queue.guild.name}`);
    });

client.on('messageCreate', async (message) => {
    let guildQueue = client.player.getQueue(message.guild.id);
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const embs = new Discord.MessageEmbed()
    .setColor('#5c0085')
    .addFields(
        { name: `${Song}`, value: message.author}
    )            
    message.channel.send({ embeds: [embs]})
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command=== 'teste'){
        message.channel.send({ embeds: [embt] })
    }else if(command === 'play' || 'p') {        
        let queue = client.player.createQueue(message.guild.id);        
        await queue.join(message.member.voice.channel);       
        let song = await queue.play(args.join(' ')).catch(_ => 
            {
            if(!guildQueue)
            queue.stop();
            }); 
    }else if(command === 'playlist') {
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.playlist(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        })
    }else if(command === 'queue' || 'q'){   

    }else if(command === 'skip') {
        guildQueue.skip();
    }else if(command === 'stop') {
        message.channel.send('A musica foi interrompida')
        guildQueue.stop();
    }else if(command === 'removeLoop') {
        guildQueue.setRepeatMode(RepeatMode.DISABLED); // or 0 instead of RepeatMode.DISABLED
    }else if(command === 'toggleLoop') {
        guildQueue.setRepeatMode(RepeatMode.SONG); // or 1 instead of RepeatMode.SONG
    }else if(command === 'toggleQueueLoop') {
        guildQueue.setRepeatMode(RepeatMode.QUEUE); // or 2 instead of RepeatMode.QUEUE
    }else if(command === 'setVolume') {
        guildQueue.setVolume(parseInt(args[0]));
    }else if(command === 'jump') {
        guildQueue.seek(parseInt(args[0]) * 1000);
    }else if(command === 'clearQueue') {
        guildQueue.clearQueue();
    }else if(command === 'shuffle') {
        guildQueue.shuffle();
    }else if(command === 'getQueue') {
        console.log(guildQueue);
    }else if(command === 'getVolume') {
        console.log(guildQueue.volume)
    }else if(command === 'nowPlaying') {
        console.log(`Now playing: ${guildQueue.nowPlaying}`);
    }else if(command === 'pause') {
        guildQueue.setPaused(true);
    }else if(command === 'resume') {
        guildQueue.setPaused(false);
    }else if(command === 'remove') {
        guildQueue.remove(parseInt(args[0]));
    }else if(command === 'createProgressBar') {
        const ProgressBar = guildQueue.createProgressBar();
        
        // [======>              ][00:35/2:20]
        console.log(ProgressBar.prettier);
    }
})
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
});

client.login(process.env.token);