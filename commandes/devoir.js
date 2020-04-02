module.exports.run = async (client, message, args) => {
    message.delete(1).catch(console.error);
    client.channels.get(message.channel.id).send("C'est pourtant pas bien compliqué <@" + message.author.id + ">, il te suffit d'aller dans ce channel : <#689224518299942988> !")
    .then(function (message) {
        message.react('😡');
    });
}