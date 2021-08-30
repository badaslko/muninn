module.exports.run = async(client, message, args) =>{
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(command === 'ping'){
        message.channel.send('Pong')
    }
})
};