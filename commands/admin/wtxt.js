module.exports = class wtxt {
        constructor() {
            this.name = 'wtxt',
                this.alias = ['wtxt'],
                this.usage = 'i/wtxt'
        }

        async run(client, message) {
            const Discord = require('discord.js')
            const prefix = 'i/wtxt'
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            var text = args.slice(0).join(' ');
            const db = require('quick.db')
            var sid = message.guild.id 

             if (!message.member.hasPermission("ADMINISTRATOR"))
                 return message.reply("Error, you don't have permissions for that!");
            
            if (!text) {
             return message.reply('Please give me a welcome message...')
            } else {
             message.reply(`Your welcome message was set to **${text}**`)
                db.set(`serverinfo.wtxt${sid}`, `${text}`)
                console.log(`[Welcome] Message for ${sid} was set to ${text}`)
            }
        }}
