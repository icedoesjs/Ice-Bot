module.exports = class wtxt {
        constructor() {
            this.name = 'wtxt',
                this.alias = ['wtxt'],
                this.usage = 'i/wtxt'
        }

        async run(client, message) {
            const prefix = "i/wtxt"
            const Discord = require('discord.js');
            const welcometxt = message.content.slice(prefix.length);
            const db = require('quick.db')
            
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Error, you do not have permission to do that.');

            if (!welcometxt.length) return message.reply(`Please proivde text, ${message.author}`)

            message.delete()
            db.set('serverInfo.wtxt', `${welcometxt}`) 
            console.log(`${message.guild.name}'s welcome text was set to ${welcometxt} by ${message.author.username}`)
            let finaltxt = db.get('serverInfo.wtxt')
            message.reply(`Your welcome text was set to: **${finaltxt}**`)
        }
}