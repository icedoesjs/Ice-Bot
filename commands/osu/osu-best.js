module.exports = class best {
    constructor() {
        this.name = 'best',
            this.alias = ['best'],
            this.usage = 'i/best'
    }

    async run(client, message, args) {
        const Discord = require('discord.js')
        var apikey = 'OSU-API-KEY'
        const db = require('quick.db')
        var identifer = message.author.id
        var username = db.get(`userinfo${identifer}.osuname`)
        const fetch = require("node-fetch");

        if (username == undefined) return message.reply('It looks like your osu name is not set, please do i/osuname [name]')


        fetch(`https://osu.ppy.sh/api/get_user_best?u=${username}&m=0&k=${apikey}`).then(response => {
            return response.json();
        }).then(json => {
            var bmid = json[0].beatmap_id
            const user = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setTitle(`Best beatmap for ${username}`)
                .setURL(`https://osu.ppy.sh/beatmaps/${bmid}`)
                .addField('Score:', json[0].score, true)
                .addField('Max Combo:', json[0].maxcombo, true)
                .addField('Misses:', json[0].countmiss, true)
                .addField('Rank:', json[0].rank, true)
                .addField('PP:', json[0].pp, true)
                .addField('Date:', json[0].date, true)
                .setFooter(`Stats from osu.ppy.sh`)
            message.channel.send(user)
        })
    }
}
