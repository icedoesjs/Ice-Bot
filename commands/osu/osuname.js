module.exports = class osuname {
        constructor() {
            this.name = 'osuname',
                this.alias = ['osuname'],
                this.usage = 'i/osuname'
        }

        async run(client, message, args) {
                const Discord = require('discord.js')
                var username = args[1]
                const db = require('quick.db')
                var identifer = message.author.id

                if (!username) return message.reply('Please supply a username, this will set your osu username')

                db.set(`userinfo${identifer}.osuname`, `${username}`)
                console.log(`${message.author.username}'s osu name was set to ${username}`)
                return message.reply(`Your osu username was set to ${username}`)
        }
    }