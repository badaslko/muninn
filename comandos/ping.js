module.exports.run = async(client, message, args) =>{
    const prefix = '!'
    client.on('message', message =>{
        if(message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'ping'){
            message.channel.send('Pong')
        }
    });
};