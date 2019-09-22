module.exports = class pussy {
    constructor() {
        this.name = 'pussy',
            this.alias = ['pussy'],
            this.usage = 'i/pussy'
    }

    async run(client, message, args, Discord, lc) {
        var request = require('request'); //Meme Command
        const fetch = require("node-fetch");

        if (message.channel.nsfw != true) {
            return message.reply("This channel is not NSFW")
        }

        fetch('https://nekos.life/api/v2/img/pussy').then(response => {
            return response.json();
        }).then(json => { // Print the response status code if a response was received
            const boobEmbed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setAuthor(`${message.author.username}`)
                .setTitle("Puss puss")
                .setURL(json.url)
                .setImage(json.url)
                .setFooter('Sorry for the anime.')
            message.react("💓");
            message.channel.send(boobEmbed)
        })
    }
}
