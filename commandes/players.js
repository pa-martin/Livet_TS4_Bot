module.exports.run = async (client, message, args) => {
    message.delete(1).catch(console.error);

    var request = require('request');

    var mcIP = "insérer l'adresser ip du serveur";
    var mcPort = '25565';
    var url = 'https://api.mcsrvstat.us/2/' + mcIP + ':' + mcPort;
    var playerList = '';
    var playerNow = 0;

    request(url, function(err, response, body) {
        if(err) {
            console.log(err);
        }
        
        body = JSON.parse(body);
        if(body.online == true) {
            playerList = body.players.list;
            playerNow = body.players.online;

            if(playerList == undefined) {
                client.channels.get(message.channel.id).send("<@" + message.author.id +"> Le serveur est vide...");
            }else{
                client.channels.get(message.channel.id).send("<@" + message.author.id + "> Voici la liste des joueurs connectés sur le serveur :");
                for (let i = 0; i < playerNow; i++) {
                    client.channels.get(message.channel.id).send(" - " + playerList[i]);
                }
            }

        }else{
            client.channels.get(message.channel.id).send("<@" + message.author.id + "> Désolé, mais le serveur est actuellement offline, n'hésite pas à contacter un admin pour plus d'infos ;)");
        }
    });
}