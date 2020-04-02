const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`started`);
  client.user.setPresence({game: {name: '!help', type: 'PLAYING'} })
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandes/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if ((message.content.includes('quoi a faire'))||(message.content.includes('pour quand'))||(message.content.includes('pr quand'))) {
    client.channels.get(message.channel.id).send("Les devoirs ? C'est ici : <#689224518299942988> !")
    .then(function (message) {
        message.react('😉');
      });
  }
});

client.login(config.token);