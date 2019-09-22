module.exports = class stats {
        constructor() {
            this.name = 'stats',
                this.alias = ['stats', 'stats'],
                this.usage = 'i/stats'
        }

        async run(client, message, args, Discord, version, color) {
            var version = "Beta 1";
            var color = "#0000FF";
            const statsEmbed = new Discord.MessageEmbed()
                .setColor(`${color}`)
                .setAuthor(client.user.username)
                .setTitle(`Running for ${client.guilds.size} Guilds`)
                .setURL(`https://ice-bot.xyz`)
                .setImage(client.user.avatarURL)
                .setDescription(`Ice bot is running for ${client.guilds.size} guilds and ${client.users.size} users!`)
                .setFooter(`Node.JS Version: ${process.version} | Ice Bot Version: ${version}`)
            message.channel.send(statsEmbed)
        }
    }
