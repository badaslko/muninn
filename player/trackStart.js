module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Tocando no momento ${track.title} em ${message.member.voice.channel.name} ...`);
};