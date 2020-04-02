module.exports.run = async (client, message, args) => {
    message.delete(1).catch(console.error);

    const mailEmbed = {
        color: 0xff8800,
        title: 'Liste des cours virtuels des professeurs :',
        author: {
            name: 'Commande : !cours',
            icon_url: client.user.avatarURL,
            url: '',
        },
        description: '',
        fields: [
            {
                name: '**🧪 Physique-Chimie :**',
                value: 'https://eu.bbcollab.com/guest/nope \n Cours tous les **Lundi**, **Mercredi** et **Vendredi** à **14h**.',
                inline: false,
            },
            {
                name: '**💡 Élec :**',
                value: 'https://eu.bbcollab.com/guest/nope \n Cours quand bon lui semble ou en cas de demande de la part des <@&688292801137606667>. \n=> Prochain cours le **Jeudi 09/04** à **13h30**.',
                inline: true,
            },
            {
                name: '**⚙ Méca :**',
                value: 'https://eu.bbcollab.com/guest/nope \n Cours tous les **Mardi** à **10h** ainsi que le **Jeudi** même heure pour les questions.',
                inline: true,
            },
            {
                name: '**🏮 Histoire-Géographie :**',
                value: 'https://eu.bbcollab.com/guest/nope \n Cours tous les **Vendredi** à **15h30**.',
                inline: false,
            },
            {
                name: '**😂 Education Physique et Sportive :**',
                value: "https://eu.bbcollab.com/guest/nope \n _Pour l'instant,_" + ' "cours" le mercredi et le samedi à 10h30',
                inline: false,
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