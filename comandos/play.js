const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const yts = require('yt-search');
const { filterFormats } = require('ytdl-core');
 
module.exports = {
    name: 'play',
    description: 'Entra na call e da play em um video do youtube',
    async execute(message, args) {


        const voiceChannel = message.member.channel.voice;
 
        if (!voiceChannel) return message.channel.send('Você precisa estar em um canal de voz para usar este comando!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Você não tem as permissões para isso');
        if (!permissions.has('SPEAK')) return message.channel.send('Você não tem as permissões para isso');
        if (!args.length) return message.channel.send('Ta tendando dar play no nada? Coloca algo ai!');

        const connection = await voiceChannel.join();

        const videoFinder = async (query) =>{
            const videoResult = await ytSearch(query);

            return (videoResult.videos.lenght > 1) ? videoResult.videos[0] : null;
        }
        const video = await videoFinder(args.join(' '));
        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volune: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        }else{
            message.channel.send('Nao foi encontrado nenhum resultado');
        }
    }
}