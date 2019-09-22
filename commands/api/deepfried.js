module.exports = class deepfried {
    constructor() {
        this.name = 'deepfried',
            this.alias = ['deepfried', 'df'],
            this.usage = 'i/df'
    }

    async run(client, message, args, Discord) {
        var request = require('request'); //Meme Command
        const fetch = require("node-fetch");

        fetch('https://www.reddit.com/r/deepfried/random/.json').then(response => {
            return response.json();
        }).then(json => { // Print the response status code if a response was received
            const memeEmbed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setAuthor(json[0].data.children[0].data.author)
                .setTitle(json[0].data.children[0].data.title)
                .setURL(json[0].data.children[0].data.url)
                .setImage(json[0].data.children[0].data.url)
                .setDescription(json[0].data.children[0].data.selftext)
                .setFooter('Welcome to the deepfried subreddit')
            message.react("👋🏻");
            message.channel.send(memeEmbed)
        })
    }
}
