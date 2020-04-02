module.exports.run = async (client, message, args) => {
    message.delete(1).catch(console.error);

    const mailEmbed = {
        color: 0x00ffff,
        title: 'Liste des commandes du bot :',
        author: {
            name: 'Commande : !help',
            icon_url: client.user.avatarURL,
            url: '',
        },
        description: '',
        fields: [
            {
                name: '**!help**',
                value: 'Pour afficher la liste des commandes.',
                inline: false,
            },
            {
                name: '**!mail**',
                value: 'Pour afficher la liste des mails des profs.',
                inline: true,
            },
            {
                name: '**!cours**',
                value: 'Pour afficher tous les cours virtuels.',
                inline: true,
            },
            {
                name: '**!devoirs**',
                value: 'Pour rediriger directement vers le channel des devoirs.',
                inline: true,
            },
            {
                name: '**!mc**',
                value: 'Pour obtenir le statut du serveur Minecraft de la classe.',
                inline: true,
            },
            {
                name: "**!players**",
                value: "Pour obtenir la liste des joueurs connectés sur le serveur Minecraft.",
                inline: true,
            },
        ],
        timestamp: new Date(),
        footer: {
            text: 'ask by ' + message.author.username,
            icon_url: message.author.avatarURL,
        },
    };
    
    client.channels.get(message.channel.id).send({ embed: mailEmbed });
}