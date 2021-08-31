const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: 'play',
    description: 'Entra na call e da play em um video do youtube',
    async execute(message, args) {

        const voicechannel = message.member.voice.channel
  
        if (!voicechannel) return message.channel.send('Você precisa estar em um canal de voz para usar este comando!');
        const permissions = voicechannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Você não tem permissão para isso!');
        if (!permissions.has('SPEAK')) return message.channel.send('Você não tem permissão para isso!');
        if (!args.length) return message.channel.send('Ta tentando dar play no que?');
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voicechannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voicechannel.leave();
                message.channel.send('leaving channel');
            });
 
            await message.reply(`:thumbsup: Now Playing ***Your Link!***`)
 
            return
        }
 
        
        const  connection = await voicechannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
 
            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        } else {
            message.channel.send('Nenhum resultado foi encontrado');
        }
    }
}