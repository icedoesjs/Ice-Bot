module.exports = class copypasta {
    constructor() {
        this.name = 'copypasta',
            this.alias = ['copypasta', 'cp'],
            this.usage = 'i/cp'
    }

    async run(client, message, args, Discord, lc) {
        var request = require('request'); //Meme Command
        const fetch = require("node-fetch");

        fetch('https://www.reddit.com/r/copypasta/random/.json').then(response => {
            return response.json();
        }).then(json => { // Print the response status code if a response was received
            lc.count(json[0].data.children[0].data.selftext);
            if (json[0].data.children[0].data.selftext == 2047) {
                return message.reply("Sorry there was an error, please run the command again.");
            } else if (json[0].data.children[0].data.selftext < 2047);
            const memeEmbed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setAuthor(json[0].data.children[0].data.author)
                .setTitle(json[0].data.children[0].data.title)
                .setURL(json[0].data.children[0].data.url)
                .setDescription(json[0].data.children[0].data.selftext)
                .setFooter('From the copypasta subreddit')
            message.react("👇🏻");
            message.channel.send(memeEmbed)
        })
    }
}
