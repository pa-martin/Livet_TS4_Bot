module.exports.run = async (client, message, args) => {
    message.delete(1).catch(console.error);

    var request = require('request');

    var mcIP = "insérer l'adresser ip du serveur";
    var mcPort = 'péciser le port du serveur';
    var icon = 'https://eu.mc-api.net/v3/server/favicon/' + mcIP + ':' + mcPort;
    var url = 'https://api.mcsrvstat.us/2/' + mcIP + ':' + mcPort;
    var state = '';
    var playerMax = 0;
	var playerNow = 0;
    var playerList = '';
    var version = '';

    request(url, function(err, response, body) {
        if(err) {
            console.log(err);
        }
        
        body = JSON.parse(body);
        if(body.online == true) {
            state = 'Ouvert';
            playerMax = body.players.max;
		    playerNow = body.players.online;
		    playerList = body.players.list;
            version = body.version;

            var infoEmbed = {
                color: 0x00ff88,
                title: 'Infos sur le serveur Minecraft :',
                url: 'https://mcsrvstat.us/server/' + mcIP + ':' + mcPort,
                author: {
                    name: 'Commande : !mc',
                    icon_url: client.user.avatarURL,
                    url: '',
                },
                description: '',
                thumbnail: {
                    url: icon,
                },
                fields: [
                    {
                        name: '**IP :**',
                        value: mcIP + ':' + mcPort,
                    },
                    {
                        name: '**Version :**',
                        value: version,
                        inline: true,
                    },
                    {
                        name: '**Joueurs :**',
                        value: playerNow + '/' + playerMax,
                        inline: true,
                    },
                    {
                        name: '**État :**',
                        value: state,
                        inline: false,
                    },
                    {
                        name: "**Seed :**",
                        value: 'si volonté de partager la seed',
                        inline: false,
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: 'ask by ' + message.author.username,
                    icon_url: message.author.avatarURL,
                },
            };
            client.channels.get(message.channel.id).send({ embed: infoEmbed }).catch(console.error);
        }else{
            state = "Fermé"
            var infoEmbed = {
                color: 0x0ff0000,
                title: 'Infos sur le serveur Minecraft :',
                url: 'https://mcsrvstat.us/server/' + mcIP + ':' + mcPort,
                author: {
                    name: 'Commande : !mc',
                    icon_url: client.user.avatarURL,
                    url: '',
                },
                description: '',
                fields: [
                    {
                        name: '**État :**',
                        value: state,
                        inline: false,
                    },
                ],
                timestamp: new Date(),
                footer: {
                    text: 'ask by ' + message.author.username,
                    icon_url: message.author.avatarURL,
                },
            };
            client.channels.get(message.channel.id).send({ embed: infoEmbed }).catch(console.error);
        }
    });
}