module.exports.run = async (client, message, args) => {
    message.delete(1).catch(console.error);

    const mailEmbed = {
        color: 0xff0088,
        title: '📧 Liste des e-mails des professeurs :',
        author: {
            name: 'Commande : !mail',
            icon_url: client.user.avatarURL,
            url: '',
        },
        description: '',
        fields: [
            {
                name: '🧪 **Physique-Chimie :**',
                value: '<demo>',
            },
            {
                name: '💡 **SI élec :**',
                value: '<demo>',
                inline: true,
            },
            {
                name: '⚙ **SI méca :**',
                value: '<demo>',
                inline: true,
            },
            {
                name: "💤 **Philosophie :**",
                value: "<demo>",
                inline: false,
            },
            {
                name: '🏮 **MHistoire-géo :**',
                value: '<demo>',
                inline: false,
            },
            {
                name: '🇬🇧 **Anglais :**',
                value: '<demo>',
                inline: false,
            },
            {
                name: "❔ **Conseillère Principale d'Orientation** (parcoursup) **:**",
                value: "<demo>",
                inline: false,
            }
        ],
        timestamp: new Date(),
        footer: {
            text: 'ask by ' + message.author.username,
            icon_url: message.author.avatarURL,
        },
    };
    
    client.channels.get(message.channel.id).send({ embed: mailEmbed });
}