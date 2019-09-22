module.exports = class boobs {
    constructor() {
        this.name = 'boobs',
            this.alias = ['boobs'],
            this.usage = 'i/boobs'
    }

    async run(client, message, args, Discord, lc) {
        var request = require('request'); //Meme Command
        const fetch = require("node-fetch");

        if (message.channel.nsfw != true) {
            return message.reply("This channel is not NSFW")
        }

        fetch('https://nekos.life/api/v2/img/boobs').then(response => {
            return response.json();
        }).then(json => { // Print the response status code if a response was received
            const boobEmbed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setAuthor(`${message.author.username}`)
                .setTitle("Boobies!")
                .setURL(json.url)
                .setImage(json.url)
                .setFooter('Everyone loves Boobs!')
            message.react("💓");
            message.channel.send(boobEmbed)
        })
    }
}
