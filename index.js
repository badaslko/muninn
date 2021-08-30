// token ODgxNzg4NjE5MzQwMjc1Nzcy.YSx7pQ.N-DkwrwUaEO4wQRTtZgB6q1pYsw

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"] });

const prefix = '!'
const embcl = new Discord.MessageEmbed()
    .setColor('#ff8c00')
    .setTitle('Classes')
    .setDescription('Todas as classes que podem ser escolhidas')
    .addFields(
        { name: '<:Assassin_Icon:790354713211174932> Assassin', value: 'Usa sua agilidade e forca para dar um grande dano no inimigo ardilosamente'},
        { name: '<:Fighter_Icon:790354726595985409> Fighter', value: 'Geralmente a linha de frente junto com o tanker, utiliza sua forca bruta para causar dano'},
        { name: '<:Healer_Icon:790354690683437127> Healer', value: 'Uma das Classes mais importantes, Utiliza sua magia para curar ou buffar o time, e tambem pode se camuflar'},
        { name: '<:JEAN_Mage_Icon:790354700712411146> Mage', value: 'Um ser humano com habilidades magicas que pode lancar raios, criar lancas de fogo ou entao uma parede de gelo'},
        { name: '<:Ranger_Icon:790355408769384448> Ranger', value: ' Um arqueiro habil, usa seu arco para dar dano, buffar o time ou reduzir a defesa do inimigo'},
        { name: '<:Tanker_Icon:790354674929631282> Tanker', value: 'Uma das Classes necessarias, Usa sua defesa descomunal para puxar o aggro de todos os inimigos'},
    )
    .setFooter('Utilize g!<nome da classe> para ver suas skills');
    const embf = new Discord.MessageEmbed()
	.setColor('#0303fc')
	.setTitle('SKills da classe FIGHTER')
	.setDescription('Classe baseada em "Strength" "Vitality" e "Defence"')
	.addFields(
		{ name: '**Lunge**', value: 'Um corte poderoso que tem como alvo a cabeça do inimigo. Dano baseado em sua STR\n Custa 10 de mana', inline: true },
        { name: '**Riposte**', value: 'Usa a sua espada para bloquear o ataque inimigo, enquanto da um pouco de dano no mesmo. Bloqueia todo o dano por 1 turno \n Custa 40 de mana', inline: true },
        { name: '**Weak Spots**', value: 'Acha o ponto fraco no inimigo e diminua sua defesa em 30% por 5 turnos \n Custa 15 de mana', inline: true },
	)
    .setImage('https://i.pinimg.com/originals/e5/dd/d5/e5ddd570f30b816268651c0112c3affd.png')
    const emba = new Discord.MessageEmbed()
	.setColor('#fcf803')
	.setTitle('SKills da classe Assassin')
	.setDescription('Classe baseada em "Strength" e "Agility"')
	.addFields(
		{ name: '**Sprint**', value: 'Corre em volta do inimigo e procura uma abertura\n Custa 10 de mana', inline: true },
        { name: '**Dagger Throw**', value: 'Joga uma adaga no inimigo. Dano baseado na STR \n Custa 7 de mana', inline: true },
        { name: '**BloodLust**', value: 'Voce se enche com uma sede de sangue que deixa o inimigo em um estado de medo reduzindo sua defesa em 20% \n Custa 15 de mana', inline: true },
	)
    .setImage('https://i.pinimg.com/originals/ac/ba/44/acba44d1964399bd3dbfed276f995a35.jpg')
    const embh = new Discord.MessageEmbed()
	.setColor('#03fc14')
	.setTitle('SKills da classe Healer')
	.setDescription('Classe baseada em "Inteligence"')
	.addFields(
		{ name: '**Buff <alvo>**', value: ' Buffa o aliado aumentando suas STR ou INT dependendo do turno (se for par STR e impar INT)\n Custa 20 de mana', inline: true },
        { name: '**Heal <alvo>**', value: 'Cura o aliado. A cura aumenta com a sua INT\n Custa 10 de mana', inline: true },
        { name: '**Camouflage**', value: 'Se camufla, ficando invisivel, ignora todo o dano por 3 turnos \n Custa 30 de mana', inline: true },
	)
    .setImage('https://static.wikia.nocookie.net/tsrd/images/9/90/Healer-0.jpg/revision/latest?cb=20200311235916&path-prefix=pt-br')
    const embm = new Discord.MessageEmbed()
	.setColor('#fc0303')
	.setTitle('SKills da classe Mage')
	.setDescription('Classe baseada em "Inteligence"')
	.addFields(
		{ name: '**Flame Spear**', value: 'Cria uma lanca de fogo para lança-la no oponente. Dano baseado na INT\n Custa 10 de mana', inline: true },
        { name: '**Thunderbolt**', value: 'Joga um raio no inimigo, o Dano aumenta com base na sua INT \n Custa 15 de mana', inline: true },
        { name: '**Ice Wall**', value: 'Cria uma parede de gelo para bloquear o dano do oponente \n Custa 20 de mana', inline: true },
	)
    .setImage('https://img-9gag-fun.9cache.com/photo/aN1q4L4_700b.jpg')
    const embr = new Discord.MessageEmbed()
	.setColor('#00ffbb')
	.setTitle('SKills da classe Ranger')
	.setDescription('Classe baseada em "Inteligence"')
	.addFields(
		{ name: '**Magic Arrow**', value: 'Sumona uma flecha magica poderosa para dar dano no inimigo. Dano baseado em INT \n Custa ?? de mana', inline: true },
        { name: '**Multi-Shoot**', value: 'Atira varias flechas no inimigo, todas acertam o mesmo local reduzindo a defesa do oponente em 30%\n Custa ?? de mana', inline: true },
        { name: '**Arrow Rain**', value: 'Atira uma chuva de flechas, que da um pouco de dano e aumenta a INT do time \n Custa ?? de mana', inline: true },
	)
    .setImage('https://3.bp.blogspot.com/-tHOMfIH1NnY/V-XWR_u-VII/AAAAAAAAFFI/6Xeunq11UIET-cQdZVFdcljtoNpG6Du4gCLcB/s1600/Ranger%2B1.jpg')
    const embt = new Discord.MessageEmbed()
	.setColor('#ff00ea')
	.setTitle('SKills da classe Tanker')
	.setDescription('Classe baseada em "Defence" e "Vitality"')
	.addFields(
		{ name: 'Barrier', value: 'Criar uma barreira pra proteger você ou o aliado reduzindo o dano recebido em 30%\n Custa 20 de mana', inline: true },
        { name: 'Taunt', value: 'Puxa o aggro do inimigo para você por 3 turnos \n Custa 20 de mana', inline: true },
        { name: 'Power Smash', value: 'Você bate com toda força no inimigo usando seu proprio braço. Dano baseado em STR \n Custa 30 de mana', inline: true },
	)
    .setImage('https://cdnb.artstation.com/p/assets/images/images/010/243/129/large/hyunjoong-tanker.jpg?1523373924')
client.once('ready', () => {
    console.log('Muninn esta expandindo sua mente!');
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        message.channel.send('pong!');
    } else if(command === 'cmd'){
        message.channel.send(' Aqui está a lista de comandos\n cl: Mostra o que as classes do bot <@703043558483034223> faz\n ping: Manda uma mensagem escrita "pong".\n');
    } else if(command === 'embed'){
        message.channel.send(emb);
    }
});

client.login(process.env.token);