module.exports = async (client) => {
    console.log(`Logado como ${client.user.username}. Disponível em ${client.guilds.cache.size} servers, para um total de ${client.users.cache.size} usuarios`);

    client.user.setActivity(client.config.discord.activity);
};