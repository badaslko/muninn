module.exports = {
    name: 'ping',
    description: "Este e um comando de ping pong!",
    execute(message, args){
        message.channel.send('pong!');
    }

}