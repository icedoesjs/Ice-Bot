module.exports = class showerthoughts {
    constructor() {
        this.name = 'st',
            this.alias = ['showerthoughts', 'st'],
            this.usage = 'i/st'
    }

    async run(client, message, args, Discord, lc) {
        var request = require('request'); //Meme Command
        const fetch = require("node-fetch");

        fetch('https://www.reddit.com/r/showerthoughts/random.json').then(response => {
            return response.json();
        }).then(json => { // Print the response status code if a response was received
            lc.count(json[0].data.children[0].data.selftext);
            if (json[0].data.children[0].data.selftext == 2047) {
                return message.reply("Sorry there was an error, please run the command again.");
            } else if (json[0].data.children[0].data.selftext < 2047);
            const stEmbed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setAuthor(json[0].data.children[0].data.author)
                .setTitle(json[0].data.children[0].data.title)
                .setURL(json[0].data.children[0].data.url)
                .setDescription(json[0].data.children[0].data.selftext)
                .setFooter('Shower Thoughts SubReddit')
            message.react("🚿");
            message.channel.send(stEmbed)
        })
    }
}